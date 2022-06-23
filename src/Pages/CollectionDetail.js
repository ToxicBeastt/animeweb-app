import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useParams } from "react-router-dom";
import '../assets/css/main.css';
import CollectionAnimeCard from '../components/CollectionAnimeCard';
import Confirmation_Remove_Anime_Popup from '../components/Confirmation_Remove_Anime_Popup';

function CollectionDetail() {
    const { collectionId } = useParams();
    const [animeList, setAnimeList] = useState([]);
    const [deleteId, setIdToDelete] = useState();
    const [btnConfirmation, setConfirmationPopup] = useState(false);

    var collectionList = localStorage.getItem('collection');
    var myJSONString = collectionList,
        myObject = JSON.parse(myJSONString);
    var result = []
    var collectionInfo = []
    if (myObject != null) {
        result = myObject.find(x => x.collectionId === collectionId).animesId;
        collectionInfo = myObject.find(x => x.collectionId === collectionId);
    }

    useEffect(() => {
        if (result) {
            setAnimeList(result)
        }
    }, []);
    if(result.length !== 0){
        return (
            <div className='home'>
                <h1>{collectionInfo.collectionName}</h1>
                <Confirmation_Remove_Anime_Popup
                    trigger={btnConfirmation}
                    setTrigger={setConfirmationPopup}
                    deleteId={deleteId}
                    animeList={animeList}
                    setAnimeList={setAnimeList}
                    collectionId={collectionId}
                />
                <div className="main-head">
                    <div className="" style={{ marginTop: '12px' }}>
                        {animeList.map(id => (
                            <CollectionAnimeCard
                                animeId={id}
                                animeList={animeList}
                                setAnimeList={setAnimeList}
                                collectionId={collectionId}
                                setIdToDelete={setIdToDelete}
                                setConfirmationPopup={setConfirmationPopup}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        )
    }
    else{
        if(result != null){
            return (
                <div className='home'>
                    <h1>{collectionInfo.collectionName}</h1>
                    <div className="main-head">
                        <div className="" style={{ marginTop: '12px' }}>
                            <h3>No Anime Added</h3>
                        </div>
                    </div>
                </div>
            )
    }
}
    
}

export default CollectionDetail