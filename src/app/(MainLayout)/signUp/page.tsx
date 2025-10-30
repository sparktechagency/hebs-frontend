/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link"
import styles from "@/app/styles.module.css"
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import {  message } from "antd";
import { useRouter } from "next/navigation";
// import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentSurvey } from "@/redux/features/survey/surveySlice";
import { useGetSpecServeyQuery } from "@/redux/features/survey/surveyApi";
import { useEffect} from "react";


interface SignUpFormInputs {
  survey?:string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
   street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

const SignUpPage = () => {
  const { register, handleSubmit,setValue, formState: { errors } } = useForm<SignUpFormInputs>();

 const userServey = useAppSelector(selectCurrentSurvey);
//  console.log("user survey--->",userServey?.email);
  const [signUp] = useSignUpMutation();
  const {data:getSpecServey}=useGetSpecServeyQuery(userServey?.email)
   console.log("spec user survey from db--->",getSpecServey?.data?._id);
    useEffect(() => {
    if (getSpecServey?.data?._id) {
      setValue("survey", getSpecServey?.data?._id);
    }
  }, [getSpecServey, setValue]);
  useEffect(() => {
  if (userServey?.email) {
    setValue("email", userServey.email); // Only when email exists
    // console.log("Default email set:", userServey.email);
  }
}, [userServey, setValue]);

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
    console.log("------->",data);
const modifiedData={
  ...data,
  shippingAddress:{
    state:data?.state,
    city:data?.city,
    country:data?.country,
    zipCode:data?.zipCode,
    street:data?.street
  }
}


console.log("modified data------>",modifiedData);

    try {
      const response = await signUp(modifiedData).unwrap();
      
      message.success(response?.message)
     router.push("/login")
      console.error("Signup response:", response?.message);
      // Redirect user or show success message
    } catch (error:any) {
      // console.error("Signup failed:", error);
     showErrorMessage(error)
      // Show error to user
    }
  };
  
  return (
    <div className={`max-w-md mx-auto px-4 py-8 ${styles.fontInter}`}>
      <h1 className="text-2xl font-bold text-center mb-8">Create Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className="space-y-2 hidden"> 
          <label htmlFor="survey" className="block text-gray-500"> 
          Survey Id
          </label>
{getSpecServey?.data?._id && (
  <input
    id="survey"
    defaultValue={getSpecServey.data._id}
    {...register("survey")} 
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
  />
)}


        </div>   


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
            readOnly={!!userServey?.email}
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
   <div>
                    <label className="block text-sm text-gray-500 mb-1">Street Address</label>
               
                        <input
            id="street"
            
            {...register("street", { required: "street is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
                    {errors?.street && (
                      <p className="text-red-600">{errors.street.message}</p>
                    )}
                  </div>

                  {/* City & State */}
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-500 mb-1">City</label>
                 
                                            <input
            id="city"
            
            {...register("city", { required: "city is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
                      {errors.city && (
                        <p className="text-red-600">{errors.city.message}</p>
                      )}
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm text-gray-500 mb-1">State</label>
                   
                                            <input
            id="state"
            
            {...register("state", { required: "state is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
                      {errors.state && (
                        <p className="text-red-600">{errors.state.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Zip Code & Country */}
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-500 mb-1">Zip Code</label>
                   
                                            <input
            id="zipCode"
            
            {...register("zipCode", { required: "zipCode is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
                      {errors.zipCode && (
                        <p className="text-red-600">{errors.zipCode.message}</p>
                      )}
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm text-gray-500 mb-1">Country</label>
                 
                                            <input
            id="country"
            
            {...register("country", { required: "country is required" })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
                      {errors?.country && (
                        <p className="text-red-600">{errors.country.message}</p>
                      )}
                    </div>
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
