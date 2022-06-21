import React from "react";

import AnimeList from "../components/AnimeList.js";
function Home() {
  return (
    <div className="home">
      <h1>Anime List</h1>
      <AnimeList />
      <div>
        <button>Testing</button>
      </div>
    </div>
  );
}

export default Home;
