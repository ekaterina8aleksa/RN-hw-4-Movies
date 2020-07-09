import React from "react";

const MovieItem = ({ poster_path, original_title }) => (
  <div className="movieItem">
    <div className="movieItemImage">
      <img src={poster_path} className="" alt={original_title} />
    </div>
    <div className="movieItemTitel">
      <h3>{original_title}</h3>
    </div>
  </div>
);

export default MovieItem;
