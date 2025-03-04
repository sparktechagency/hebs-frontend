import wild from "@/assets/wild.png";
import { Card, Col, Row } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import Image from "next/image";
import style from "@/app/styles.module.css";

const BookCheckoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <Row gutter={[24, 24]} justify="center">
        {/* Left Section */}
        <Col xs={24} md={12} className="flex flex-col">
          <h1 className={`text-2xl font-bold ${style.fontInter}`}>
            Book Checkout Summary
          </h1>
          <p className={`${style.fontInter} text-gray-600`}>Kept Books</p>

          {/* Book Card */}
          <Card className="w-full mt-3 shadow-md rounded-lg overflow-hidden border">
            <Row align="middle" gutter={16} className="w-full">
              {/* Book Image */}
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="relative w-16 h-16">
                  <Image
                    src={wild} 
                    alt="Book Cover"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </Col>

              {/* Book Details */}
              <Col xs={12} sm={16} md={17} className="px-2">
                <h3 className="text-lg font-semibold">Tiny Muslims</h3>
                <p className="text-gray-500 text-sm">By Islam</p>
              </Col>

              {/* Price */}
              <Col xs={6} sm={4} md={3} className="text-right">
                <p className="text-black font-bold">$14.59</p>
              </Col>
            </Row>
          </Card>
          <Card className="w-full mt-3 shadow-md rounded-lg overflow-hidden border">
            <Row align="middle" gutter={16} className="w-full">
              {/* Book Image */}
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="relative w-16 h-16">
                  <Image
                    src={wild} 
                    alt="Book Cover"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </Col>

              {/* Book Details */}
              <Col xs={12} sm={16} md={17} className="px-2">
                <h3 className="text-lg font-semibold">Tiny Muslims</h3>
                <p className="text-gray-500 text-sm">By Islam</p>
              </Col>

              {/* Price */}
              <Col xs={6} sm={4} md={3} className="text-right">
                <p className="text-black font-bold">$14.59</p>
              </Col>
            </Row>
          </Card>
          <Card className="w-full mt-3 shadow-md rounded-lg overflow-hidden border">
            <Row align="middle" gutter={16} className="w-full">
              {/* Book Image */}
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="relative w-16 h-16">
                  <Image
                    src={wild} 
                    alt="Book Cover"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </Col>

              {/* Book Details */}
              <Col xs={12} sm={16} md={17} className="px-2">
                <h3 className="text-lg font-semibold">Tiny Muslims</h3>
                <p className="text-gray-500 text-sm">By Islam</p>
              </Col>

              {/* Price */}
              <Col xs={6} sm={4} md={3} className="text-right">
                <p className="text-black font-bold">$14.59</p>
              </Col>
            </Row>
          </Card>
          <Card className="w-full mt-3 shadow-md rounded-lg overflow-hidden border">
            <Row align="middle" gutter={16} className="w-full">
              {/* Book Image */}
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="relative w-16 h-16">
                  <Image
                    src={wild} 
                    alt="Book Cover"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </Col>

              {/* Book Details */}
              <Col xs={12} sm={16} md={17} className="px-2">
                <h3 className="text-lg font-semibold">Tiny Muslims</h3>
                <p className="text-gray-500 text-sm">By Islam</p>
              </Col>

              {/* Price */}
              <Col xs={6} sm={4} md={3} className="text-right">
                <p className="text-black font-bold">$14.59</p>
              </Col>
            </Row>
          </Card>
          <Card className="w-full mt-3 shadow-md rounded-lg overflow-hidden border">
            <Row align="middle" gutter={16} className="w-full">
              {/* Book Image */}
              <Col xs={6} sm={4} md={3} lg={2}>
                <div className="relative w-16 h-16">
                  <Image
                    src={wild} 
                    alt="Book Cover"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </Col>

              {/* Book Details */}
              <Col xs={12} sm={16} md={17} className="px-2">
                <h3 className="text-lg font-semibold">Tiny Muslims</h3>
                <p className="text-gray-500 text-sm">By Islam</p>
              </Col>

              {/* Price */}
              <Col xs={6} sm={4} md={3} className="text-right">
                <p className="text-black font-bold">$14.59</p>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Right Section */}
        <Col xs={24} md={12}>
          {/* Payment Details */}
          <Card className="w-full rounded-2xl shadow-md border">
            <h3 className="text-lg font-semibold mb-3">Payment Details</h3>
            <div className="border-b mb-4"></div>

            <Row justify="space-between" className="mb-2">
              <Col>Book Subtotal</Col>
              <Col className="font-medium">$179.88</Col>
            </Row>

            <Row justify="space-between" className="mb-2">
              <Col>Illuminate Discount</Col>
              <Col className="font-medium">$3.59</Col>
            </Row>

            <Row justify="space-between" className="mb-4">
              <Col>Taxes</Col>
              <Col className="font-medium">$5.99</Col>
            </Row>

            {/* Order Total */}
            <Row justify="space-between" className="mb-4">
              <Col className="font-semibold text-lg">Order Total</Col>
              <Col className="font-semibold text-lg">$179.88</Col>
            </Row>

            {/* Payment Method */}
            <Row justify="space-between" align="middle">
              <Col className="font-semibold">Payment</Col>
              <Col className="flex items-center space-x-2">
                <CreditCardOutlined className="text-red-500 text-xl" />
                <span className="font-medium">Visa *7384</span>
              </Col>
            </Row>
          </Card>

          {/* Support Message */}
          <div className="mt-4 text-sm">
            <p className={`${style.fontInter} text-gray-600`}>
              If you&apos;ve changed your mind on which books you&apos;d like to keep and return, we can get you in touch with our support team.
            </p>
            <p className={`${style.fontInter} font-bold mt-2`}>Make a Change</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BookCheckoutPage;
