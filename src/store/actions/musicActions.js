import axiosApi from "../../axiosApi";

const { GET_ARTISTS_SUCCESS, GET_ARTISTS_FAILURE, GET_ALBUMS_SUCCESS, GET_ALBUMS_FAILURE, GET_TRACK_SUCCESS, GET_TRACK_FAILURE, CHANGE_ARTIST_NAME_TITLE, CHANGE_ALBUM_NAME_TITLE, REQUEST, } = require("../actionTypes")

const getArtists = value => {
    return { type: GET_ARTISTS_SUCCESS, value };
};

const getArtistsError = error => {
    return { type: GET_ARTISTS_FAILURE, error };
};

const getAlbums = value => {
    return { type: GET_ALBUMS_SUCCESS, value };
};

const getAlbumsError = error => {
    return { type: GET_ALBUMS_FAILURE, error };
};

const getTracks = value => {
    return { type: GET_TRACK_SUCCESS, value };
};

const getTracksError = error => {
    return { type: GET_TRACK_FAILURE, error };
};

const request = () => {
    return { type: REQUEST };
};

export const changeArtistTitle = value => {
    return { type: CHANGE_ARTIST_NAME_TITLE, value };
};

export const changeAlbumTitle = value => {
    return { type: CHANGE_ALBUM_NAME_TITLE, value };
};

export const fetchGetArtists = () => {
    return async (dispatch, getState) => {
        dispatch(request());
        try {
            if (getState().user.user.role !== 'admin') {
                const response = await axiosApi.get('/artists');
                dispatch(getArtists(response.data));
            } else if (getState().user.user.role === 'admin') {
                const headers = {
                    'Authorization': getState().user.user && getState().user.user.token
                };
                const response = await axiosApi.get('/unpublishedItems/artists', { headers });
                dispatch(getArtists(response.data));
            };
        } catch (e) {
            dispatch(getArtistsError(e));
        };
    };
};

export const fetchGetAlbums = artistID => {
    return async (dispatch, getState) => {
        dispatch(request());
        try {
            if (getState().user.user.role !== 'admin') {
                const response = await axiosApi.get('/albums?artist=' + artistID);
                const responseName = await axiosApi.get('/artists/' + artistID);
                dispatch(getAlbums(response.data));
                dispatch(changeArtistTitle(responseName.data.name));
            } else if (getState().user.user.role === 'admin') {
                const headers = {
                    'Authorization': getState().user.user && getState().user.user.token
                };
                const response = await axiosApi.get('/unpublishedItems/albums?artist=' + artistID, { headers });
                const responseName = await axiosApi.get('/unpublishedItems/artists/' + artistID, { headers });
                dispatch(getAlbums(response.data));
                dispatch(changeArtistTitle(responseName.data.name));
            };
        } catch (e) {
            dispatch(getAlbumsError(e));
        };
    };
};

export const fetchGetTracks = albumID => {
    return async (dispatch,getState) => {
        dispatch(request());
        try {
            if (getState().user.user.role !== 'admin') {
                const response = await axiosApi.get('/tracks?album=' + albumID);
                const responseName = await axiosApi.get('/albums/' + albumID)
                dispatch(getTracks(response.data));
                dispatch(changeArtistTitle(responseName.data.artist.name));
                dispatch(changeAlbumTitle(responseName.data.name));
            } else if (getState().user.user.role === 'admin') {
                const headers = {
                    'Authorization': getState().user.user && getState().user.user.token
                };
                const response = await axiosApi.get('/unpublishedItems/tracks?album=' + albumID, {headers});
                const responseName = await axiosApi.get('/unpublishedItems/albums/' + albumID, {headers})
                dispatch(getTracks(response.data));
                dispatch(changeArtistTitle(responseName.data.artist.name));
                dispatch(changeAlbumTitle(responseName.data.name));
            }
        } catch (e) {
            dispatch(getTracksError(e));
        };
    };
};