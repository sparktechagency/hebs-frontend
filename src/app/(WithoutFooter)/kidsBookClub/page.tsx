import { RightOutlined } from "@ant-design/icons"

interface AgeCategory {
  name: string
  range: string
}

const ageCategories: AgeCategory[] = [
  { name: "TINY MU’MINS", range: "(0-3 years)" },
  { name: "LITTLE CALIPHS", range: "(4-6 years)" },
  { name: "DEEN DISCOVERERS", range: "(7-8 years)" },
  { name: "ISLAMIC EXPLORERS", range: "(9-11 years)" },

]

const KidsBookPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container max-w-6xl mx-auto px-4 py-16 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between gap-12 text-start w-full">
          {/* Left Side - Age Categories */}
          <div className="w-full md:w-1/2 md:text-start lg:text-start text-center  lg:w-1/2 border-r border-gray-200">
            <h2 className="text-[#FF7F7F] text-xl font-medium mb-6">Age</h2>
            <nav className="space-y-5 ">
              {ageCategories.map((category, index) => (
                <a key={index} href="#" className="flex items-center  group hover:opacity-80 transition-opacity">
                  <RightOutlined className="text-[#FF7F7F] text-xs mr-2.5 transition-transform group-hover:translate-x-1" />
                  <span className="text-base font-medium uppercase">
                    {category.name} <span className="text-gray-500 font-normal">{category.range}</span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side - Kids Book Clubs & Gifts */}
          <div className="md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center text-center space-y-12">
            {/* Kids Book Clubs Section */}
            <div className="w-full space-y-5 text-center">
              <h2 className="text-[#FF7F7F] text-xl font-medium">Kids Book Clubs</h2>
              <div className="space-y-3 flex flex-col items-center justify-center text-center">
                <button className="h-10 w-48 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all">
                  GET STARTED
                </button>
                <button className="h-10 w-48 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all">
                  LOGIN
                </button>
              </div>
            </div>

            {/* Gifts Section */}
            <div className="w-full space-y-5">
              <h2 className="text-[#FF7F7F] text-xl font-medium">Gifts</h2>
              <button className="h-10 w-48 rounded-full bg-white border border-black hover:bg-[#FF7F7F] hover:text-white hover:border-[#FF7F7F] transition-all">
                Give a Gift
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KidsBookPage

