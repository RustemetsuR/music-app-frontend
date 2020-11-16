import React from 'react';
import './TrackHistoryListItems.css';

const TrackHistoryListItems = props => {
    return (
        <div className='track-history-list-item'>
            <h3>Track: {props.track}</h3>
            <h3>Artist: {props.artist}</h3>
            <span>Duration: {props.duration}</span>
        </div>
    );
};

export default TrackHistoryListItems;