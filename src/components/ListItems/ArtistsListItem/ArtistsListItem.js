import React from 'react';
import ItemStatusForAdmin from '../../ItemStatusForAdmin/ItemStatusForAdmin';
import '../ListItemsWithImages.css';

const ArtistsListItem = props => {

    return (
        <div className='card-with-image artists-card'>
            <div className='artist-info test-card' onClick={props.clicked}>
                <img alt={props.name} src={props.image} />
                <h3>{props.name}</h3>
            </div>
            <ItemStatusForAdmin status={props.status} delete={props.delete} publish={props.publish} />
        </div>
    );
};
export default ArtistsListItem;