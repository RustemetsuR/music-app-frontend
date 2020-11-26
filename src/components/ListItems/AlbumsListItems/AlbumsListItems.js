import React from 'react';
import './AlbumsListItems.css';
import '../ListItemsWithImages.css';
import ItemStatusForAdmin from '../../ItemStatusForAdmin/ItemStatusForAdmin';

const AlbumsListItems = props => {

    return (
        <div className='album-card card-with-image'>
            <img alt={props.name} src={props.image} onClick={props.clicked}/>
            <h3>{props.name}</h3>
            <p>{props.yearOfIssue}</p>
            <ItemStatusForAdmin status={props.status} delete={props.delete} publish={props.publish}/>
        </div>
    );
};

export default AlbumsListItems;