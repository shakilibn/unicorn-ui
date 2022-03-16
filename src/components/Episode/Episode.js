import React from "react";
import "./episode.css";

const Episode = ({ episode }) => {
  const { id, title, originalAirDate, desc } = episode;
  return (
    <div className="episode">
      <h5>Title : {title}</h5>
      <h6>Date : {originalAirDate}</h6>
      <p><strong>Desc : </strong>{desc}</p>
    </div>
  );
};

export default Episode;