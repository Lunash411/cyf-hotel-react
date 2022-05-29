import React from "react";

function SearchButton(props) {
  return (
    <button onClick={props.onClick} className="btn btn-primary">
      {props.buttonText}
    </button>
  );
}

export default SearchButton;
