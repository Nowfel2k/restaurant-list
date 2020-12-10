import React from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";

export default function Banner({ banners }) {
  if (banners) console.log(banners[0]);

  console.log("Number of banners :", banners?.length);

  const banner_list = [
    "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/styles/1200x706/public/content9555.jpg?itok=erUcHGsa",
    "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg",
    "https://cdn.vox-cdn.com/thumbor/73nhsZwI55BVgH8-rapmIhkvbUk=/0x0:4047x3035/1200x675/filters:focal(1700x1194:2346x1840)/cdn.vox-cdn.com/uploads/chorus_image/image/64046617/20150915-_Upland_Burger_3.0.0.1489236245.0.jpg",
    "https://cbsnews1.cbsistatic.com/hub/i/2015/07/01/0b059f60-344d-4ada-baae-e683aff3650a/istock000044051102large.jpg",
    "https://kopintableware.com/wp-content/uploads/2019/10/The-Importance-Of-Food-Presentation-For-Restaurant-Business-Kopin-Tableware-Indonesia.jpg",

    "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/styles/1200x706/public/content9555.jpg?itok=erUcHGsa",
    "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg",
    "https://cdn.vox-cdn.com/thumbor/73nhsZwI55BVgH8-rapmIhkvbUk=/0x0:4047x3035/1200x675/filters:focal(1700x1194:2346x1840)/cdn.vox-cdn.com/uploads/chorus_image/image/64046617/20150915-_Upland_Burger_3.0.0.1489236245.0.jpg",
    "https://cbsnews1.cbsistatic.com/hub/i/2015/07/01/0b059f60-344d-4ada-baae-e683aff3650a/istock000044051102large.jpg",
    "https://kopintableware.com/wp-content/uploads/2019/10/The-Importance-Of-Food-Presentation-For-Restaurant-Business-Kopin-Tableware-Indonesia.jpg",

    "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/styles/1200x706/public/content9555.jpg?itok=erUcHGsa",
    "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg",
    "https://cdn.vox-cdn.com/thumbor/73nhsZwI55BVgH8-rapmIhkvbUk=/0x0:4047x3035/1200x675/filters:focal(1700x1194:2346x1840)/cdn.vox-cdn.com/uploads/chorus_image/image/64046617/20150915-_Upland_Burger_3.0.0.1489236245.0.jpg",
    "https://cbsnews1.cbsistatic.com/hub/i/2015/07/01/0b059f60-344d-4ada-baae-e683aff3650a/istock000044051102large.jpg",
    "https://kopintableware.com/wp-content/uploads/2019/10/The-Importance-Of-Food-Presentation-For-Restaurant-Business-Kopin-Tableware-Indonesia.jpg",
  ];

  return (
    <div className="banner">
      {banner_list.map((banner, id) => (
        <img src={banner} alt={`Banner ${id + 1}`} />
      ))}
    </div>
  );
}

/*

bannerId: 41

bannerImage: "https://eatoo.uberdoo.com/foodapp/public/images/offersimage/image72075.jpg"

outletId: 11

outlets: Array[1]

*/
