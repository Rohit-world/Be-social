import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aiImage from "../assets/ai.jpg";
import photographyImage from "../assets/photography.jpg";
import bookImage from "../assets/book.jpg";
import travelImage from "../assets/travel.jpg";
import lifeImage from "../assets/life.jpg";
import wildlifeImage from "../assets/wildlife.jpg";
import musicImage from "../assets/music.jpg";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true
};

const categorys = [
  {
    url: "",
    img: photographyImage,
    title: "Photography",
    link: "photoghraphy",
  },
  {
    url: "",
    img: wildlifeImage,
    title: "WildLife",
    link: "wildlife",
  },
  {
    url: "",
    img: aiImage,
    title: "Artificial Intelligence",
    link: "Artificial Intelligence",
  },
  {
    url: "",
    img: lifeImage,
    title: "Human Life",
    link: "humanlife",
  },
  {
    url: "",
    img: bookImage,
    title: "Books",
    link: "books",
  },
  {
    url: "",
    img: musicImage,
    title: "Music",
    link: "music",
  },
  {
    url: "",
    img: travelImage,
    title: "Travelling",
    link: "travelling",
  },
];

const Crousel = () => {
const navigate = useNavigate();

function handleClick(ele) {
    navigate(`/post/cat/${ele.link}`);
 }

  return (
    <Slider {...settings}>
      {categorys.map((ele) => (
        <Box onClick={() => handleClick(ele)} key={ele.title}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="40vh"
            background={`url(${ele.img})`}
            backgroundSize="cover"
          >
            <Text
              bgColor="white"
              width="95%"
              fontSize="large"
              fontFamily="cursive"
              color="yellow.700"
            >
              {ele.title}
            </Text>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default Crousel;
