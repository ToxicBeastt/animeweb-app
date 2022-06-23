import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { LOAD_ANIME_LIST } from "../GraphQL/Queries";
import Card from 'react-bootstrap/Card';
import '../assets/css/main.css';
import { Link } from 'react-router-dom';
import React from "react";

const PAGE_SIZE = 10;

function AnimeList() {
    const [page, setPage] = useState(1);
    const [animes, setAnimeList] = useState([]);


    const { error, loading, data } = useQuery(LOAD_ANIME_LIST, {
        variables: {
            page: page,
            perPage: PAGE_SIZE,
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
        <div className="main-head">
            <nav className="nav-page">
                <button onClick={() => setPage((page) => page - 1)} disabled={page === 1}>Previous</button>
                <div>Page {page}</div>
                <button onClick={() => setPage((page) => page + 1)}>Next</button>
            </nav>
            <div className="grid-container">
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
            </div>
        </div>

    );
}

export default AnimeList;