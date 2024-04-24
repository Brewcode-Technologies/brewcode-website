import { useState } from "react";
import Slider from "react-slick";

// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

function SliderMain() {
  const images = [
    "images/slider-img-1.png",
    "images/slider-img-2.png",
    "images/slider-img-3.png",
    // "images/slider-img-4.png",
    "images/slider-img-5.png",
    "images/slider-img-6.png",
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="container-slider">
      <div className="slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={index}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="image-slide"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderMain;
