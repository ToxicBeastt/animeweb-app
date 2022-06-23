import React, { useState } from 'react'
import '../assets/css/Popup.css'
import Popup_add_collection from './Popup_add_collection';

function Popup_add_to_collection(props) {
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [btnPopup, setBtnPopup] = useState(false);

    var collectionList = localStorage.getItem('collection');
    var myJSONString = collectionList,
        myObject = JSON.parse(myJSONString);

    if (myObject != null) {
        const [checkedState, setCheckedState] = useState(
            new Array(myObject.length).fill(false)
        );
        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
            );

            setCheckedState(updatedCheckedState);
        };
        // console.log(myObject)
        const handleSubmit = (e) => {
            e.preventDefault();
            setIsSubmit(true);
            if (isSubmit) {
                for (let i = 0; i < checkedState.length; i++) {
                    if (checkedState[i] == true) {
                        myObject[i].animesId.push(props.animeId)

                    }
                }
                localStorage.removeItem("collection");
                localStorage.setItem("collection", JSON.stringify(myObject))
                props.setTrigger(false);
                // window.location.reload();
            }
        };

        return (props.trigger) ? (
            <div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                    <div className='container'>
                        <h1>Choose Collection</h1>
                        <form className="inputGroup" onSubmit={handleSubmit}>
                            <div className='container-list'>
                                {myObject.map(({ collectionId, collectionName }, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="list-item">
                                                <input
                                                    type="checkbox"
                                                    id={`custom-checkbox-${index}`}
                                                    name={collectionName}
                                                    value={collectionName}
                                                    checked={checkedState[index]}
                                                    onChange={() => handleOnChange(index)}
                                                />
                                                <label htmlFor={`custom-checkbox-${index}`}>{collectionName}</label>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <button type="submit" value="Submit" className="Button">Submit</button>
                        </form>
                    </div>
                </div>
            </div >
        ) : '';
    }
    else {
        return (props.trigger) ? (
            <div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                    <div className='container'>
                        <h1>Collection List Empty</h1>
                        <button onClick={() => setBtnPopup(true)}>Add New Collection </button>
                    </div>
                </div>
                <Popup_add_collection trigger={btnPopup} setTrigger={setBtnPopup} />
            </div >
        ) : '';
    }


}

export default Popup_add_to_collection