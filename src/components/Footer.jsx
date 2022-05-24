import React from "react";

function Footer(props) {
  return (
    <ul>
      {props.array.map(info => {
        return <l1>{info}</l1>;
      })}
    </ul>
  );
}
export default Footer;
