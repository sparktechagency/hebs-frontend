/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Select } from "antd";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import style from "@/app/styles.module.css";

const Spend = ({
  setIsEmail,
  setData,
  setIsBooksLevel,
  setIsSpend,
}: {
  setIsBooksLevel: (value: boolean) => void;
  setIsEmail: (value: boolean) => void;
  setIsSpend: (value: boolean) => void;
  setData: any;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Selected spending range:", data.monthlySpend);

    setData((prev: any) => ({
        ...prev,
       
          statement: data.monthlySpend
       
      }));
      
    setIsSpend(false);
    setIsEmail(true);
  };

  const handleBack = () => {
    setIsSpend(false);
    setIsBooksLevel(true);
  };

  const spend = [
    { value: "$7-15 I might keep 1-2 books per month", label: "$7-15 I might keep 1-2 books per month" },
    { value: "$15-25 I might keep 2-3 books per month", label: "$15-25 I might keep 2-3 books per month" },
    { value: "$25-35 I might keep 3-4 books per month", label: "$25-35 I might keep 3-4 books per month" },
    { value: "$30-50 I hope to keep most books each month", label: "$30-50 I hope to keep most books each month" },
    { value: "$35-60 I hope to keep all books in each box", label: "$35-60 I hope to keep all books in each box" },
    { value: "$0 I plan to browse but not buy books", label: "$0 I plan to browse but not buy books" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-center max-w-md w-full p-10">
      <h3 className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}>
        How much do you wish to spend on books each month?
      </h3>

      <Controller
        name="monthlySpend"
        control={control}
        rules={{ required: "Please select an option" }}
        render={({ field }) => (
          <Select
            {...field}
            showSearch
            className="w-full"
            placeholder="Select a range"
            optionFilterProp="label"
            options={spend}
            onChange={(value) => field.onChange(value)}
          />
        )}
      />
      {errors.monthlySpend && (
        <p className="text-red-500 text-sm mt-1">{errors.monthlySpend.message as string}</p>
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
              84% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: "84%" }}
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

export default Spend;
