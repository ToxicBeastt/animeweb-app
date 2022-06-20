import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import { LOAD_ANIME_DETAIL } from '../GraphQL/Queries';

function AnimeDetail() {
    let { id } = useParams();
    const [animes, setAnimeDetail] = useState([]);

    const { error, loading, data } = useQuery(LOAD_ANIME_DETAIL, {
        variables: {
            mediaId: 1,
            page: null,
            perPage: 1
        }
    });

    useEffect(() => {
        if (data) {
            setAnimeDetail(data.Page.media)
        }
    }, [data]);

    if (loading) {
        return <div>Loading....</div>
    }
    if (error) {
        return <div>Error : {error.message}</div>
    }

    console.log(data.Page.media);

    return (
        <div className='home'>
            {animes.map(anime => (
                <div>
                    <img src={anime.coverImage.large}></img>
                    <h1><div>{anime.title.english}</div></h1>
                    <h1><div>{anime.title.native}</div></h1>
                    <div className='grid-genre'>
                        <h5>123</h5>
                        <button><h5>123</h5></button>
                    </div>
                    <div className='grid-genre'>
                        {anime.genres.map(genre => (
                            <h4><div  className="genres">{genre}</div></h4>
                        ))}
                    </div>
                    <h5><div>{anime.description}</div></h5>
                    <h1><div>{anime.title.native}</div></h1>
                </div>
            ))}
        </div>

    )
}

export default AnimeDetail;