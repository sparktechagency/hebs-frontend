"use client";
import { Form, Input, message } from "antd";
import Image from "next/image";
import group1 from "@/assets/Group1.png";
import fun1 from "@/assets/fun1.png";
import fun2 from "@/assets/fun2.png";
import fun3 from "@/assets/fun3.png";
import style from "@/app/styles.module.css";
import { useCreteNewsletterMutation } from "@/redux/features/others/othersApi";
const FunFact = () => {
  const [form] = Form.useForm();
  const [createSubscription]=useCreteNewsletterMutation()
  const onFinish = async(data: FormDataEntryValue) => {
    // console.log(data);
      try {
      const res = await createSubscription(data).unwrap()
      // console.log("res",res);
      message.success(res?.message)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      // console.log(error);
      message.error(error?.message)
    }
  };
  return (
    <div className="bg-[#FFFFFF] mt-6">
      <div className="bg-[#f08080] w-[80%] md:w-[50%] p-1    ">
        <p
          className={`m-0 py-6 text-end text-4xl tracking-wider  text-white md:text-5xl ${style.fontRozha}`}
        >
          Fun Facts
        </p>
      </div>
      <section className=" container mx-auto ">
        <div className="container  mx-auto p-4 ">
          <div className="relative">
            {/* Left Column */}
            <div className="my-8">
              {/* Fun Facts */}
              <div className=" flex flex-col items-start w-full md:w-1/2">   
                <div className="flex items-center justify-center gap-6 space-y-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={fun1}
                      alt="Books stack icon"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <p className={`text-xl text-black ${style.fontPoppins}`}>
                    Kids that read at least 20 minutes each day will get
                    exposure to around 2 million words each year.
                  </p>
                </div>

                <div className="flex items-center gap-6 space-y-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={fun2}
                      alt="Children reading icon"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <p className={`text-xl text-black ${style.fontPoppins}`}>
                    Children who read for pleasure have higher academic
                    achievement.
                  </p>
                </div>

                <div className="flex items-center gap-6 space-y-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={fun3}
                      alt="Brain icon"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <p className={`text-xl text-black ${style.fontPoppins}`}>
                    Children who read for pleasure are more likely to have
                    better mental health and well-being.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className=" flex flex-col-reverse md:flex-row items-start  justify-between ">
              {/* Newsletter Form */}
              <div className="bg-[#FEECDE] p-8 md:w-96 ">
                <p className={`mb-4 text-2xl  ${style.fontJost}`}>
                  JOIN OUR NEWSLETTER.
                </p>
                <p className="mb-2 block text-gray-600">
                  Stay up to date on upcoming fun activities and educational
                  material.
                </p>

                <Form
                  form={form}
                  name="newsletter"
                  onFinish={onFinish}
                  layout="vertical"
                  requiredMark={false}
                >
                  <p className="mb-6 block text-end text-sm text-gray-500">
                    <span className="text-[#f08080]">*</span> indicates required
                  </p>
                  <Form.Item
                    label={
                      <span className="flex items-center gap-1 font-bold">
                        Email Address
                        <span className="text-[#f08080]">*</span>
                      </span>
                    }
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email address",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email address",
                      },
                    ]}
                  >
                    <Input size="large" className="rounded border-gray-200" />
                  </Form.Item>

                  <Form.Item
                    label={
                      <span className="flex items-center gap-1 font-bold">
                        First Name
                        <span className="text-[#f08080]">*</span>
                      </span>
                    }
                    name="name"
                  >
                    <Input size="large" className="rounded border-gray-200" />
                  </Form.Item>

                  <Form.Item>
                    <button
                      type="submit"
                      className="p-3 rounded-sm bg-black px-8 text-white hover:bg-black/80"
                    >
                      Subscribe
                    </button>
                  </Form.Item>
                </Form>
              </div>

              <div className=" md:absolute md:-bottom-0 md:-right-5 md:w-[350px] lg:w-[500px]   xl:right-16 mb-3 md:mb-0">
                <Image
                  src={group1}
                  alt="Children reading and drawing"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunFact;
