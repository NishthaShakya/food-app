import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";

function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("Home");

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white text-gray-600 font-Outfit">
      <img src={assets.logo} alt="logo" className="h-8" />
      <ul className="flex items-center flex-grow justify-center space-x-3">
        <li
          onClick={() => setMenu("Home")}
          className={
            menu === "Home"
              ? "text-custom-orange cursor-pointer"
              : "cursor-pointer"
          }
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={
            menu === "Menu"
              ? "text-custom-orange cursor-pointer"
              : "cursor-pointer"
          }
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Contact-Us")}
          className={
            menu === "Contact-Us"
              ? "text-custom-orange cursor-pointer"
              : "cursor-pointer"
          }
        >
          Contact-Us
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={
            menu === "Mobile-App"
              ? "text-custom-orange cursor-pointer"
              : "cursor-pointer"
          }
        >
          Mobile-App
        </li>
      </ul>
      <div className="flex items-center justify-around bg-white rounded-md px-2">
        <img src={assets.search_icon} alt="search-icon" className="w-4 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none"
        />
        <img
          src={assets.basket_icon}
          alt="basket-icon"
          className="w-4 h-4 mr-2"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick = {()=> setShowLogin(true)}
          type="submit"
          className="bg-white text-gray-600 hover:bg-custom-orange hover:text-white font-bold py-2 px-4 rounded-2xl border-grey-600 hover:border-none"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
