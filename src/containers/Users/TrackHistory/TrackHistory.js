import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrackHistoryListItems from '../../../components/ListItems/TrackHistoryListItems/TrackHistoryListItems';
import { getHistory } from '../../../store/actions/userActions';
import './TrackHistory.css';

const TrackHistory = props => {
    const user = useSelector(state => state.user.user);
    const trackHistory = useSelector(state => state.user.trackHistory);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user === null) {
            props.history.push('/music');
        } else if (trackHistory === null) {
            dispatch(getHistory(user.user.token));
        };
    }, [dispatch, user, props.history, trackHistory])

    return (
        <div className='track-history-box'>
            <h2>History</h2>
            {trackHistory &&

                <div>
                    {trackHistory.map(th => {
                        return <TrackHistoryListItems key={th.id} track={th.name} artist={th.artist} duration={th.duration} />
                    })}
                </div>

            }
        </div>
    );
};

export default TrackHistory;