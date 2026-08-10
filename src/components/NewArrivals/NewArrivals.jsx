import "./NewArrivals.css";

import arrivalsData from "./arrivalsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useCart } from "../context/useCart";


const NewArrivals = () => {

  const { addToCart } = useCart();


  /*
   * Swiper loop needs enough slides.
   *
   * Since your maximum desktop slidesPerView is 5,
   * we only enable loop when we have more than 5 products.
   *
   * If you have 5 or fewer products, Swiper will
   * work normally without loop mode.
   */

  const enableLoop = arrivalsData.length > 5;


  const handleAddToCart = (item) => {

    addToCart(item);

  };


  return (

    <section className="new-arrivals">


      {/* =====================================================
          SECTION TITLE
      ====================================================== */}

      <div className="new-arrivals__heading">

        <span className="heading-leaf heading-leaf-left">
          🍃
        </span>

        <h2>
          New Arrivals
        </h2>

        <span className="heading-leaf heading-leaf-right">
          🍂
        </span>

      </div>


      {/* =====================================================
          SLIDER WRAPPER
      ====================================================== */}

      <div className="new-arrivals__slider-wrapper">


        {/* =================================================
            PREVIOUS BUTTON
        ================================================== */}

        <button
          type="button"
          className="arrivals-prev"
          aria-label="Previous products"
        >

          <FaChevronLeft />

        </button>


        {/* =================================================
            NEXT BUTTON
        ================================================== */}

        <button
          type="button"
          className="arrivals-next"
          aria-label="Next products"
        >

          <FaChevronRight />

        </button>


        {/* =================================================
            SWIPER
        ================================================== */}

        <Swiper

          modules={[Navigation]}

          navigation={{
            prevEl: ".arrivals-prev",
            nextEl: ".arrivals-next",
          }}

          /*
           * IMPORTANT:
           * Don't use loop when there aren't enough products.
           */

          loop={enableLoop}

          spaceBetween={25}

          slidesPerView={1.2}

          slidesPerGroup={1}

          watchOverflow={true}

          observer={true}

          observeParents={true}

          breakpoints={{

            /* ---------------------------------------------
               Small Mobile
            --------------------------------------------- */

            320: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },


            /* ---------------------------------------------
               Mobile
            --------------------------------------------- */

            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },


            /* ---------------------------------------------
               Tablet
            --------------------------------------------- */

            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },


            /* ---------------------------------------------
               Small Desktop
            --------------------------------------------- */

            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },


            /* ---------------------------------------------
               Large Desktop
            --------------------------------------------- */

            1280: {
              slidesPerView: 5,
              spaceBetween: 25,
            },

          }}

          className="arrivals-swiper"
        >


          {/* =================================================
              PRODUCTS
          ================================================== */}

          {arrivalsData.map((item) => (

            <SwiperSlide
              key={item.id}
            >

              <div className="arrival-card">


                {/* =========================================
                    WISHLIST BUTTON
                ========================================== */}

                <button
                  type="button"
                  className="wishlist-btn"
                  aria-label={`Add ${item.name} to wishlist`}
                >

                  <FaHeart />

                </button>


                {/* =========================================
                    PRODUCT IMAGE
                ========================================== */}

                <div className="arrival-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


                {/* =========================================
                    PRODUCT DETAILS
                ========================================== */}

                <div className="arrival-details">


                  {/* Product name */}

                  <h3>
                    {item.name}
                  </h3>


                  {/* Price */}

                  <p className="arrival-price">
                    ₹{item.price}
                  </p>


                  {/* =====================================
                      SHOP NOW
                  ====================================== */}

                  <button
                    type="button"
                    className="shop-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    SHOP NOW
                  </button>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );

};


export default NewArrivals;