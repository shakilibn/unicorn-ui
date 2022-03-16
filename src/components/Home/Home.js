import React, { useEffect, useState } from "react";
import Episode from "../Episode/Episode";
import "./home.css";

const Home = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/futurama/episodes")
      .then((res) => res.json())
      .then((data) => setEpisodes(data));
  }, []);
  console.log(episodes);

  return (
    <div className="row">
      <div className="col-2 side-bar">
        <p className="text-white text-center my-4">This is side bar</p>
      </div>
      <div className="col-10">
        <h2>Episode List</h2>
        <div className="home">
          {episodes.map((episode) => (
            <Episode key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;