import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white  font-sora">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* LOGO */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              className="h-8 sm:h-10 md:h-12 lg:h-14 mr-2 transition-all duration-300"
              alt="OneSimCard Logo"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6 text-[#08080C] font-medium">
              <li>
                <a href="#" className="hover:text-[#455E86] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#455E86] transition">
                  IoT Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#455E86] transition">
                  Consumer IoT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#455E86] transition">
                  Technology
                </a>
              </li>

              {/* MENU ICON AFTER TECHNOLOGY */}
              <li>
                <button className="p-2 border-2 border-[#455E86] rounded-full hover:bg-[#455E86] hover:text-white transition">
                  <Menu color="#F4C600" size={22} />
                </button>
              </li>
            </ul>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-black text-sm px-4 border-r-2 border-[#A8ADB4]"
            >
              Login
            </a>
            <a
              href="#"
              className="text-black bg-[#F4C600] rounded-full text-sm px-8 py-3 font-medium hover:bg-[#e2b900] transition"
            >
              Get Started
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white border-t border-gray-200 shadow-lg rounded-lg">
            <ul className="flex flex-col space-y-3 px-4 py-3 text-[#08080C]">
              <li>
                <a href="#" className="block py-2 hover:text-[#455E86]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-[#455E86]">
                  IoT Solutions
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-[#455E86]">
                  Consumer IoT
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-[#455E86]">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 border-t border-gray-100">
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-center bg-[#F4C600] rounded-full py-3 font-medium hover:bg-[#e2b900] transition"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
