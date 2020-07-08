import React from "react";

const MovieItem = ({ imgUrl, title }) => (
  <div class="">
    <div className="">
      <img src={imgUrl} class="" alt={title} />
    </div>
    <div class="">
      <h5 class="">{title}</h5>
    </div>
  </div>
);

export default MovieItem;
