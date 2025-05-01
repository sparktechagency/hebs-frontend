/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import style from "@/app/styles.module.css";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { updateSurveyData } from "@/redux/features/survey/surveySlice";
import { useRouter } from "next/navigation";

const Email = ({
  setIsEmail,
  setData,
  setIsSpend,
  // setIsRecomended,
  data,
}: {
  setIsEmail: (value: boolean) => void;
  setIsSpend: (value: boolean) => void;
  // setIsRecomended: (value: boolean) => void;
  setData: any;
  data: any;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (d) => {
    console.log("Email entered:", d.email);
    setData((prev: any) => ({ ...prev, email: d.email }));

    const year = data?.birthYear;
    const month = data?.birthMonth;
    // If you have a day field, use it. If not, default to the first day of the month:
    const day = "01";

    // Pad month and day to ensure 2-digit format
    const paddedMonth = String(month).padStart(2, "0");
    const paddedDay = String(day).padStart(2, "0");

    const dateOfBirth = `${year}-${paddedMonth}-${paddedDay}`;
    const surveyData = {
      readerName: data.readerName,
      email: data.email,
      relation: data.relation,
      gender: data.gender,
      dateOfBirth: dateOfBirth,
      favoriteCollection: data.facoriteCollection,
      interestInArabic: data.interestInArabic,
      lavelInArabic: data.lavelInArabic,
      constSpend: {
        statement: data.statement,
      },
    };
    console.log("surveyData from form inside email compo", surveyData);

    dispatch(updateSurveyData(surveyData));
    router.push("/recomended")
    // You can now proceed to the final step or submit the collected data
    // setIsEmail(false);
    // setIsRecomended(true)
  };

  const handleBack = () => {
    setIsEmail(false);
    setIsSpend(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-center max-w-md w-full p-10"
    >
      <h3
        className={`text-[#F37975] font-medium text-xl mb-4 ${style.fontInter}`}
      >
        Lastly, what is your email?
      </h3>

      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="email"
            placeholder="Type your email here"
            className="w-full mt-5 py-3 focus:border-[#F37975] focus:ring-[#F37975]"
          />
        )}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">
          {errors.email.message as string}
        </p>
      )}

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className="border border-black text-black px-6 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Submit
        </button>
      </div>
      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-white border-t border-gray-200">
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-gray-700">
              93% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: "93%" }}
            ></div>
          </div>
        </div>
        <div className="relative top-3 flex gap-4">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => handleBack()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button type="submit" className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Email;
