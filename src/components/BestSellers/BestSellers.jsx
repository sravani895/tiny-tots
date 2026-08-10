import "./BestSellers.css";

import { products } from "./products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  FaHeart,
  FaLeaf,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useCart } from "../context/useCart";


const BestSellers = () => {

  const { addToCart } = useCart();

  /*
   * Enable loop only when there are enough products.
   *
   * Desktop displays 4 products.
   * If there are 4 or fewer products, loop is disabled.
   */

  const enableLoop = products.length > 4;


  const handleAddToCart = (item) => {
    addToCart(item);
  };


  return (

    <section className="best-sellers">


      {/* =====================================================
          SECTION TITLE
      ====================================================== */}

      <h2 className="title">

        <FaLeaf className="leaf" />

        <span>
          Best Sellers
        </span>

        <FaLeaf className="leaf right" />

      </h2>


      {/* =====================================================
          SLIDER WRAPPER
      ====================================================== */}

      <div className="best-sellers-slider-wrapper">


        {/* =================================================
            PREVIOUS BUTTON
        ================================================== */}

        <button
          type="button"
          className="best-sellers-prev"
          aria-label="Previous products"
        >

          <FaChevronLeft />

        </button>


        {/* =================================================
            NEXT BUTTON
        ================================================== */}

        <button
          type="button"
          className="best-sellers-next"
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
            prevEl: ".best-sellers-prev",
            nextEl: ".best-sellers-next",
          }}

          /*
           * Only loop when there are enough products.
           */

          loop={enableLoop}

          slidesPerView={1}

          slidesPerGroup={1}

          spaceBetween={25}

          watchOverflow={true}

          observer={true}

          observeParents={true}

          breakpoints={{

            /* ---------------------------------------------
               Mobile
            --------------------------------------------- */

            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },


            /* ---------------------------------------------
               Large Mobile / Small Tablet
            --------------------------------------------- */

            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },


            /* ---------------------------------------------
               Tablet
            --------------------------------------------- */

            900: {
              slidesPerView: 3,
              spaceBetween: 22,
            },


            /* ---------------------------------------------
               Desktop
            --------------------------------------------- */

            1200: {
              slidesPerView: 4,
              spaceBetween: 25,
            },

          }}

          className="best-sellers-swiper"
        >


          {/* =================================================
              PRODUCTS
          ================================================== */}

          {products.map((item) => (

            <SwiperSlide
              key={item.id}
            >

              <div className="card">


                {/* =========================================
                    WISHLIST
                ========================================== */}

               <button
  type="button"
  className="best-sellers__wishlist"
  aria-label={`Add ${item.name} to wishlist`}
>
  <FaHeart />
</button>


                {/* =========================================
                    PRODUCT IMAGE
                ========================================== */}

                <div className="best-seller-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


                {/* =========================================
                    PRODUCT NAME
                ========================================== */}

                <h4>
                  {item.name}
                </h4>


                {/* =========================================
                    PRODUCT PRICE
                ========================================== */}

                <span className="product-price">
                  ₹{item.price}
                </span>


                {/* =========================================
                    SHOP NOW
                ========================================== */}

                <button
                  type="button"
                  className="shop-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  SHOP NOW
                </button>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );

};


export default BestSellers;