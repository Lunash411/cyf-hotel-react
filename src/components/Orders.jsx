import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Orders = props => {
  const [Orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(Orders + 1);
  };
  return (
    <li>
      {props.orderType}: {Orders}
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Orders;
