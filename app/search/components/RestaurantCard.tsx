import { Cuisine, PRICE, Location } from "@prisma/client"
import Link from "next/link"
import Price from "../../components/Price/Price"

interface Restaurant {
  id: number
  name: string
  main_image: string
  price: PRICE
  cuisine: Cuisine
  location: Location
  slug: string
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { name, main_image, price, cuisine, location, slug } = restaurant
  return (
    <div className="border-b flex pb-5">
      <img src={main_image} alt="" className="w-44 rounded h-36" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price} />
            <p className="mr-4 capitalized">{cuisine.name}</p>
            <p className="mr-4 capitalized">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={slug}>View more information</Link>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
