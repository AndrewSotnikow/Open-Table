import { Location, Cuisine, PRICE } from "@prisma/client"
import Link from "next/link"

interface ISearchSideBar {
  locations: Location[]
  cuisines: Cuisine[]
  searchParameters: {
    city?: string
    cuisine?: string
    price?: PRICE
  }
}

const SearchSideBar = ({
  locations,
  cuisines,
  searchParameters,
}: ISearchSideBar) => {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border w-full text-reg text-center font-light rounded-l p-2",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "border w-full text-reg text-center font-light  p-2",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className: "border w-full text-reg text-center font-light rounded-r p-2",
    },
  ]

  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-column">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParameters,
                city: location.name,
              },
            }}
            key={location.id}
            className="font-light text-reg capitalize"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-column">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParameters,
                city: cuisine.name,
              },
            }}
            key={cuisine.id}
            className="font-light text-reg capitalize"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParameters,
                  price: price.price,
                },
              }}
              className={price.className}
            >
              {price.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchSideBar
