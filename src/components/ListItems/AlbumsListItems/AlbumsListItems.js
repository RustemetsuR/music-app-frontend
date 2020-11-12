import React from 'react';
import './AlbumsListItems.css';
import '../ListItemsWithImages.css'

const AlbumsListItems = props => {
    return (
        <div className='album-card card-with-image' onClick={props.clicked}>
            <img alt={props.name} src={props.image} />
            <h3>{props.name}</h3>
            <p>{props.yearOfIssue}</p>
        </div>
    );
};

export default AlbumsListItems;