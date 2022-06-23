import React from 'react';
import { LOAD_ANIME_DETAIL } from '../GraphQL/Queries';
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import '../assets/css/CollectionAnimeCard.css';
import { Link } from 'react-router-dom';


function CollectionAnimeCard(props) {

    function setDelete(id) {
        props.setIdToDelete(id);
        props.setConfirmationPopup(true);
    }

    const [animes, setAnimeList] = useState([]);

    const { error, loading, data } = useQuery(LOAD_ANIME_DETAIL, {
        variables: {
            mediaId: props.animeId,
        }
    });

    useEffect(() => {
        if (data) {
            setAnimeList(data.Page.media)

        }
    }, [data]);

    if (loading) {
        return <div>Loading....</div>
    }
    if (error) {
        return <div>Error : {error.message}</div>
    }
    return (
        <div>
            {animes.map((anime) =>
                <Card className="collection-anime-card" key={anime.id}>
                    <Card.Body>
                        <div className='container-info'>
                            <div className='column'>
                                <Link to={'/anime/' + String(anime.id)} style={{ textDecoration: 'none' }}>
                                    <div className='container-info'>
                                    {props.id === 0 &&
                                        <Card.Img variant="top" src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png" className='img' />
                                    }
                                    {props.id !== 0 &&
                                        <Card.Img variant="top" src={anime.coverImage.medium} className="img" />
                                    }
                                    <Card.Title >
                                        <div className='card-title'>
                                            {anime.title.english}
                                        </div>
                                    </Card.Title>
                                    </div>

                                </Link>
                            </div>
                            <div className='column' style={{ justifyContent: 'end' }}>
                                <div className='functionalButton'>
                                    <button onClick={() => setDelete(anime.id)}>Delete</button>
                                </div>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            )}</div>
    )
}

export default CollectionAnimeCard