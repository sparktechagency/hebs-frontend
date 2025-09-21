/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, message, Input } from "antd";
import Link from "next/link";
import styles from "@/app/styles.module.css";
import { useForm, Controller } from "react-hook-form";
import { useChangePassMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

const ChangePassword = () => {
    const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // 
const [changePass]=useChangePassMutation()
const router = useRouter()
  const onSubmit = async(info: any) => {
    console.log("Password change data:", info);
    try {
        const res = await changePass(info)
        console.log(res);
        message.success(res?.data?.message );
        if(res?.data){
    dispatch(logout());
            router.push("/login")
        }
    } catch (error) {
    console.log(error);
    }
  };

  return (
    <div
      className={`md:min-h-screen flex items-center justify-center mt-5 md:mt-0 px-4 md:py-12 bg-white ${styles.fontInter}`}
    >
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Change Password</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" noValidate>
          <div className="space-y-4 rounded-md">
            {/* Email Field with Controller */}
            <div>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter Email"
                    className="h-12 rounded-xl"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
              )}
            </div>

            {/* Old Password Field */}
            <div>
              <Controller
                name="oldPassword"
                control={control}
                rules={{ required: "Old password is required" }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    placeholder="Enter Old Password"
                    className="h-12 rounded-xl"
                  />
                )}
              />
              {errors.oldPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.oldPassword.message as string}</p>
              )}
            </div>

            {/* New Password Field */}
            <div>
              <Controller
                name="newPassword"
                control={control}
                rules={{ required: "New password is required" }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    placeholder="Enter New Password"
                    className="h-12 rounded-xl"
                  />
                )}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.newPassword.message as string}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#FF4444] text-white rounded-xl"
          >
            Change Password
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Back to{" "}
              <Link
                href="/my-profile"
                className="text-[#FF4444] hover:text-[#FF6666]"
              >
                Profile
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
