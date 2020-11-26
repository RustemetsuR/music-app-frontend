import React, { useEffect } from 'react';
import { push } from "connected-react-router";
import { useDispatch, useSelector } from 'react-redux';
import ArtistsListItem from '../../../../components/ListItems/ArtistsListItem/ArtistsListItem';
import Spinner from '../../../../components/Spinner/Spinner';
import { fetchGetArtists } from '../../../../store/actions/musicActions';
import './Artists.css';
import { deleteArtist, publishArtist } from '../../../../store/actions/adminActions';

const Artists = () => {

    const dispatch = useDispatch();

    const artists = useSelector(state => state.music.artists);
    const loading = useSelector(state => state.music.loading);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(fetchGetArtists());
        console.log(user.token)
    }, [dispatch, user]);

    const getToAlbums = (id) => {
        dispatch(push("/music/" + id));
    };

    const deleteItem = id => {
        dispatch(deleteArtist(id));
    };

    const publishItem = id => {
        dispatch(publishArtist(id));
    };
    return (
        <div>
            {loading ?
                <Spinner /> :
                <div className='artists-box'>
                    {artists.map(a => {
                        const image = 'http://localhost:8000/uploads/' + a.image
                        return <ArtistsListItem
                            key={a._id}
                            image={image}
                            name={a.name}
                            clicked={() => getToAlbums(a._id)}
                            status={a.published}
                            delete={() => deleteItem(a._id)}
                            publish={() => publishItem(a._id)} />
                    })}
                </div>}

        </div>
    );
};

export default Artists;