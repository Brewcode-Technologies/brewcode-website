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
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
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
        <ul style={{ margin: "0px" }}> {dots} </ul>
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
                style={{ borderRadius: "30px !important" }}
                src={img}
                alt={`Slide ${index + 1}`}
                className="image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderMain;
