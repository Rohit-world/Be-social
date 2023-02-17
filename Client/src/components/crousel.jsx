import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};


const Crousel = () => {
  return (
    <Slider  {...settings}>
      {/* {images.map((ele) => (
       <div > <div style={{backgroundColor:"blue"}}><img   key={ele.id} src={ele.imageUrl} alt="" /> </div></div>
      ))} */}
    </Slider>
  );
};

export default Crousel;
