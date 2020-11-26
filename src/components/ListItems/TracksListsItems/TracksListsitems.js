import React from 'react';
import ItemStatusForAdmin from '../../ItemStatusForAdmin/ItemStatusForAdmin';
import './TracksListsItems.css';

const TracksListsItems = props => {
    
    return (
        <div className='track-card'>
            <div className='track-info-box' onClick={props.clicked}>
                <h2>{props.name}</h2>
                <p className='tracks-duration'>{props.duration}</p>
            </div>
            <p className='tracks-number'>№{props.number}</p>
            <ItemStatusForAdmin status={props.status} delete={props.delete} publish={props.publish}/>
        </div>
    );
};

export default TracksListsItems;