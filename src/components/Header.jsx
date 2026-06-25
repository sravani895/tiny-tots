import { NavbarMenu } from "./Navbar";
import {
  FaSearch,
  FaRegUser,
  FaRegHeart,
  FaShoppingBag,
} from "react-icons/fa";

import monkeyLogo from "../assets/monkey-logo-1.png";

const Header = () => {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-pink-100 py-2 text-center text-sm text-gray-700">
        Free Shipping on Orders Above ₹999 | Easy Returns & Exchanges ❤️
      </div>

      {/* Main Header */}
     <header className="bg-white border-b border-gray-100">
  <div className="max-w-375 mx-auto px-8">
    <div className="grid grid-cols-[220px_1fr_180px] items-center h-20">

      {/* Logo */}
      <div className="flex items-center gap-2">
  <img
    src={monkeyLogo}
    alt="Tiny Tots"
    className="h-16.25 w-auto"
  />

  <h1
    className="text-4xl leading-none"
    style={{ fontFamily: "Pacifico" }}
  >
    <span className="text-pink-400">Tiny</span>
    <span className="text-blue-400"> Tots</span>
  </h1>
</div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center justify-center gap-10">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={`text-sm font-medium transition-colors duration-300 ${
                  item.title === "Home"
                    ? "text-pink-500"
                    : "text-gray-700 hover:text-pink-500"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex justify-end items-center gap-6 text-[24px] text-gray-700">

        <button className="hover:text-pink-500 transition">
          <FaSearch />
        </button>

        <button className="hover:text-pink-500 transition">
          <FaRegUser />
        </button>

        <button className="hover:text-pink-500 transition">
          <FaRegHeart />
        </button>

        <button className="relative hover:text-pink-500 transition">
          <FaShoppingBag />

          <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-orange-500 text-white text-[10px] rounded-full">
            0
          </span>
        </button>

      </div>

    </div>
  </div>
</header>
    </>
  );
};

export default Header;