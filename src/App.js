import React, { useState, useEffect } from "react";
import "./style.css";
import Banner from "./Banner";
import Restaurants from "./Restaurants";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latitude: 13.0123481, longitude: 80.244455 }),
    };

    console.log(requestOptions);

    fetch(
      "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);

  return (
    <div className="app">
      <Banner banners={apiData && apiData.banners} />
      <Restaurants rests={apiData && apiData.listRestaurants} />
    </div>
  );
}
