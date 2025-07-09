/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Form, Input, message, Tooltip } from "antd";
import { InfoCircleOutlined, LeftOutlined,  MailOutlined,  RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import packaging from "@/assets/tinnymuslimBox.png";
import Link from "next/link";
import handShack from "@/assets/handshake-light-skin-tone_svgrepo.com.png";

import { selectCurrentPlan } from "@/redux/features/subscription/subscriptionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCurrentUser, setUser, TUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/VerifyToken";
import styles from "@/app/styles.module.css"
import { useCreateSubscriptionMutation } from "@/redux/features/subscription/subscriptionApi";
import { useCreateServeyMutation } from "@/redux/features/survey/surveyApi";
import { selectCurrentSurvey } from "@/redux/features/survey/surveySlice";
import { setCookie } from "cookies-next";
export default function CheckoutPage() {
    const [login] = useLoginMutation();
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
  const plan = useAppSelector(selectCurrentPlan);
  const [createSubscription] = useCreateSubscriptionMutation();
  const [createSurvey] = useCreateServeyMutation();

  const user = useAppSelector(selectCurrentUser);
  const router = useRouter();

  // Local state to control redirect flow
  // const [redirecting, setRedirecting] = useState(false);

  // useEffect(() => {
  //   if (!user && !redirecting) {
  //     message.error("User Not found Please Login");
  //     setRedirecting(true);
  //     setTimeout(() => {
  //       router.push("/login");
  //     }, 1000);
  //   }
  // }, [user, redirecting, router]);


  const setUserCookie = (userInfo: any) => {
    setCookie("user", JSON.stringify(userInfo), {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
  };
  const onFinish = async (values: any) => {
    try {

      const res = await login(values).unwrap();

      setLoading(true);
      const user = verifyToken(res.data.accessToken) as TUser;
      const modifiedUser = { userId: res?.data?._id,userName:res?.data?.name, user: user };
      // console.log(modifiedUser);
      // console.log("dispatchUser", user);
      dispatch(setUser({ user: modifiedUser, token: res.data.accessToken }));
            setUserCookie(res.data.accessToken);
      setLoading(false);
      message.success(res.message);

    } catch (error: any) {
      message.error(error?.data?.message || error.data.error);

    } finally {
      setLoading(false);
    }
  };



  // const [confirmPayment,setConfirmPayment]=useState(false)

  // const [paymentMethod, setPaymentMethod] = useState("credit");
  // const [agreed, setAgreed] = useState(false);

  // console.log("subTotal=>",subTotal);
  // console.log("ceck=>",agreed);

  const surveyData = useAppSelector(selectCurrentSurvey);
  // console.log("survey from redux",surveyData);
  // Initialize React Hook Form
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const {
  //     control,
  //     handleSubmit,

  //     formState: { errors },
  //   } = useForm<FormData>({
  // });
  console.log("survey data",surveyData);

  console.log("current plan get purchase id...=>", plan);

  const handlePlanPurchase = async () => {
    if(!user){
      message.error("You have to login first")
      return
    }
    const orderData = {
      userId: user?.userId,
      priceId: plan?.priceId,
    };
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = (await createSubscription(orderData)) as any;
      console.log("response===>", res);
      if (res?.data) {
        message.success(res?.data?.message);
   

        router.push(res?.data?.data?.checkoutUrl);
      } else {
        message.error(
          res?.error?.data?.message || "An unknown error occurred for purchase"
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      message.error(error);
    }
    try {
      //   post survey
      const response = await createSurvey(surveyData);
      console.log("sur res",response);
      if (response?.data) {
        message.success(response?.data?.message);
      } else {
        message.error(
          response?.data?.error || "An unknown error occurred for survey"
        );
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      message.error(error);
    }
  };


















  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

        {/* <div className="grid md:grid-cols-2 gap-6 items-center justify-center">   */}
        <div className="lg:flex gap-5 items-center justify-center">  
          {/* Left Column */}
          <div className="space-y-6 w-full sm:w-[50%] mx-auto">
    
            <div className="border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Sign in or create an account
              </h2>

            
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          className="mt-8 space-y-6"
        >
          <div className="space-y-4 rounded-md">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Enter Email"
                size="large"
                className="rounded-xl"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                size="large"
                className="rounded-xl"
              />
            </Form.Item>
          </div>

          <div className="flex items-center justify-end">
            <Link
              href="/forgot-password"
              className={`text-sm text-gray-500 hover:text-gray-700 ${styles.fontInter}`}
            >
              Forget Password?
            </Link>
          </div>

          <Button
            htmlType="submit"
            loading={loading}
            className="w-full h-12 bg- hover:bg-gray-800 rounded-xl"
          >
            Log In
          </Button>


      

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/signUp"
                className="text-[#FF4444] hover:text-[#FF6666]"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
            </div>
          </div>

          {/*Right Column */}
     <div className="w-full sm:w-[50%] mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Purchase your Plan
        </h1>

        <div className="flex gap-6">
         

          <div className="flex-1 border rounded-2xl p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Your Reader&apos;s Membership
            </h2>

            <div className="flex justify-center my-6">
              <div className="w-64 h-48 relative">
                <Image
                  src={packaging}
                  alt="Book subscription box"
                  width={280}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-2xl font-semibold text-red-400">
                  ${plan?.price?.amount}
                </span>
                <span className="text-gray-600 ml-1">per month</span>
              </div>
              {/* <div className="text-gray-500 text-right">
                (paid yearly at $179.88)
              </div> */}
            </div>

            <p className="text-gray-700 mb-6">
              Borrow or buy. Book prices shown in box. Prices beat Amazon. Check
              out return box to get a new one.
            </p>

            <div className="bg-red-50 rounded-xl p-4 flex items-center mb-6">
              <span className="text-gray-700">
                Get${plan?.price?.amount} credit to spend on books
              </span>
              <Tooltip title="Credit will be applied to your account after purchase">
                <InfoCircleOutlined className="text-gray-400 ml-auto" />
              </Tooltip>
            </div>

            <div className="flex items-center mb-8">
              <div className="flex-1">
                <p className="text-gray-700">
                  With every plan purchased, we donate a book to a child.
                </p>
              </div>
              <div className="ml-4">
                <Image src={handShack} alt="icon" />
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-medium">${plan?.price?.amount}</span>
              </div>
            </div>

            {/* <Button
              type="primary"
              htmlType="submit"
              className="flex mx-auto mt-6"
              onClick={() => handlePlanPurchase()}
            >
              Confirm Payment
            </Button> */}
          </div>
        </div>
      </div>
        </div>
      </div>

      {/* Button */}
      <div className=" bg-[#EDEBE6] shadow-lg p-5 w-full">
        <div className="container mx-auto flex justify-between">
          {/* Back Button */}
          <Link href="/subscriptionPurchase">
            <button className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition">
              <LeftOutlined />
              <span className="font-semibold">Skip</span>
            </button>
          </Link>

          {/* Next Button */}
          {/* <Link href={"/subscriptionPurchase"}> */}
            <button           onClick={() => handlePlanPurchase()} className="border border-black text-black px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 transition disabled:opacity-50">
              <span className="font-semibold">Continue</span>
              <RightOutlined />
            </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}
