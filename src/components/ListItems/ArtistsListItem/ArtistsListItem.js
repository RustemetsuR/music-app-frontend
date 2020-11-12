import React from 'react';
import '../ListItemsWithImages.css';

const ArtistsListItem = props => {
    return (
        <div className='card-with-image artists-card' onClick={props.clicked}>
            <img alt={props.name} src={props.image}/>
            <h3>{props.name}</h3>
        </div>
    );
};
export default ArtistsListItem;