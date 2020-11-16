import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArtistsListItem from '../../../../components/ListItems/ArtistsListItem/ArtistsListItem';
import Spinner from '../../../../components/Spinner/Spinner';
import { fetchGetArtists } from '../../../../store/actions/musicActions';
import './Artists.css';

const Artists = props => {

    const dispatch = useDispatch();

    const artists = useSelector(state => state.music.artists);
    const loading = useSelector(state => state.music.loading);

    useEffect(() => {
        dispatch(fetchGetArtists());
    }, [dispatch]);

    const getToAlbums = (id) => {
        props.history.replace('music/' + id);
    };

    return (
        <div>
            {loading ? 
            <Spinner /> :
                <div className='artists-box'>
                    {artists.map(a => {
                        const image = 'http://localhost:8000/uploads/' + a.image
                        return <ArtistsListItem key={a._id} image={image} name={a.name} clicked={() => getToAlbums(a._id)} />
                    })}
                </div>}

        </div>
    );
};

export default Artists;