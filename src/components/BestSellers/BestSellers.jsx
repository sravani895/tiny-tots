import "./BestSellers.css";

import { products } from "./products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaHeart, FaLeaf } from "react-icons/fa";

const BestSellers = () => {
  return (
    <section className="bestSeller">

      <h2 className="title">
        <FaLeaf className="leaf" />
        Best Sellers
        <FaLeaf className="leaf right" />
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={4}
        spaceBetween={25}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">

              <div className="wishlist">
                <FaHeart />
              </div>

              <img
                src={item.image}
                alt={item.name}
              />

              <h4>{item.name}</h4>

              <span>₹{item.price}</span>

              <button>
                SHOP NOW
              </button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default BestSellers;