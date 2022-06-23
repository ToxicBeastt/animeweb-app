import React from "react";

import AnimeList from "../components/AnimeList.js";

function reset(){
  window.localStorage.clear();
  localStorage.setItem('id', JSON.stringify(0));
}
function Home() {
  return (
    <div className="home">
      <h1>Anime List</h1>
      <AnimeList />
    </div>
  );
}

export default Home;
