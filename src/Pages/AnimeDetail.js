import { useQuery } from "@apollo/client";
import { BsFillBookmarkFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { LOAD_ANIME_DETAIL } from "../GraphQL/Queries";
import Popup_add_to_collection from "../components/Popup_add_to_collection";
import '../assets/css/AnimeDetail.css'

function AnimeDetail() {
  const { id } = useParams();
  const [animes, setAnimeDetail] = useState([]);
  const [btnPopup, setBtnPopup] = useState(false);

  const { error, loading, data } = useQuery(LOAD_ANIME_DETAIL, {
    variables: {
      mediaId: parseInt(id),
    },
  });

  useEffect(() => {
    if (data) {
      setAnimeDetail(data.Page.media);
    }
  }, [data]);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error : {error.message}</div>;
  }


  return (
    <div className="home">
      {animes.map((anime) => (
        <div className="grid-detail">
          <div>
            <button onClick={() => setBtnPopup(true)}>
              <BsFillBookmarkFill />
              Add To My Collection
            </button>
            <Popup_add_to_collection trigger={btnPopup} setTrigger={setBtnPopup} animeId={id} />
          </div>
          <img src={anime.coverImage.large}></img>
          <h1>
            <div>{anime.title.english}</div>
          </h1>
          <h1>
            <div>{anime.title.native}</div>
          </h1>
          <div className="grid-genre">
            {anime.genres.map((genre) => (
              <div className="genres">
                <h4>{genre}</h4>
              </div>
            ))}
          </div>
          <h5>
            <div>{anime.description}</div>
          </h5>
        </div>
      ))}
    </div>
  );
}

export default AnimeDetail;