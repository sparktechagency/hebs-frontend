/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button, Input, Form, message } from "antd";
import { MailOutlined, FacebookFilled } from "@ant-design/icons";
import Link from "next/link";
import styles from "@/app/styles.module.css";
import {
  useLazyLoginWithFacebookQuery,
  useLazyLoginWithGoogleQuery,
  useLoginMutation,
} from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/VerifyToken";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";
const Login = () => {
  const [triggerGoogleLogin, { data, error, isLoading }] =
    useLazyLoginWithGoogleQuery();

  const [triggerFacebookLogin] = useLazyLoginWithFacebookQuery();

  const [login] = useLoginMutation();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const setUserCookie = (userInfo: any) => {
    setCookie("user", JSON.stringify(userInfo), {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
  };
  const searchParams = useSearchParams();
  const onFinish = async (values: any) => {
    const redirect = searchParams.get("redirectPath");
    console.log("redirect path", redirect);
    try {
      console.log(values);
      // Handle login logic here
      const res = await login(values).unwrap();
      console.log("response:", res);
      setLoading(true);
      const user = verifyToken(res.data.accessToken) as TUser;
      const modifiedUser = { userId: res?.data?._id, user: user };
      // console.log(modifiedUser);
      // console.log("dispatchUser", user);
      dispatch(setUser({ user: modifiedUser, token: res.data.accessToken }));
      setUserCookie(res.data.accessToken);
      setLoading(false);

      message.success(res.message);

      if (redirect) {
        console.log("inside if block login page");
        router.push(redirect); // Redirect without adding a new entry to history
      }else{
        router.push("/")
      }
    } catch (error: any) {
      message.error(error?.data?.message || "Something went wrong");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  // google login
  const handleGoogleLogin = async () => {
    try {
      const res = await triggerGoogleLogin({}).unwrap();
      console.log("Google Login Success:", res);

      // Your logic: verify token, dispatch setUser, etc
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));

      message.success(res.message || "Google login successful!");
      router.push("/");
    } catch (error: any) {
      console.error("Google login error:", error);
      message.error(error?.data?.message || "Google login failed");
    }
  };
  // facebooklogin
  const handleFacebookLogin = async () => {
    try {
      const res = await triggerFacebookLogin({}).unwrap();
      console.log("Google facebook Success:", res);

      // Your logic: verify token, dispatch setUser, etc
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));

      message.success(res.message || "Facebook login successful!");
      router.push("/");
    } catch (error: any) {
      console.error("Facebook login error:", error);
      message.error(error?.data?.message || "Facebook login failed");
    }
  };
  return (
    <div
      className={`md:min-h-screen flex items-center justify-center mt-5 md:mt-0 px-4 md:py-12 bg-white ${styles.fontInter}`}
    >
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className={`text-3xl font-bold  text-gray-900 `}>Log in </h1>
        </div>

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

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>
          <div className="space-y-4">
            <Button
              icon={<FacebookFilled style={{ color: "#1877F2" }} />} // Facebook Blue Icon
              size="large"
              className="w-full h-12 rounded-xl flex items-center justify-center border-2 hover:border-gray-300"
              onClick={() => {
                handleFacebookLogin();
              }}
            >
              Continue with Facebook
            </Button>

            <Button
              icon={<FcGoogle />} // Google Red Icon (official Google logo primary color)
              size="large"
              className="w-full h-12 rounded-xl flex items-center justify-center border-2 hover:border-gray-300"
              onClick={() => {
                handleGoogleLogin();
              }}
            >
              Continue with Google
            </Button>
          </div>

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
  );
};

export default Login;
