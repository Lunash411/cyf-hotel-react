import React from "react";

const TouristInfoCards = () => {
  return (
    <div class="d-flex justify-content-between container">
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Renfrewshire_county.jpg" />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://img.bekiaviajes.com/articulos/portada/74000/74570-h.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
