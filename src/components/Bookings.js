import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then(res => {
        if (res.status != 200) {
          alert("Sorry there was an error with the data");
        }
        return res.json();
      })
      .then(data => {
        setBooking(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const search = searchVal => {
    const bookingsFiltered = booking.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBooking(bookingsFiltered);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={booking} />}
      </div>
    </div>
  );
};

export default Bookings;
