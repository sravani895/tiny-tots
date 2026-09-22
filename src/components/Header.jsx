import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import monkeyLogo from "../assets/monkey-logo-1.png";

import { NavbarMenu } from "./Navbar/navbarMenu";

import { useCart } from "./context/useCart";
import { useWishlist } from "./context/useWishlist";

import "./Header.css";


const Header = () => {

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
    <>
      {/* =====================================================
          TOP ANNOUNCEMENT BAR
      ====================================================== */}

      <div
        className="text-center py-2"
        style={{
          background: "#FCE7F3",
          color: "#4B5563",
          fontSize: "14px",
        }}
      >
        Free Shipping on Orders Above ₹999 | Easy Returns &
        Exchanges
      </div>


      {/* =====================================================
          MAIN HEADER
      ====================================================== */}

      <header className="bg-white border-bottom">

        <div className="container-fluid px-5">

          <div
            className="row align-items-center"
            style={{
              minHeight: "90px",
            }}
          >


            {/* =================================================
                LOGO
            ================================================== */}

            <div className="col-lg-3 col-md-3 col-6">

              <Link
                to="/home"
                className="text-decoration-none"
              >

                <div className="d-flex align-items-center">

                  <img
                    src={monkeyLogo}
                    alt="Tiny Tots"
                    style={{
                      height: "65px",
                    }}
                  />

                  <h1
                    className="mb-0 ms-2 logo-text"
                    style={{
                      fontFamily: "Pacifico",
                      lineHeight: 1,
                    }}
                  >

                    <span
                      style={{
                        color: "#ec4899",
                      }}
                    >
                      Tiny
                    </span>

                    <span
                      style={{
                        color: "#60a5fa",
                      }}
                    >
                      {" "}
                      Tots
                    </span>

                  </h1>

                </div>

              </Link>

            </div>


            {/* =================================================
                NAVIGATION
            ================================================== */}

            <div className="col-lg-6 col-md-6 d-none d-md-block">

              <ul className="nav justify-content-center">

                {NavbarMenu.map((item) => (

                  <li
                    className="nav-item mx-3"
                    key={item.id}
                  >

                    <Link
                      to={item.link}
                      className="nav-link fw-medium p-0"
                      style={{
                        color:
                          item.title === "Home"
                            ? "#ec4899"
                            : "#374151",

                        transition: "0.3s",
                      }}
                    >
                      {item.title}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>


            {/* =================================================
                HEADER ICONS
            ================================================== */}

            <div className="col-lg-3 col-md-3 col-6 ms-auto mt-lg-0">

              <div className="d-flex justify-content-end align-items-center gap-2 gap-md-4">


                {/* SEARCH */}

                <button
                  className="header-icon-btn"
                  aria-label="Search"
                  type="button"
                >
                  <FaSearch />
                </button>


                {/* USER */}

                <button
                  className="header-icon-btn"
                  aria-label="Account"
                  type="button"
                >
                  <FaUser />
                </button>


                {/* WISHLIST */}

                <Link
                  to="/wishlist"
                  className="header-cart-icon"
                  aria-label="Wishlist"
                >

                  <FaHeart />

                  {wishlistCount > 0 && (
                    <span className="header-cart-count">
                      {wishlistCount}
                    </span>
                  )}

                </Link>


                {/* CART */}

                <Link
                  to="/cart"
                  className="header-cart-icon"
                  aria-label="Shopping cart"
                >

                  <FaShoppingBag />


                  {/* Only show badge when cart has products */}

                  {cartCount > 0 && (

                    <span className="header-cart-count">
                      {cartCount}
                    </span>

                  )}

                </Link>

                {/* MOBILE MENU BUTTON */}
                <button
                  type="button"
                  className="header-icon-btn d-md-none"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

              </div>

            </div>

          </div>

        </div>

      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {mobileMenuOpen && (
        <div className="mobile-header-menu">
          <ul className="nav flex-column align-items-center py-4 bg-white shadow-sm position-absolute w-100" style={{ zIndex: 1000, left: 0 }}>
            {NavbarMenu.map((item) => (
              <li className="nav-item mb-3" key={item.id}>
                <Link
                  to={item.link}
                  className="nav-link fw-medium fs-4"
                  onClick={closeMobileMenu}
                  style={{
                    color: item.title === "Home" ? "#ec4899" : "#374151",
                    transition: "0.3s",
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </>
  );
};


export default Header;