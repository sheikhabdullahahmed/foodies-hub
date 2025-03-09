import React, { useState } from "react";
import logo from "../../assets/assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md md:py-5 py-3 bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container mx-auto py-3 sm:py-0 px-4">
        <div className="flex justify-between items-center font-bold">
          <div>
            <a
              href="#"
              className="flex items-center gap-2 text-2xl font-semibold sm:text-3xl"
            >
              <img src={logo} alt="foodie zone" className="w-10 mx-2" /> Foodie
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden text-xl font-semibold gap-9 sm:flex space-x-6">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
          </ul>

          
          {/* Order Button */}
          <button className="sm:flex hidden bg-yellow-400 text-white px-5 py-3 cursor-pointer font-semibold rounded flex items-center gap-2">
            Order
            <FaCartShopping className="text-xl text-white cursor-pointer" />
          </button>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            className="sm:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              {/* Order Button in Mobile Menu */}
              <a href="#contact">
                <button className="bg-yellow-400 text-white px-5 py-3 cursor-pointer font-semibold rounded-full flex items-center gap-2">
                  Order Now
                  <FaCartShopping className="text-xl text-white cursor-pointer" />
                </button>
              </a>
             
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
