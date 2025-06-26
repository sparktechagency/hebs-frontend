/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import style from "@/app/styles.module.css";
import { Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";


const Relation = ({
  setIsRelation,
  setIsBirthMonth,
  setData,
  data
}: {
  setIsRelation: (value: boolean) => void;
  setIsBirthMonth: (value: boolean) => void;
  setData: any;
   data:any
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Submitted relationship:", data.relation); // ✅ Will log the selected value
    setIsRelation(false);
    setIsBirthMonth(true);
    setData((prev: any) => ({ ...prev, relation: data.relation}));
  };

  const filterSort = (
    optionA: { label: string },
    optionB: { label: string }
  ) =>
    (optionA?.label ?? "")
      .toLowerCase()
      .localeCompare((optionB?.label ?? "").toLowerCase());


  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-center max-w-md w-full p-10"
      >
        <h3 className={`text-[#F37975] font-medium text-xl mb-12 ${style.fontInter}`}>
          What is your relationship to {data?.readerName}
        </h3>

        {/* Controlled Select Field */}
        <Controller
          name="relation"
          control={control}
          rules={{ required: "Relation is required" }}
          render={({ field }) => (
            <Select
              {...field}
              showSearch
              className="w-full "
              placeholder="Select an option"
              optionFilterProp="label"
              filterSort={filterSort}
              options={[
                { value: "Parent", label: "Parent" },
                { value: "Grandparent", label: "Grand Parent" },
                { value: "Guardian", label: "Guardian" },
                { value: "Teacher", label: "Teacher" },
                { value: "Friend", label: "Friend" },
                { value: "Other Relative", label: "Other Relative" },
              ]}
            />
          )}
        />
        {errors.relation && (
          <p className="text-red-500 text-sm mt-1">{errors.relation.message as string}</p>
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

export default Relation;
