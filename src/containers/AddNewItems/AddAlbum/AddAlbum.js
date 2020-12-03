import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetArtists } from '../../../store/actions/musicActions';
import { fetchAddAlbum } from '../../../store/actions/userActions';
import './AddAlbum.css';

const AddAlbum = props => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const artists = useSelector(state => state.music.artists);

    const [data, setData] = useState({
        name: '',
        artist: '',
        image: '',
        yearOfIssue: 0,
    });

    useEffect(() => {
        if (user.length === 0) {
            props.history.replace("/music");
        };
        dispatch(fetchGetArtists());
    }, [dispatch, artists,props.history, user.length]);

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
        if (data.artist === '') {
            data.artist = artists[0]._id;
        };
        formData.append('artist', data.artist);
        formData.append('yearOfIssue', parseInt(data.yearOfIssue));
        dispatch(fetchAddAlbum(formData));
    };

    return (
        <div>
            <div className='form-box'>
                <form className='add-form' onSubmit={submitFormHandler}>
                    <input
                        className='album-name-input add-album-inputs'
                        name='name'
                        placeholder='Name'
                        onChange={changeData}
                        value={data.name}
                        required />
                    <input
                        type='number'
                        min='1800'
                        className='album-year-input add-album-inputs'
                        name='yearOfIssue'
                        placeholder='Year'
                        onChange={changeData}
                        value={data.yearOfIssue}
                        required />
                    <select className='album-artist-input add-album-inputs' value={data.artist} onChange={changeData} name='artist'>
                        {artists.length > 0 ? artists.map(a => {
                            return <option key={a._id} value={a._id}>{a.name}</option>
                        }) : null}
                    </select>
                    <input
                        className='album-image-input add-album-inputs'
                        type='file'
                        onChange={changeImage}
                        required />
                    <button className='add-artist-button' type='submit'>Add Album</button>
                </form>
            </div>
        </div>
    );
};

export default AddAlbum;