import React from 'react';
import './TrackHistoryListItems.css';

const TrackHistoryListItems = props => {

    const date = props.dateTime;
    return (
        <div className='track-history-list-item'>
            <h3>Track: {props.track}</h3>
            <h3>Artist: {props.artist}</h3>
            <p>Duration: {props.duration}</p>
            <span>{date.slice(0, 10)} {date.slice(11,19)}</span>
            
        </div>
    );
};

export default TrackHistoryListItems;