import "./NewArrivals.css";

import arrivalsData from "./arrivalsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useCart } from "../context/useCart";
import { useWishlist } from "../context/useWishlist";


const NewArrivals = () => {

  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();


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

          modules={[Navigation, Autoplay]}

          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}

          navigation={{
            prevEl: ".arrivals-prev",
            nextEl: ".arrivals-next",
          }}

          /*
           * Always loop for continuous rotation effect
           */

          loop={true}

          spaceBetween={25}

          slidesPerView={1}

          slidesPerGroup={1}

          watchOverflow={true}

          observer={true}

          observeParents={true}

          breakpoints={{

            /* ---------------------------------------------
               Small Mobile
            --------------------------------------------- */

            320: {
              slidesPerView: 1,
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
                  className={`wishlist-btn ${wishlistItems.find(i => i.id === item.id) ? 'active' : ''}`}
                  aria-label={`Add ${item.name} to wishlist`}
                  onClick={() => toggleWishlist(item)}
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
                      SHOP NOW / CART CONTROLS
                  ====================================== */}

                  {(() => {
                    const cartItem = cartItems.find((i) => i.id === item.id);
                    return cartItem ? (
                      <div className="cart-btn-group">
                        <button type="button" onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span>{cartItem.quantity}</span>
                        <button type="button" onClick={() => increaseQuantity(item.id)}>+</button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="shop-btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        SHOP NOW
                      </button>
                    );
                  })()}

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