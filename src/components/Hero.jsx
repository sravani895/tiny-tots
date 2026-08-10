import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../assets/slide1.png";
import hero2 from "../assets/slide2.png";
import hero3 from "../assets/slide3.png";

const heroSlides = [
  {
    id: 1,
    image: hero1,
    titleTop: "Where Little",
    titlePink: "Adventures",
    titleOrange: "Begin",
    description: "Premium Cotton Kidswear for Ages 2-10 Years",
  },
  {
    id: 2,
    image: hero2,
    titleTop: "Ready For",
    titlePink: "Big",
    titleOrange: "Adventures",
    description: "Comfortable fashion for active little explorers",
  },
  {
    id: 3,
    image: hero3,
    titleTop: "Beautiful Styles",
    titlePink: "For Little",
    titleOrange: "Princesses",
    description: "Cute dresses and colorful outfits for every occasion",
  },
];

const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="position-relative">

              {/* Banner Image */}
              <img
                src={slide.image}
                alt=""
                className="img-fluid w-100"
              />

              {/* Content */}
              <div className="position-absolute top-0 inset-s-0 w-100 h-100 d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-8">

                      <h1
                        className="fw-bold display-4 mb-2"
                        style={{ color: "#1E3A8A" }}
                      >
                        {slide.titleTop}
                      </h1>

                      <h1 className="fw-bold display-4 mb-3 heading-font">
                        <span style={{ color: "#ec4899" }}>
                          {slide.titlePink}
                        </span>{" "}
                        <span style={{ color: "#f97316" }}>
                          {slide.titleOrange}
                        </span>
                      </h1>

                      <p className="fs-5 text-secondary mb-4 text-font">
                        {slide.description}
                      </p>

                      <div className="d-flex flex-wrap gap-3">
                        <button className="btn btn-lg text-white px-4 py-2"
                          style={{ backgroundColor: "#ec4899" }}>
                          SHOP GIRLS
                        </button>

                        <button className="btn btn-primary btn-lg px-4 py-2">
                          SHOP BOYS
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;