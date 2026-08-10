import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaHeart,
} from "react-icons/fa";

import { useCart } from "../context/useCart";

import { NavbarMenu } from "./navbarMenu";

import "./Navbar.css";


const Navbar = () => {
  const { cartCount } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <header className="navbar">

      {/* =====================================================
          NAVBAR CONTAINER
      ====================================================== */}

      <div className="navbar-container">


        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          to="/home"
          className="navbar-logo"
          onClick={closeMobileMenu}
        >

          <span className="logo-main">
            Tiny Tots
          </span>

          <span className="logo-subtitle">
            Little clothes, big dreams
          </span>

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav className="navbar-menu">

          {NavbarMenu.map((item) => (

            <Link
              key={item.id}
              to={item.link}
              className="navbar-link"
            >
              {item.title}
            </Link>

          ))}

        </nav>


        {/* =================================================
            NAVBAR ACTIONS
        ================================================== */}

        <div className="navbar-actions">


          {/* SEARCH */}

          <button
            type="button"
            className="navbar-action-btn"
            aria-label="Search"
          >
            <FaSearch />
          </button>


          {/* USER */}

          <button
            type="button"
            className="navbar-action-btn"
            aria-label="Account"
          >
            <FaUser />
          </button>


          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="navbar-action-btn"
            aria-label="Wishlist"
          >
            <FaHeart />
          </Link>


          {/* CART */}

          <Link
            to="/cart"
            className="cart-icon"
            aria-label="Shopping cart"
          >

            <FaShoppingCart />


            {/* Cart count */}

            {cartCount > 0 && (

              <span className="cart-count">
                {cartCount}
              </span>

            )}

          </Link>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() =>
              setMobileMenuOpen((prev) => !prev)
            }
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
          >

            {mobileMenuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}

          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileMenuOpen && (

        <div className="mobile-menu">


          {/* Mobile navigation */}

          {NavbarMenu.map((item) => (

            <Link
              key={item.id}
              to={item.link}
              className="mobile-menu-link"
              onClick={closeMobileMenu}
            >
              {item.title}
            </Link>

          ))}


          {/* Mobile wishlist */}

          <Link
            to="/wishlist"
            className="mobile-cart-link"
            onClick={closeMobileMenu}
          >

            <FaHeart />

            <span>
              Wishlist
            </span>

          </Link>


          {/* Mobile cart */}

          <Link
            to="/cart"
            className="mobile-cart-link"
            onClick={closeMobileMenu}
          >

            <FaShoppingCart />

            <span>
              Cart
            </span>


            {cartCount > 0 && (

              <span className="mobile-cart-count">
                {cartCount}
              </span>

            )}

          </Link>

        </div>

      )}

    </header>
  );
};


export default Navbar;