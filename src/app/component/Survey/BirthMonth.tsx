"use client";
import { Select } from "antd";

import style from "@/app/styles.module.css";

import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
const BirthMonth = ({
  setIsBirthYear,
  setIsBirthMonth,
  setIsRelation,
  setData,
}: {
  setIsBirthYear: (value: boolean) => void;
  setIsRelation: (value: boolean) => void;
  setIsBirthMonth: (value: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: any;
}) => {
//   const [selectedMonth, setSelectedMonth] = useState(null);

  // ✅ List of 12 months dynamically
  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Selected month:", data.birthMonth);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setData((prev: any) => ({ ...prev, birthMonth: data.birthMonth }));
    setIsBirthMonth(false);
    setIsBirthYear(true);
  };
  // handle go back
  const handleBack = () => {
    setIsRelation(true);
    setIsBirthMonth(false);
  };
  // handle go next
//   const handleNext = () => {
//     setIsRelation(false);
//     setIsBirthYear(true);
//   };
  return (
    <div>
      {/* Content Wrapper */}
      <div className="text-center max-w-md w-full p-10">
        <h3
          className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}
        >
          What month was Talia Mosleh born?
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center max-w-md w-full p-10"
        >
          <Controller
            name="birthMonth"
            control={control}
            rules={{ required: "Please select a month" }}
            render={({ field }) => (
              <Select
                {...field}
                showSearch
                placeholder="Select Month"
                className="w-full"
                options={months}
                onChange={(value) => field.onChange(value)}
              />
            )}
          />
          {errors.birthMonth && (
            <p className="text-red-500 text-sm mt-1">
              {errors.birthMonth.message as string}
            </p>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition"
            >
              Continue
            </button>
          </div>
             {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-white border-t border-gray-200">
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-gray-700">
              18% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: "18%" }}
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

          <button
          type="submit"
            className="text-gray-500 hover:text-gray-700"
            // disabled={!selectedMonth}
            // onClick={() => handleNext()}
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
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
        </form>
      </div>

   
    </div>
  );
};

export default BirthMonth;
