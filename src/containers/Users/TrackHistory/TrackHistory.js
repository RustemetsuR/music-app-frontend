import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrackHistoryListItems from '../../../components/ListItems/TrackHistoryListItems/TrackHistoryListItems';
import Spinner from '../../../components/Spinner/Spinner';
import { getHistory } from '../../../store/actions/userActions';
import './TrackHistory.css';

const TrackHistory = () => {
    const trackHistory = useSelector(state => state.user.trackHistory);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHistory());
    }, [dispatch]);

    return (
        <div className='track-history-box'>
            <h2>History</h2>
            { trackHistory ?
                <div className='track-history-list'>
                    {trackHistory.map(th => {
                        return <TrackHistoryListItems
                            key={th._id}
                            track={th.track.name}
                            artist={th.track.album.artist.name}
                            duration={th.duration}
                            dateTime={th.dateTime} />
                    })}
                </div>
                : <Spinner />}
        </div>
    );
};

export default TrackHistory;