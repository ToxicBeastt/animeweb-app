import React from 'react'
import '../assets/css/Popup.css'

function Confimation_Remove_Collection(props) {
    function deleteFromList(index) {
        const tempArr = props.collection;
        const newArr = tempArr.filter(object => {
            return object.collectionId !== index;
        });
        props.setCollectionList(newArr);
        localStorage.setItem('collection', JSON.stringify(newArr));
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

export default Confimation_Remove_Collection