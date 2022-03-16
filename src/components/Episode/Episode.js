import React from "react";
import "./episode.css";

const Episode = ({ episode }) => {
  const { id, title, originalAirDate, desc } = episode;
  return (
    <div className="episode">
      <h4>Title : {title}</h4>
      <h5>Date : {originalAirDate}</h5>
      <p><strong>Desc : </strong>{desc}</p>
    </div>
  );
};

export default Episode;