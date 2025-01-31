import React from "react";
import RestaurantButton from "./RestaurantButton";
import Orders from "./Orders";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="Pizzas" />
        <Orders orderType="Salad" />
        <Orders orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
