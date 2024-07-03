import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    { url: "/images/banking_slide_image.jpeg", caption: "Banking",
    imageAlt:'Banking'
     },
    { url: "/images/automotive.jpeg", caption: "Automotive",
    imageAlt:'Automotive'
     },
    { url: "/images/education.jpeg", caption: "Education",
    imageAlt:'Education'
     },
    { url: "/images/logistic.jpeg", caption: "Logistic",
    imageAlt:'Logistic'
    },
    {
      url: "/images/E-commerce.jpeg",
      caption: "E-commerce",
      imageAlt:'E-Commerce'
    },
    {
      url: "/images/healthcare.jpeg",
      caption: "Healthcare",
      imageAlt:'Healthcare'
    },
    {
      url: "/images/tourism.jpeg",
      caption: "Tourism",
      imageAlt:'Tourism'
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
          <SwiperSlide key={index} >
            <div className="image-container">
              <img src={image.url} alt={`Slide ${index + 1}`}  loading="lazy"/>
              <div className="overlay">
                <p className="image-caption">{image.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div>
          <FaArrowLeftLong fontSize={10} className="swiper-button-prev" />
        </div>
        <div>
          <FaArrowRightLong fontSize={10} className="swiper-button-next" />
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
