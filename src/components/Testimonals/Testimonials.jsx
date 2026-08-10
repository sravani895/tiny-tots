import "./Testimonials.css";

import testimonials from "./testimonialsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

import leftLeaf from "../../assets/leaf-left.png";
import rightLeaf from "../../assets/leaf-right.png";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <img
        src={leftLeaf}
        alt=""
        className="testimonial-leaf left"
      />

      <img
        src={rightLeaf}
        alt=""
        className="testimonial-leaf right"
      />

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>

            <div className="testimonial-card">

              <div className="testimonial-header">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h4>{item.name}</h4>

              <span>{item.city}</span>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Testimonials;