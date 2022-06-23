import React, { useEffect, useState } from "react";
import '../assets/css/main.css';
import { useQuery } from "@apollo/client";
import { LOAD_ANIME_DETAIL } from "../GraphQL/Queries";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function AnimeCard(props) {
    const [animes, setAnimeDetail] = useState([]);

    const { error, loading, data } = useQuery(LOAD_ANIME_DETAIL, {
        variables: {
            mediaId: parseInt(props.animeId),
        },
    });
    useEffect(() => {
        if (data) {
            setAnimeDetail(data.Page.media)
        }
    }, [data]);
    if (loading) {
        return <div>Loading....</div>;
    }
    if (error) {
        return <div>Error : {error.message}</div>;
    }

    return (
        <>
            {animes.map(anime => (
                <Card className="anime-card" key={anime.id}>
                    <Link to={'/anime/' + String(anime.id)} style={{ textDecoration: 'none' }}>
                        <Card.Img variant="top" src={anime.coverImage.large} className="img" />
                        <Card.Body>
                            <div className="body">
                                {anime.title.english != null &&
                                    <Card.Title className="anime-title link">
                                        <div className="link">
                                            {anime.title.english}
                                        </div>
                                    </Card.Title>
                                }
                                {anime.title.english == null &&
                                    <Card.Title className="anime-title link">{anime.title.native}</Card.Title>
                                }
                                <Card.Text className="anime-text link">Episodes {anime.episodes}</Card.Text>
                            </div>
                        </Card.Body>
                    </Link>
                </Card>
            ))}
        </>
    )
}

export default AnimeCard