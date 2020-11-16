import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TracksListsItems from '../../../components/ListItems/TracksListsItems/TracksListsitems';
import Spinner from '../../../components/Spinner/Spinner';
import { fetchGetTracks } from '../../../store/actions/musicActions';
import { addToTrackHistory } from '../../../store/actions/userActions';
import './Tracks.css';

const Tracks = props => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.music.tracks);
    const loading = useSelector(state => state.music.loading);
    const artistName = useSelector(state => state.music.artistTitle);
    const albumName = useSelector(state => state.music.albumTitle);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(fetchGetTracks(props.match.params.albumTracks));
    }, [dispatch]);

    const addToHistory = (token, track, user) => {
        dispatch(addToTrackHistory(token, track, user));
    };

    const tracksList = tracks.map(track => {
        if(user){
            return <TracksListsItems
            key={track._id}
            duration={track.duration}
            name={track.name}
            number={track.number}
            clicked={() => addToHistory(user.user.token, track._id, user)} />
        }else{
            return <TracksListsItems
            key={track._id}
            duration={track.duration}
            name={track.name}
            number={track.number}
           />
        }
    });

    return (
        <div>
            <div className='album-info-box'>
                <h4 className='artist-name names'>Artist: <p>{artistName}</p></h4>
                <h4 className='album-name names'>Album: <p>{albumName}</p></h4>
            </div>
            {loading ?
                <Spinner /> :
                <div className='tracks-box'>
                   {tracksList}

                </div>}
        </div>
    );
};

export default Tracks;