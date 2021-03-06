import React, { useEffect } from 'react';
import { push } from "connected-react-router";
import { useDispatch, useSelector } from 'react-redux';
import AlbumsListItems from '../../../components/ListItems/AlbumsListItems/AlbumsListItems';
import Spinner from '../../../components/Spinner/Spinner';
import { fetchGetAlbums } from '../../../store/actions/musicActions';
import './Albums.css';
import { deleteAlbum, publishAlbum } from '../../../store/actions/adminActions';
import { apiURL } from '../../../constants';
import noImage from '../../../assets/images/no-image.jpg';

const Albums = props => {

    const dispatch = useDispatch();
    const albums = useSelector(state => state.music.albums);
    const artistName = useSelector(state => state.music.artistTitle);
    const loading = useSelector(state => state.music.loading);

    useEffect(() => {
        dispatch(fetchGetAlbums(props.match.params.artistAlbums));
    }, [dispatch, props.match.params.artistAlbums]);

    const getToTracks = id => {
        dispatch(push('/music/' + props.match.params.artistAlbums + '/' + id));
    };

    const deleteItem = id => {
        dispatch(deleteAlbum(id));
        window.location.reload();
    };

    const publishItem = id => {
        dispatch(publishAlbum(id));
        window.location.reload();
    };

    return (
        <div>
            <h2 className='artist-name'>{artistName}</h2>
            {loading ?
                <Spinner /> :
                <div className='albums-box'>
                    {albums.map(album => {
                         let image = apiURL + '/uploads/' + album.image
                         if(album.image === ''){
                             image = noImage;
                         }
                        return <AlbumsListItems
                            key={album._id}
                            name={album.name}
                            image={image}
                            yearOfIssue={album.yearOfIssue}
                            clicked={() => getToTracks(album._id)}
                            status={album.published}
                            delete={() => deleteItem(album._id)}
                            publish={() => publishItem(album._id)} />
                    })}
                </div>}
        </div>
    );
};

export default Albums;