import React from 'react';
import ItemStatusForAdmin from '../../ItemStatusForAdmin/ItemStatusForAdmin';
import '../ListItemsWithImages.css';

const ArtistsListItem = props => {

    return (
        <div className='card-with-image artists-card'>
            <img alt={props.name} src={props.image} onClick={props.clicked}/>
            <h3>{props.name}</h3>
            <ItemStatusForAdmin status={props.status} delete={props.delete} publish={props.publish}/>
        </div>
    );
};
export default ArtistsListItem;