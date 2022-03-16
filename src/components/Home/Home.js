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
    <div>
        <h2>Episode List</h2>
        <div className="home">
            {episodes.map((episode) => (
            <Episode key={episode.id} episode={episode} />
             ))}
        </div>
    </div>
  );
};

export default Home;