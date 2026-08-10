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

const NewArrivals = () => {
  return (
    <section className="new-arrivals mt-5 mb-3">

      {/* Section Title */}

      <div className="new-arrivals__heading">

        <span className="heading-leaf">
          🍃
        </span>

        <h2>
          New Arrivals
        </h2>

        <span className="heading-leaf">
          🍂
        </span>

      </div>

      {/* Navigation Buttons */}

      <button className="arrivals-prev">

        <FaChevronLeft />

      </button>

      <button className="arrivals-next">

        <FaChevronRight />

      </button>

      {/* Slider */}

      <Swiper

        modules={[Navigation]}

        navigation={{
          prevEl: ".arrivals-prev",
          nextEl: ".arrivals-next",
        }}

        loop={true}

        spaceBetween={25}

        slidesPerView={5}

        breakpoints={{

          320: {

            slidesPerView: 1.2,

            spaceBetween: 15,
          },

          480: {

            slidesPerView: 2,

            spaceBetween: 20,
          },

          768: {

            slidesPerView: 3,

            spaceBetween: 20,
          },

          1024: {

            slidesPerView: 4,

            spaceBetween: 20,
          },

          1280: {

            slidesPerView: 5,

            spaceBetween: 25,
          },
        }}

        className="arrivals-swiper"
      >

        {arrivalsData.map((item) => (

          <SwiperSlide
            key={item.id}
          >

            <div className="arrival-card">

              {/* Wishlist */}

              <button className="wishlist-btn">

                <FaHeart />

              </button>

              {/* Image */}

              <div className="arrival-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>

              {/* Details */}

              <div className="arrival-details">

                <h3>

                  {item.name}

                </h3>

                <p className="arrival-price">

                  ₹{item.price}

                </p>

                <button className="shop-btn">

                  SHOP NOW

                </button>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
};

export default NewArrivals;