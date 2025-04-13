// import wild from '@/assets/wild.png'
import color from '@/assets/colorMe.png'
import animal from '@/assets/animals.png'
import eid from '@/assets/eid.png'
import songBook from '@/assets/songBook2.png'
import prophetSunnah from '@/assets/the_prophet_sunnah.png'
// import nameMean from '@/assets/my_name_mean.png'
import Image from 'next/image'

const images = [
    {
      id: 1,
      img: prophetSunnah, 
    },
    {
      id: 2,
      img: color, 
    },
    {
      id: 3,
      img: animal,
    },
    {
      id: 4,
      img: eid, 
    },
    {
      id: 5,
      img: songBook,
    }
  ];

const FeatureBook = () => {

    return (
<div>
<div className=" px-5  bg-[#FFF2C9] md:hidden container mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 p-5 justify-center md:mb-0 lg:mb-0 mb-6 relative top-20 lg:relative lg:top-20">
        {images.map((image) => (
          <div key={image.id} className="relative mb-4">
            <Image
              src={image.img}
              alt="book"
              width={500} 
              height={500} 
              layout="intrinsic" 
              objectFit="cover" // Ensures images fit their container
            />
          </div>
        )).slice(0,4)}
      </div>
<div className=" px-5 hidden     bg-[#FFF2C9] container mx-auto md:grid md:grid-cols-5 lg:grid-cols-5 gap-4 p-5 justify-center md:mb-0 lg:mb-0 mb-6 relative top-20 lg:relative lg:top-20">
        {images.map((image) => (
          <div key={image.id} className="relative mb-4">
            <Image
              src={image.img}
              alt="book"
              width={500} 
              height={500} 
              layout="intrinsic" 
              objectFit="cover" 
            />
          </div>
        ))}
      </div>
</div>
      
    );
};

export default FeatureBook;