import React, { useState } from 'react'

import '../assets/css/Popup.css'

function Popup_add_collection(props) {
    const initialValues = { collectionName: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        var collectionId = localStorage.getItem('id');
        const errors = {};
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        if (isSubmit) {
            if (props.collection === null) {
                var addNewCollectionTemp = { collectionId: 0, collectionName: formValues.collectionName, animesId: [] };
                props.collection.push(addNewCollectionTemp)
                localStorage.setItem('collection', JSON.stringify(props.collection));
            }
            else {
                var cek = false
                var addNewCollectionTemp = { collectionId: collectionId , collectionName: formValues.collectionName, animesId: [] };
                for (let i = 0; i < props.collection.length; i++) {
                    var tempString = props.collection[i].collectionName
                    if (tempString == formValues.collectionName) {
                        cek = true;
                    }
                }
                if (cek == true) {
                    errors.collectionName = "Collection Name Already Exist"
                    setFormErrors(errors);
                }
                else {
                    props.collection.push(addNewCollectionTemp);
                    props.setCollectionList(props.collection)
                    localStorage.setItem('collection', JSON.stringify(props.collection));
                    setFormValues("");
                    props.setTrigger(false);
                }
            }
            localStorage.setItem('id', Number(collectionId) + 1)

        }
    };
    const validate = (values) => {
        const errors = {};
        const regex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        if (!values.collectionName) {
            errors.collectionName = "Collection Name Is Required!"
        } else if (regex.test(values.collectionName)) {
            errors.collectionName = "Collection Name Cant't Contain Special Character"
        }
        return errors;
    };

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                <div className='container'>
                    <form className="inputGroup" onSubmit={handleSubmit}>
                        <label>
                            Collection Name:
                        </label>
                        <input
                            type="text"
                            name="collectionName"
                            placeholder='Input Collection Name'
                            value={formValues.collectionName}
                            onChange={handleChange} />
                        <div className='Error'>{formErrors.collectionName}</div>
                        <button type="submit" value="Submit" className="Button">Submit</button>
                    </form>

                </div>

            </div>

        </div >
    ) : '';
}

export default Popup_add_collection