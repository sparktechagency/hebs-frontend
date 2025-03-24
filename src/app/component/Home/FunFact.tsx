'use client'
import { Form, Input } from "antd";
import Image from "next/image";
import group1 from "@/assets/Group1.png"
import fun1 from "@/assets/fun1.png"
import fun2 from "@/assets/fun2.png"
import fun3 from "@/assets/fun3.png"
import style from '@/app/styles.module.css'
const FunFact = () => {
    const [form] = Form.useForm()

  
    const onFinish = (values: FormDataEntryValue) => {
     console.log(values)
  
    }
    return (
        <div className="bg-[#FFFFFF] ">
      <div className="bg-[#f08080] w-1/2 py-2 px-12   ">
      <p  className={`m-0 py-6 text-end text-4xl  text-[#FFFFFF] md:text-5xl ${style.fontRozha}`}>
        Fun Facts
      </p>
      </div>
             <section className="relative max-w-7xl mx-auto ">

      <div className="container  mx-auto p-4 md:p-12  py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-12">  
            {/* Fun Facts */}
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-6">
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
                  Kids that read at least 20 minutes each day will get exposure to around 2 million words each year.
                </p>
              </div>

              <div className="flex items-center gap-6">
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
                  Children who read for pleasure have higher academic achievement.
                </p>
              </div>

              <div className="flex items-center gap-6">
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
                  Children who read for pleasure are more likely to have better mental health and well-being.
                </p>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="bg-[#FEECDE] p-8 md:w-96">

            <p  className={`mb-4 text-2xl  ${style.fontJost}`}>
        JOIN OUR NEWSLETTER.
      </p>
      <p className="mb-2 block text-gray-600">
        Stay up to date on upcoming fun activities and educational material.
      </p>

      <Form form={form} name="newsletter" onFinish={onFinish} layout="vertical" requiredMark={false}>
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
            { required: true, message: "Please enter your email address" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input size="large" className="rounded border-gray-200" />
        </Form.Item>

        <Form.Item      label={
            <span className="flex items-center gap-1 font-bold">
              First Name
              <span className="text-[#f08080]">*</span>
            </span>
          } name="firstName">
          <Input size="large" className="rounded border-gray-200" />
        </Form.Item>

 

        <Form.Item>
          <button
          
            type="submit"
           
            className="h-10 rounded-sm bg-black px-8 text-white hover:bg-black/80"
          >
            Subscribe
          </button>
        </Form.Item>
      </Form>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0">
              <Image
                src={group1}
                alt="Children reading and drawing"
                width={600}
                height={800}
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