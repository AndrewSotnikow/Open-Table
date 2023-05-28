import Link from "next/link"
import NavBar from "../components/NavBar/NavBar"
import Header from "../restaurant/components/Header"
import RestaurantCard from "../restaurant/components/RestaurantCard"
import SearchSideBar from "../restaurant/components/SearSideBar"

const Search = (): JSX.Element => (
  <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      <NavBar />
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </main>
  </main>
)

export default Search
