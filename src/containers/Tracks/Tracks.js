import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TracksListsItems from '../../components/ListItems/TracksListsItems/TracksListsitems';
import Spinner from '../../components/Spinner/Spinner';
import { fetchGetTracks } from '../../store/actions/musicActions';
import './Tracks.css';

const Tracks = props => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.tracks);
    const loading = useSelector(state => state.loading);
    const artistName = useSelector(state => state.artistTitle);
    const albumName = useSelector(state => state.albumTitle);

    useEffect(() => {
        dispatch(fetchGetTracks(props.match.params.albumTracks));
    }, [props.match.params.albumTracks, dispatch]);
    return (
        <div>
            <div className='album-info-box'>
                <h4 className='artist-name names'>Artist: <p>{artistName}</p></h4>
                <h4 className='album-name names'>Album: <p>{albumName}</p></h4>
            </div>
            {loading ?
                <Spinner /> :
                <div className='tracks-box'>
                    {tracks.map(track => {
                        return <TracksListsItems
                            key={track._id}
                            duration={track.duration}
                            name={track.name}
                            number={track.number} />
                    })}
                </div>}
        </div>
    );
};

export default Tracks;