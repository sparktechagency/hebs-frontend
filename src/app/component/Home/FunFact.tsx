'use client'
import { Form, Input } from "antd";
import Image from "next/image";
import group1 from "@/assets/Group1.png"
import fun1 from "@/assets/fun1.png"
import fun2 from "@/assets/fun2.png"
import fun3 from "@/assets/fun3.png"
const FunFact = () => {
    const [form] = Form.useForm()

  
    const onFinish = (values: FormDataEntryValue) => {
     console.log(values)
  
    }
    return (
        <div className="bg-[#FFFFFF] ">
             <section className="relative w-full ">
      <div className="bg-[#f08080] w-4/2 py-2 px-12 md:w-1/3 lg:w-1/3 md:px-8 lg:px-8">
      <p  className="m-0 py-6 text-end text-3xl font-bold text-[#FFFFFF] md:text-4xl">
        Fun Facts
      </p>
      </div>

      <div className="container mx-auto p-12  py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Fun Facts */}
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={fun1}
                    alt="Books stack icon"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg text-black">
                  Kids that read at least 20 minutes each day will get exposure to around 2 million words each year.
                </p>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={fun2}
                    alt="Children reading icon"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg text-black">
                  Children who read for pleasure have higher academic achievement.
                </p>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={fun3}
                    alt="Brain icon"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <p className="text-lg text-black">
                  Children who read for pleasure are more likely to have better mental health and well-being.
                </p>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="bg-[#FEECDE] p-8">

            <p  className="mb-4 text-2xl font-bold">
        JOIN OUR NEWSLETTER.
      </p>
      <p className="mb-8 block text-gray-600">
        Stay up to date on upcoming fun activities and educational material.
      </p>

      <Form form={form} name="newsletter" onFinish={onFinish} layout="vertical" requiredMark={false}>
      <p className="mb-6 block text-end text-sm text-gray-500">
          <span className="text-[#f08080]">*</span> indicates required
        </p>
        <Form.Item
          label={
            <span className="flex items-center gap-1">
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

        <Form.Item label="First Name" name="firstName">
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
                height={600}
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