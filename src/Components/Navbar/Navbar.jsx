import React from "react";
import logo from "../../assets/assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../Button/index";
// import DarkMode from "../

function Navbar() {
  return (
    <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      <div className="container py-3 sm:py-0   ">
        <div className="flex justify-between  items-center font-bold">
          <div>
            <a
              href="#"
              className="flex justify-center  items-center gap-2 text-2xl sm:text-3xl"
            >
              <img src={logo} alt="foodie zone" className="w-10 mx-2" /> Foodie
            </a>
          </div>
          <div className="flex  items-center text-center my-2  font-semibold gap-3">
            <ul className="hidden sm:flex ">
              <li>
                <a
                  href="/"
                  className="inline-block w-24 h-12 py-3 transition-all duration-300 ease-in-out 
             hover:bg-blue-500 hover:text-white hover:border hover:rounded-2xl"
                >
                  Home
                </a>
                </li>
                <li>
                <a
                  href="/contact"
                  className="inline-block w-24 h-12 py-3 transition-all duration-300 ease-in-out 
             hover:bg-blue-500 hover:text-white hover:border hover:rounded-2xl"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="inline-block w-24 h-12 py-3 transition-all duration-300 ease-in-out 
             hover:bg-blue-500 hover:text-white hover:border hover:rounded-2xl"
                >
                  About
                </a>
              </li>
            </ul>

            <button
              className="bg-yellow-400 text-white px-4 py-2 mx-3  font-semibold rounded-full  
            flex item-center gap-2
            "
            >
              Order
              <FaCartShopping className=" md:text-base  text-xl  text-white   cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
