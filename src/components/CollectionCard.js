import React from 'react';
import { LOAD_ONE_ANIME } from '../GraphQL/Queries';
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import '../assets/css/CollectionCard.css';
import { Link } from 'react-router-dom';


function CollectionCard(props) {
    function setDelete(id){
        props.setIdToDelete(id);
        props.setConfirmationPopup(true);
    }

    const [animes, setAnimeList] = useState([]);

    const { error, loading, data } = useQuery(LOAD_ONE_ANIME, {
        variables: {
            mediaId: props.id,
            perPage: 1,
            page: 1
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
        <>
            {animes.map((anime) =>
                <Card className="collection-card" key={anime.id}>
                    <Card.Body>
                        <div className='body'>
                            <div className='column'>
                                <Link to={"/collection/" + props.collectionId} style={{ textDecoration: 'none' }}>
                                    <div className="body">
                                        {props.id === 0 &&
                                            <Card.Img variant="top" src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png" className='img' />
                                        }
                                        {props.id !== 0 &&
                                            <Card.Img variant="top" src={anime.coverImage.medium} className="img" />
                                        }
                                        <Card.Title >
                                            <div className='card-title'>
                                                {props.collectionName}
                                            </div>
                                        </Card.Title>
                                    </div>
                                </Link>
                            </div>
                            <div className='column' style={{ justifyContent: 'end' }}>
                                <div className='functionalButton'>
                                    <button onClick={() => setDelete(props.collectionId)}>Delete</button>
                                </div>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </>

    )
}

export default CollectionCard;