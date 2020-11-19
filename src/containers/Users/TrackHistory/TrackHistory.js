import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrackHistoryListItems from '../../../components/ListItems/TrackHistoryListItems/TrackHistoryListItems';
import Spinner from '../../../components/Spinner/Spinner';
import { getHistory } from '../../../store/actions/userActions';
import './TrackHistory.css';

const TrackHistory = props => {
    const user = useSelector(state => state.user.user);
    const trackHistory = useSelector(state => state.user.trackHistory);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user.length === 0) {
            return props.history.push('/music');
        }
        dispatch(getHistory(user.token));
    }, [dispatch, props.history, user.length, user.token]);

    return (
        <div className='track-history-box'>
            <h2>History</h2>
            { trackHistory ?
                <div className='track-history-list'>
                    {trackHistory.map(th => {
                        console.log(th)
                        return <TrackHistoryListItems key={th.id} track={th.name} artist={th.artist} duration={th.duration} dateTime={th.dateTime} />
                    })}
                </div>
                : <Spinner />}
        </div>
    );
};

export default TrackHistory;