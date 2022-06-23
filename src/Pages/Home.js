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
      <div>
        <button onClick={reset}>Testing</button>
      </div>
    </div>
  );
}

export default Home;
