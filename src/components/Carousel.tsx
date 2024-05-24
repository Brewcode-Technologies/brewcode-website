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
    { url: "/images/banking_slide_image.jpeg", caption: "Banking" },
    { url: "/images/automotive_slide_image.jpeg", caption: "Automotive" },
    { url: "/images/hiteck_slide_image.jpeg", caption: "Hiteck" },
    {
      url: "/images/communication_slide_image.jpeg",
      caption: "Communication",
    },
    {
      url: "/images/capital_slide_image.jpeg",
      caption: "Capital",
    },
  ];

  return (
    <div className="swiper-container">
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
    </div>
  );
};

export default SwiperComponent;
