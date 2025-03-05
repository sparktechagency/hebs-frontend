import Image from "next/image"
import Link from "next/link"
import wild from '@/assets/wild.png'
import color from '@/assets/colorMe.png'
import animal from '@/assets/animals.png'
import eid from '@/assets/eid.png'
import songBook from '@/assets/songBook.png'
const relatedBooks = [
  {
    id: 1,
    title: "Wild Feelings",
    image:wild,
    price: 12.99,
  },
  {
    id: 2,
    title: "Color Me: What's in the Ocean",
    image: color,
    price: 9.95,
  },
  {
    id: 3,
    title: "Animals in the Quran",
    image: animal,
    price: 14.95,
  },
  {
    id: 4,
    title: "Looking for the Eid Moon",
    image: eid,
    price: 11.99,
  },
  {
    id: 5,
    title: "Allah Made Everything",
    image: songBook,
    price: 13.95,
  },
]

export default function RelatedBooks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {relatedBooks.map((book) => (
        <div key={book.id} className="flex flex-col">
          <div className="bg-amber-50 rounded-md p-4 mb-2 flex items-center justify-center">
            <Image
              src={book.image || "/placeholder.svg"}
              alt={book.title}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <Link
            href="#"
            className="bg-red-100 text-red-800 text-center py-2 rounded-full hover:bg-red-200 transition-colors mb-2 uppercase"
          >
            Add to Bag
          </Link>
          <h3 className="text-sm font-medium text-gray-800">{book.title}</h3>
        </div>
      ))}
    </div>
  )
}

