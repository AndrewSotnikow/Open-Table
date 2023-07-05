import Header from "./components/Header/Header"
import RestaurantCard from "./components/Card/Card"
import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client"

const prisma = new PrismaClient()

export interface RestaurantCardType {
  id: number
  name: string
  main_image: string
  cuisine: Cuisine
  slug: string
  location: Location
  price: PRICE
  reviews: Review[]
}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    },
  })

  return restaurants
}

export default async function Home() {
  const restaurants = await fetchRestaurants()

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </main>
  )
}
