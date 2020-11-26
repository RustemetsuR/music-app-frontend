import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAlbums } from '../../../store/actions/musicActions';
import { fetchAddTrack } from '../../../store/actions/userActions';
import './AddTrack.css';

const AddTrack = props => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const albums = useSelector(state => state.music.albums);
    const error = useSelector(state => state.user.error);

    const [data, setData] = useState({
        name: '',
        duration: '',
        album: '',
        number: 0,
    });

    useEffect(() => {
        if (user.length === 0) {
            props.history.replace("/music");
        };
        dispatch(fetchGetAlbums(''));
    }, [dispatch, props.history, user.length]);

    const changeData = event => {
        const value = event.target.value;
        const name = event.target.name;
        const dataCopy = {
            ...data,
            [name]: value,
        };
        console.log(data);
        setData(dataCopy);
    };

    const addAlbum = event => {
        event.preventDefault();
        const dataCopy = {
            ...data,
            number: parseInt(data.number)
        };
        console.log(dataCopy)
        dispatch(fetchAddTrack(dataCopy));
    };

    return (
        <div>
            <div className='form-box'>
                <form className='add-form' onSubmit={addAlbum}>
                    {error ? <p>{error.error}</p> : null}
                    <input
                        className='album-name-input add-track-inputs'
                        name='name'
                        placeholder='Name'
                        onChange={changeData}
                        value={data.name}
                        required />
                    <input
                        type='number'
                        className='track-number-input add-track-inputs'
                        name='number'
                        placeholder='Number'
                        onChange={changeData}
                        value={data.number}
                        required />
                    <input
                        className='track-duration-input add-track-inputs'
                        name='duration'
                        placeholder='Duration'
                        onChange={changeData}
                        value={data.duration}
                        required />
                    <select className='track-album-input add-track-inputs' value={data.artist} onChange={changeData} name='album'>
                        {albums.length > 0 ? albums.map(a => {
                            return <option key={a._id} value={a._id}>{a.name}</option>
                        }) : null}
                    </select>
                    <button className='add-album-button' type='submit'>Add Track</button>
                </form>
            </div>
        </div>
    );
};

export default AddTrack;