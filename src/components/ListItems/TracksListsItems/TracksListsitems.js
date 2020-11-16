import React from 'react';
import './TracksListsItems.css';

const TracksListsItems = props => {
    
    return (
        <div className='track-card' onClick={props.clicked}>
            <div className='track-info-box'>
                <h2>{props.name}</h2>
                <p className='tracks-duration'>{props.duration}</p>
            </div>
            <p className='tracks-number'>№{props.number}</p>
        </div>
    );
};

export default TracksListsItems;