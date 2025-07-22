/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link"
import styles from "@/app/styles.module.css"
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { message } from "antd";
import { useRouter } from "next/navigation";

interface SignUpFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>();
  const [signUp] = useSignUpMutation();
const router = useRouter()
const showErrorMessage = (error: any) => {
  let msg = 'Something went wrong! Try again.';

  if (error.data?.message === 'Request validation error!' && Array.isArray(error.data?.data)) {
    msg = error.data.data[0]?.message || msg;
  } else {
    msg = error.data?.message || error.message || error.data?.error || msg;
  }

  message.error(msg);
};


  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      const response = await signUp(data).unwrap();
      
      message.success(response?.message)
     router.push("/login")
      console.error("Signup response:", response?.message);
      // Redirect user or show success message
    } catch (error:any) {
      console.error("Signup failed:", error);
     showErrorMessage(error)
      // Show error to user
    }
  };
  
  return (
    <div className={`max-w-md mx-auto px-4 py-8 ${styles.fontInter}`}>
      <h1 className="text-2xl font-bold text-center mb-8">Create Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-gray-500">
            First Name
          </label>
          <input
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-gray-500">
            Last Name
          </label>
          <input
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-500">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-gray-500">
            Phone Number
          </label>
          <input
            id="phone"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-gray-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div className={`text-sm text-gray-700 space-y-2 ${styles.fontInter}`}>
          <p>Be sure to use the email address associated with your fair<br />Any questions? Contact your sales representative</p>
        </div>

        <div className={`text-sm ${styles.fontInter}`}>
          <p>
            By signing up, you&apos;re agreeing to our{" "}
            <Link href="/terms" className="text-[#F37975] hover:underline">Terms & Conditions</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#F37975] hover:underline">Privacy Policy</Link>.
          </p>
        </div>

        <button
          type="submit"
          className={`w-full bg-[#FBD5D4] text-gray-700 font-medium py-3 rounded-lg hover:bg-[#F37975] transition-colors ${styles.fontInter}`}
        >
          Create Account
        </button>
      </form>

      <div className={`text-center mt-6 ${styles.fontInter}`}>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-[#F37975] hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
