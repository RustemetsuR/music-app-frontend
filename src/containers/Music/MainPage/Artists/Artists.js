import React, { useEffect } from 'react';
import { push } from "connected-react-router";
import { useDispatch, useSelector } from 'react-redux';
import ArtistsListItem from '../../../../components/ListItems/ArtistsListItem/ArtistsListItem';
import Spinner from '../../../../components/Spinner/Spinner';
import { fetchGetArtists } from '../../../../store/actions/musicActions';
import './Artists.css';
import { deleteArtist, publishArtist } from '../../../../store/actions/adminActions';
import noArtist from '../../../../assets/images/no-artist.png';
import { apiURL } from '../../../../constants';

const Artists = () => {

    const dispatch = useDispatch();

    const artists = useSelector(state => state.music.artists);
    const loading = useSelector(state => state.music.loading);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(fetchGetArtists());
    }, [user, dispatch]);

    const getToAlbums = (id) => {
        dispatch(push("/music/" + id));
    };

    const deleteItem = id => {
        dispatch(deleteArtist(id));
        window.location.reload();
    };

    const publishItem = id => {
        dispatch(publishArtist(id));
        window.location.reload();
    };
    return (
        <div>
            {loading ?
                <Spinner /> :
                <div className='artists-box'>
                    {artists.map(a => {
                        let image = apiURL + '/uploads/' + a.image
                        if(a.image === ''){
                            image = noArtist;
                        }
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