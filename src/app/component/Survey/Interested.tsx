/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Select } from "antd";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import style from "@/app/styles.module.css";

const Interested = ({
  setIsBooksLevel,
  setIsTopics,
  setIsInterested,
  setData,
}: {
  setIsBooksLevel: (value: boolean) => void;
  setIsTopics: (value: boolean) => void;
  setIsInterested: (value: boolean) => void;
  setData: any;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Interested in Arabic books:", data.interestInArabic);
    setData((prev: any) => ({ ...prev, interestInArabic: data.interestInArabic }));
    setIsInterested(false);
    setIsBooksLevel(true);
  };

              // handle go back
              const handleBack = () => {
                setIsInterested(false);
                setIsTopics(true);
              };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-center max-w-md w-full p-10">
      <h3 className={`text-[#F37975] font-medium text-xl mb-2 ${style.fontInter}`}>
        Would you be interested in receiving books written in Arabic?
      </h3>

      <Controller
        name="interestInArabic"
        control={control}
        rules={{ required: "Please select an option" }}
        render={({ field }) => (
          <Select
            {...field}
            className="w-full mt-5"
            placeholder="Select an option"
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            onChange={(value) => field.onChange(value)}
          />
        )}
      />
      {errors.interestInArabic && (
        <p className="text-red-500 text-sm mt-1">{errors.interestInArabic.message as string}</p>
      )}

      <div className="mt-6 flex justify-between">

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
              68% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: "68%" }}
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

export default Interested;
