/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Select } from "antd";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import style from "@/app/styles.module.css";

const BooksLevel = ({
  setIsSpend,
  setData,
  setIsInterested,
  setIsBooksLevel,
}: {
  setIsBooksLevel: (value: boolean) => void;
  setIsSpend: (value: boolean) => void;
  setIsInterested: (value: boolean) => void;
  setData: any;
}) => {
  const topics = [
    { value: "begginers", label: "Beginners" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advance", label: "Advanced" },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Selected book level:", data.lavelInArabic);
    setData((prev: any) => ({ ...prev, lavelInArabic: data.lavelInArabic }));
    setIsBooksLevel(false);
    setIsSpend(true);
  };

  const handleBack = () => {
    setIsBooksLevel(false);
    setIsInterested(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-center max-w-md w-full p-10">
      <h3 className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}>
        What level of Arabic books are you interested in?
      </h3>

      <Controller
        name="lavelInArabic"
        control={control}
        rules={{ required: "Please select a level" }}
        render={({ field }) => (
          <Select
            {...field}
            showSearch
            className="w-full"
            placeholder="Choose a level"
            optionFilterProp="label"
            options={topics}
            onChange={(value) => field.onChange(value)}
          />
        )}
      />
      {errors.lavelInArabic && (
        <p className="text-red-500 text-sm mt-1">{errors.lavelInArabic.message as string}</p>
      )}

      <div className="mt-6 flex justify-center">

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
              76% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: "76%" }}
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
  );
};

export default BooksLevel;
