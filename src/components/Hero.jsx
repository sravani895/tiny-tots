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
    <section className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full">

              {/* Banner Image */}
              <img
                src={slide.image}
                alt=""
                className="w-full h-auto block"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10">
                <div className="max-w-7xl mx-auto h-full px-8 lg:px-16">

                  <div className="pt-12 lg:pt-20 max-w-125">

                    <h1 className="text-4xl lg:text-7xl font-bold text-[#1E3A8A] leading-tight">
                      {slide.titleTop}
                    </h1>

                    <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                      <span className="text-pink-400">
                        {slide.titlePink}
                      </span>{" "}
                      <span className="text-orange-500">
                        {slide.titleOrange}
                      </span>
                    </h1>

                    <p className="mt-4 lg:mt-6 text-lg lg:text-xl text-gray-700">
                      {slide.description}
                    </p>

                    <div className="flex gap-4 mt-6 lg:mt-8">
                      <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-xl font-semibold">
                        SHOP GIRLS
                      </button>

                      <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold">
                        SHOP BOYS
                      </button>
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