/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Select } from "antd";
import style from "@/app/styles.module.css";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";


const BirthYear = ({
  setIsBirthYear,
  setIsBirthMonth,
  setIsGender,
  setData,
}: {
  setIsBirthYear: (value: boolean) => void;
  setIsGender: (value: boolean) => void;
  setIsBirthMonth: (value: boolean) => void;
  setData: any;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Dynamic year options from 1980 to current year
  const startYear = 2015;
  const currentYear = new Date().getFullYear();
  const birthYears = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => ({
      value: (startYear + i).toString(),
      label: (startYear + i).toString(),
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Selected year:", data.birthYear);
 
    setData((prev: any) => ({ ...prev, birthYear: data.birthYear }));
    setIsBirthYear(false);
    setIsGender(true);
  };

  // handle go back
  const handleBack = () => {
    setIsBirthYear(false);
    setIsBirthMonth(true);
  };


  return (
    <div>
      <h3
        className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}
      >
        What year were they born?
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center max-w-md w-full p-1"
      >
        <Controller
          name="birthYear"
          control={control}
          rules={{ required: "Please select a year" }}
          render={({ field }) => (
            <Select
              {...field}
              showSearch
              placeholder="Select Year"
              className="w-full"
              options={birthYears}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
        {errors.birthYear && (
          <p className="text-red-500 text-sm mt-1">
            {errors.birthYear.message as string}
          </p>
        )}

        <div className="mt-6 flex justify-center items-center">
          <button
            type="submit"
            className="border border-black text-black px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Continue
          </button>
        </div>
      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-white border-t border-gray-200">
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-gray-700">
              32% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: "32%" }}
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
            className="text-gray-500 hover:text-gray-700"
         type="submit"
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
  );
};

export default BirthYear;
