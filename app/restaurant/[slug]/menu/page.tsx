import * as React from "react"
import NavBar from "../../../components/NavBar/NavBar"
import Header from "../components/Header"
import RestaurantNavBar from "../components/RestaurantNavBar"
import { Menu } from "../components/Menu"

export function RestaurantMenu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
    </>
  )
}

export default RestaurantMenu
