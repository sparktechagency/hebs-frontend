import wild from '@/assets/wild.png'
import color from '@/assets/colorMe.png'
import animal from '@/assets/animals.png'
import eid from '@/assets/eid.png'
import songBook from '@/assets/songBook2.png'
import Image from 'next/image'

const images = [
    {
      id: 1,
      img: wild, 
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
        <div className="max-w-7xl  bg-[#FFF2C9] container mx-auto grid md:grid-cols-5 lg:grid-cols-5 gap-4 p-5 justify-center md:mb-0 lg:mb-0 mb-6 mb:relative mb:top-20 lg:relative lg:top-20">
        {images.map((image) => (
          <div key={image.id} className="relative mb-4">
            <Image
              src={image.img}
              alt="book"
              width={300} 
              height={400} 
              layout="intrinsic" 
              objectFit="cover" // Ensures images fit their container
            />
          </div>
        ))}
      </div>
      
    );
};

export default FeatureBook;