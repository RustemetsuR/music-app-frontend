import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlbumsListItems from '../../components/ListItems/AlbumsListItems/AlbumsListItems';
import Spinner from '../../components/Spinner/Spinner';
import { fetchGetAlbums } from '../../store/actions/musicActions';
import './Albums.css';

const Albums = props => {

    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums);
    const artistName = useSelector(state => state.artistTitle);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(fetchGetAlbums(props.match.params.artistAlbums));
    }, [dispatch]);

    const getToTracks = id => {
        props.history.replace(props.match.params.artistAlbums + '/' + id);
    };

    return (
        <div>
            <h2 className='artist-name'>{artistName}</h2>
            {loading ?
                <Spinner /> :
                <div className='albums-box'>
                    {albums.map(album => {
                        const image = 'http://localhost:8000/uploads/' + album.image;
                        return <AlbumsListItems
                            key={album._id}
                            name={album.name}
                            image={image}
                            yearOfIssue={album.yearOfIssue}
                            clicked={() => getToTracks(album._id)} />
                    })}
                </div>}
        </div>
    );
};

export default Albums;