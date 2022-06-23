import React, { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import Confimation_Remove_Collection from "../components/Confimation_Remove_Collection";
import Popup_add_collection from '../components/Popup_add_collection';

function Collection() {
  const [btnPopup, setBtnPopup] = useState(false);
  const [btnConfirmation, setConfirmationPopup] = useState(false);
  const [collections, setCollectionList] = useState([]);
  const [deleteId, setIdToDelete] = useState();

  var collectionList = localStorage.getItem('collection');
  var myJSONString = collectionList,
    myObjectJSON = JSON.parse(myJSONString)

  useEffect(() => {
    if (myObjectJSON) {
      setCollectionList(myObjectJSON);
    }
  }, []);
  // console.log(collections)

  if (collections.length !== 0) {
    return (
      <div className='home'>
        <h1>Collection</h1>
        <button onClick={() => setBtnPopup(true)}>
          add Collection
        </button>
        <Popup_add_collection trigger={btnPopup} setTrigger={setBtnPopup} collection={collections} setCollectionList={setCollectionList} />
        <Confimation_Remove_Collection
          trigger={btnConfirmation}
          setTrigger={setConfirmationPopup}
          deleteId={deleteId}
          collection={collections}
          setCollectionList={setCollectionList} />
        <div className='' style={{ marginTop: '12px;' }}>
          {collections.map(collection => (
            <div key={collection.collectionId}>
              <CollectionCard
                collectionId={collection.collectionId}
                collectionName={collection.collectionName}
                id={collection.animesId[0]}
                setConfirmationPopup={setConfirmationPopup}
                setIdToDelete={setIdToDelete} />
            </div>
          ))
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='home'>
        <h1>Collection</h1>
        <button onClick={() => setBtnPopup(true)}>
          add Collection
        </button>
        <Popup_add_collection trigger={btnPopup} setTrigger={setBtnPopup} collection={collections} setCollectionList={setCollectionList} />
        <div className='' style={{ marginTop: '12px;' }}>
          <h1>No Collection Added</h1>
        </div>
      </div>
    )
  }
}

export default Collection;