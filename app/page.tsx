import Header from "./components/Header/Header"
import RestaurantCard from "./components/Card/Card"

export default function Home() {
  return (
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </main>
  )
}
