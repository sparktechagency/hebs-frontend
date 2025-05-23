/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Slider, Input, message } from "antd";
import wild from "@/assets/wild.png";

import { useAppSelector } from "@/redux/hooks";
import { selectCurrentCategoryId } from "@/redux/features/boxes/boxesSlice";
import {
  useGetSpecefiqBoxesQuery,
  useReviewBoxesMutation,
} from "@/redux/features/boxes/boxesApi";
import LoadingPage from "@/app/loading";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { useForm, Controller } from "react-hook-form";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const { TextArea } = Input;

type FormData = {
  selectedEmoji: string;
  difficultyLevel: number;
  topicRating: number;
  comments: string;
};

const BookReview = () => {
  const [createReview] = useReviewBoxesMutation();
  const user = useAppSelector(selectCurrentUser);

  const {
    handleSubmit,

    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<FormData>({});
  const currentCategory = useAppSelector(selectCurrentCategoryId);
  const categoryId = currentCategory?.categoryID;
  const { data: specifiqBox, isLoading } = useGetSpecefiqBoxesQuery(
    categoryId,
    {
      skip: !categoryId,
    }
  );
  const boxs = specifiqBox?.data;
  // console.log("box===>", boxs?._id);
  if (isLoading) {
    return <LoadingPage />;
  }

  const emojis = [
    { emoji: "😵", label: "Dizzy" },
    { emoji: "😒", label: "Unamused" },
    { emoji: "😮", label: "Surprised" },
    { emoji: "😃", label: "happy" },
    { emoji: "😍", label: "Love" },
  ];

  const difficultyMarks: { [key: number]: string } = {
    1: "Too Easy",
    2: "A little hard",
    3: "medium",
    4: "Hard",
    5: "Too Hard",
  };

  const topicMarks: Record<number, string> = {
    1: "disliked",
    2: "Somewhat",
    3: "Okay",
    4: "Liked",
    5: "Loved",
  };

  const onSubmit = async (data: FormData) => {
    // console.log("Full data:", data);
    const difficultyLabel = difficultyMarks[data.difficultyLevel];
    // console.log("Difficulty Level:", difficultyLabel);
    const topicLabel = topicMarks[data.topicRating];
    // console.log("Topic & Themes:", topicLabel);
    // console.log("Comments:", data.comments);
    const review = {
      user: user?.userId,
      box: boxs?._id,
      readerThought: data?.selectedEmoji,
      difficulty: difficultyLabel,
      topicAndTheme: topicLabel,
      comment: data.comments,
    };
    try {
      console.log("data", review);
      const res = await createReview(review);
      console.log("res==>", res);
      if (res?.data) {
        message.success(res?.data?.message);
      } else {
        message.error("An unknown error occurred");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-[#EDEBE6] pt-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl min-h-screen mx-auto bg-[#FFFFFF] rounded-lg shadow-2xl pt-3 px-12 "
      >
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-semibold">Your Book Reviews</h1>
          <span className="text-lg">1/5</span>
        </div>

        <div className="flex gap-4 pb-6 border-b">
          <div className="flex-shrink-0">
            <Image
              src={wild}
              alt="Book cover"
              width={80}
              height={100}
              className="object-cover rounded-md"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium">{boxs?.title}</h2>
            <p className="text-gray-600">By Islam</p>
            <p className="text-lg font-semibold mt-1">
              {currencyFormatter(boxs?.price?.amount)}
            </p>
          </div>
        </div>

        <div className="py-2">
          <h3 className="text-xl font-medium text-center mb-3">
            What did your reader think?
          </h3>

          <div className="flex justify-center gap-6 mb-5">
            <Controller
              control={control}
              name="selectedEmoji"
              render={({ field }) => (
                <>
                  {emojis.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => field.onChange(item.label)}
                      className={`text-4xl transition-transform ${
                        field.value === item.label
                          ? "scale-125"
                          : "hover:scale-110"
                      }`}
                      aria-label={item.label}
                    >
                      {item.emoji}
                    </button>
                  ))}
                </>
              )}
            />
          </div>

          <div className="mb-2">
            <h3 className="text-xl font-medium text-center mb-2">
              Difficulty Level
            </h3>
            <Controller
              control={control}
              name="difficultyLevel"
              render={({ field }) => (
                <Slider
                  {...field}
                  marks={difficultyMarks}
                  step={1}
                  min={1}
                  max={5}
                  className="mx-4"
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
          </div>

          <div className="mb-2">
            <h3 className="text-xl font-medium text-center mb-2">
              Topic & Themes
            </h3>
            <Controller
              control={control}
              name="topicRating"
              render={({ field }) => (
                <Slider
                  {...field}
                  marks={topicMarks}
                  step={1}
                  min={1}
                  max={5}
                  className="mx-4"
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
          </div>

          <div className="text-center text-gray-500 text-sm mb-2">OPTIONAL</div>

          <div>
            <h3 className="text-xl font-medium mb-2">Share your thoughts</h3>
            <p className="text-gray-600 mb-4">
              Help other parents by letting them know what your reader thought
              about this book.
            </p>
            <Controller
              name="comments"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder="Write your review here..."
                  maxLength={300}
                  showCount
                  rows={3}
                  className="bg-gray-100 rounded-md"
                />
              )}
            />
          </div>

          <div className="flex justify-center gap-8 pt-4">
            {/* <Link href={"/reviews-second"}>
              <button
                type="button"
                className="h-10 w-36 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all uppercase"
              >
                Skip Book
              </button>
            </Link> */}
            <button
              type="submit"
              className="h-10 w-36 rounded-full bg-[#F37975] px-8 text-lg hover:bg-[#e57373] text-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookReview;
