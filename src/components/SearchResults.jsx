import React, { useState } from "react";
import Row from "./Row";

const SearchResults = props => {};
return (
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check In Date</th>
        <th scope="col">Check Out Date</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map(booking => {
        return <Row booking={booking} />;
      })}
    </tbody>
  </table>
);

export default SearchResults;
