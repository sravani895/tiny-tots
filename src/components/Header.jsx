import { NavbarMenu } from "./Navbar";

import monkeyLogo from "../assets/monkey-logo-1.png";

const Header = () => {
  return (
    <>
      {/* Top Announcement Bar */}
      <div
        className="text-center py-2"
        style={{
          background: "#FCE7F3",
          color: "#4B5563",
          fontSize: "14px",
        }}
      >
        Free Shipping on Orders Above ₹999 | Easy Returns & Exchanges <i className="fas fa-heart fs-6 color-pink"></i>
      </div>

      {/* Main Header */}
      <header className="bg-white border-bottom">
        <div className="container-fluid px-5">
          <div
            className="row align-items-center"
            style={{ minHeight: "90px" }}
          >
            {/* Logo */}
            <div className="col-lg-3 col-md-3">
              <div className="d-flex align-items-center">
                <img
                  src={monkeyLogo}
                  alt="Tiny Tots"
                  style={{ height: "65px" }}
                />

                <h1
                  className="mb-0 ms-2"
                  style={{
                    fontFamily: "Pacifico",
                    fontSize: "40px",
                    lineHeight: 1,
                  }}
                >
                  <span style={{ color: "#ec4899" }}>Tiny</span>
                  <span style={{ color: "#60a5fa" }}> Tots</span>
                </h1>
              </div>
            </div>

            {/* Navigation */}
            <div className="col-lg-6 col-md-6">
              <ul className="nav justify-content-center">
                {NavbarMenu.map((item) => (
                  <li className="nav-item mx-3" key={item.id}>
                    <a
                      href={item.link}
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
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons */}
            <div className="col-lg-3 col-md-3">
              <div className="d-flex justify-content-end align-items-center gap-4">
                <div className="d-flex justify-content-end align-items-center gap-4">
                  <button className="btn border-0 p-0 fs-5">
                    <i className="fas fa-search"></i>
                  </button>

                  <button className="btn border-0 p-0 fs-5">
                    <i className="far fa-user"></i>
                  </button>

                  <button className="btn border-0 p-0 fs-5">
                    <i className="far fa-heart"></i>
                  </button>

                  <button className="btn border-0 p-0 position-relative fs-5">
                    <i className="fas fa-shopping-bag"></i>

                    <span
                      className="position-absolute top-0 inset-s-100 translate-middle badge rounded-pill"
                      style={{
                        background: "#f97316",
                        fontSize: "10px",
                      }}
                    >
                      0
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;