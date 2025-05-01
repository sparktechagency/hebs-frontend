/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "antd";
import React from "react";
import { RightOutlined } from "@ant-design/icons";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import style from "@/app/styles.module.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Name = ({ setIsRelation, setIsName,setData }: { setIsRelation: (value: boolean) => void, setIsName: (value: boolean) => void,setData:any }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Submitted name:", data.readerName); // This will now log correctly
    setIsName(false)
    setIsRelation(true)
    setData((prev: any) => ({ ...prev, readerName: data.readerName }));
  };
  return (
    <div>
      <h3
        className={`text-[#F37975] font-medium text-xl mb-2 ${style.fontInter}`}
      >
        What is your reader’s name?
      </h3>

      <h2 className="font-bold text-[#F37975] my-5">First and last name</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center "
      >
        {/* Controlled Input Field */}
        <Controller
          name="readerName"
          control={control}
          rules={{ required: "readerName is required" }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Type your name here"
              className="w-full py-3 px-3 focus:border-[#F37975] focus:ring-[#F37975] rounded-md"
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name.message as string}
          </p>
        )}

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition"
          >
            <span className="font-semibold">Continue</span>
            <RightOutlined />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Name;
