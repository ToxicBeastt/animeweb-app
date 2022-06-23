import React from 'react'
import '../assets/css/Popup.css'

function Confimration_Remove_Anime_Popup(props) {
    function deleteFromList(index) {
        var tempArr = props.animeList;
        const newArr = tempArr.filter(object => {
            return object !== String(index);
        });
        var collectionList = localStorage.getItem('collection');
        var myJSONString = collectionList,
            myObject = JSON.parse(myJSONString);

        var objIndex = myObject.findIndex((obj => obj.collectionId == props.collectionId));
        props.setAnimeList(newArr);
        myObject[objIndex].animesId = newArr;
        localStorage.setItem('collection',JSON.stringify(myObject));
        props.setTrigger(false);
        
    }
    
    return (props.trigger) ? (
        <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
            <div className='container'>
                <div>
                    Are You Sure Want to Delete it???
                </div>
                <div>
                    <button onClick={() => deleteFromList(props.deleteId)}>Delete</button>
                    <button onClick={() => props.setTrigger(false)}>Cancel</button>
                </div>
            </div>
        </div>
    </div >
    ) : '';
}

export default Confimration_Remove_Anime_Popup