import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aiImage from "../assets/ai.jpg"
import photographyImage from "../assets/photography.jpg"
import bookImage from "../assets/book.jpg"
import travelImage from "../assets/travel.jpg"
import lifeImage from "../assets/life.jpg"
import wildlifeImage from "../assets/wildlife.jpg"
import musicImage from "../assets/music.jpg"
import { Box, Text } from "@chakra-ui/react";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,autoplay:true,
  autoplaySpeed:2500,
  easing:"linear"
};

const categorys=[
     
 {
    url:"",
    img:photographyImage,
    title:"Photography" 
 },
 {
    url:"",
    img:wildlifeImage,
    title:"WildLife" 
 },  {
    url:"",
    img:aiImage,
    title:"Artificial Intelligence" 
 },   {
    url:"",
    img:lifeImage,
    title:"Human Life" 
 }, {
     url:"",
     img:bookImage,
     title:"Books" 
  }, 
 {
    url:"",
    img:musicImage,
    title:"Music" 
 }, {
    url:"",
    img:travelImage,
    title:"Travelling" 
 }



]




const Crousel = () => {
  return (
    <Slider  {...settings}>
      {categorys.map((ele) => (
       <Box key={ele.title}  > 
       <Box display="flex" justifyContent="center" alignItems="center" height="40vh" background={`url(${ele.img})`} backgroundSize="cover"  >
       
        <Text bgColor="white" width="95%" fontSize="2vw"   fontFamily="cursive" color="yellow.700"  >{ele.title}</Text>
         </Box>
       </Box>
      ))}
    </Slider>
  );
};

export default Crousel;
