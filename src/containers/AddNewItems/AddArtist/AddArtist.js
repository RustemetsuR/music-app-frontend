import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddArtist } from '../../../store/actions/userActions';
import './AddArtist.css';

const AddArtist = props => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const [data, setData] = useState({
        name: '',
        description: '',
        image: '',
    });

    useEffect(() => {
        if (user.length === 0) {
            props.history.replace("/music");
        };
    }, [dispatch]);

    const changeData = event => {
        const value = event.target.value;
        const name = event.target.name;
        const dataCopy = {
            ...data,
            [name]: value,
        };
        setData(dataCopy);
        console.log(data);
    };

    const changeImage = event => {
        setData({ ...data, image: event.target.files[0] });
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('name', data.name);
        formData.append('description', data.description);
        dispatch(fetchAddArtist(formData));
    };

    return (
        <div>
            <div className='form-box'>
                <form className='add-form' onSubmit={submitFormHandler}>
                    <input
                        className='artist-name-input add-artist-inputs'
                        name='name'
                        placeholder='Name'
                        onChange={changeData}
                        value={data.name}
                        required />
                    <input
                        className='artist-description-input add-artist-inputs'
                        name='description'
                        placeholder='Description'
                        onChange={changeData}
                        value={data.description}
                        required />
                    <input
                        className='artist-image-input add-artist-inputs'
                        type='file'
                        onChange={changeImage}
                        required />
                    <button className='add-artist-button' type='submit'>Add Artist</button>
                </form>
            </div>
        </div>
    );
};

export default AddArtist;