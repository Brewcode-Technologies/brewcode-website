import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const SwiperComponent = () => {
  const images = [
    { url: "/images/img5.jpg", caption: "Caption for Image 5" },
    { url: "/images/img6.jpg", caption: "Caption for Image 6" },
    { url: "/images/img7.jpg", caption: "Caption for Image 7" },
    { url: "/images/img5.jpg", caption: "Another Caption for Image 5" },
    { url: "/images/img6.jpg", caption: "Another Caption for Image 6" },
    { url: "/images/img7.jpg", caption: "Another Caption for Image 7" },
    { url: "/images/img8.jpg", caption: "Caption for Image 8" },
    { url: "/images/img8.jpg", caption: "Another Caption for Image 8" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="image-container">
            <img src={image.url} alt={`Slide ${index + 1}`} />
            <div className="overlay">
              <p className="image-caption">{image.caption}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div>
        <FaArrowLeftLong className="swiper-button-prev" />
      </div>
      <div>
        <FaArrowRightLong fontSize={10} className="swiper-button-next" />
      </div>
    </Swiper>
  );
};

export default SwiperComponent;
