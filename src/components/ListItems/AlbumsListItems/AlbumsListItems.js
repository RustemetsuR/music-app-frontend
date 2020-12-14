import React from 'react';
import './AlbumsListItems.css';
import '../ListItemsWithImages.css';
import ItemStatusForAdmin from '../../ItemStatusForAdmin/ItemStatusForAdmin';

const AlbumsListItems = props => {

    return (
        <div className='album-card card-with-image'>
            <div className='artist-info test-card' onClick={props.clicked}>
                <img alt={props.name} src={props.image} />
                <h3>{props.name}</h3>
                <p>{props.yearOfIssue}</p>
            </div>

            <ItemStatusForAdmin status={props.status} delete={props.delete} publish={props.publish} />
        </div>
    );
};

export default AlbumsListItems;