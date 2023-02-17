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

const images = [
  {
    id: 109,
    name: "Covid Essentials",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png",
    discountText: "Upto 77% off",
    slug: "covid-essentials-109",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=109&category_name=Covid Essentials",
  },
  {
    id: 877,
    name: "Personal Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png",
    discountText: "Upto 80% off",
    slug: "personal-care-877",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=877&category_name=Personal Care",
  },
  {
    id: 648,
    name: "Health Food and Drinks",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png",
    discountText: "Upto 57% off",
    slug: "health-food-and-drinks-648",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=648&category_name=Health Food and Drinks",
  },
  {
    id: 8881,
    name: "Beauty",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/403b8ada7b113c7cb2e8d09e3420edfa.png?f=png",
    discountText: "Upto 35% off",
    slug: "beauty-8881",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=8881&category_name=Beauty",
  },
  {
    id: 93,
    name: "Skin Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png",
    discountText: "Upto 50% off",
    slug: "skin-care-93",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=93&category_name=Skin Care",
  },
  {
    id: 734,
    name: "Home Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png",
    discountText: "Upto 35% off",
    slug: "home-care-734",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=734&category_name=Home Care",
  },
  {
    id: 765,
    name: "Ayurvedic Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png",
    discountText: "Upto 70% off",
    slug: "ayurvedic-care-765",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=765&category_name=Ayurvedic Care",
  },
  {
    id: 575,
    name: "Sexual Wellness",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d1b29f7a2b5f3d62a3d47b617aceef1b.png?f=png",
    discountText: "Upto 53% off",
    slug: "sexual-wellness-575",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=575&category_name=Sexual Wellness",
  },
  {
    id: 623,
    name: "Fitness Supplements",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png",
    discountText: "Upto 80% off",
    slug: "fitness-supplements-623",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=623&category_name=Fitness Supplements",
  },
  {
    id: 838,
    name: "Mother and Baby Care",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png?f=png",
    discountText: "Upto 50% off",
    slug: "mother-and-baby-care-838",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=838&category_name=Mother and Baby Care",
  },
  {
    id: 717,
    name: "Healthcare Devices",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png",
    discountText: "Upto 65% off",
    slug: "healthcare-devices-717",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=717&category_name=Healthcare Devices",
  },
  {
    id: 693,
    name: "Health Condition",
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a31db906db93f7cba59f1c48d3ba239.png?f=png",
    discountText: "Upto 65% off",
    slug: "health-condition-693",
    deeplink:
      "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=693&category_name=Health Condition",
  },
];

const Dashboard = () => {
  return (
    <Slider  {...settings}>
      {images.map((ele) => (
       <div > <div style={{backgroundColor:"blue"}}><img   key={ele.id} src={ele.imageUrl} alt="" /> </div></div>
      ))}
    </Slider>
  );
};

export default Dashboard;
