import axiosApi from "../../axiosApi";

const {
    GET_UNPUBLISHED_ITEMS_SUCCESS,
    GET_UNPUBLISHED_ITEMS_FAILURE,
    CHANGE_ARTIST_TO_PUBLISHED_SUCCESS,
    CHANGE_ARTIST_TO_PUBLISHED_FAILURE,
    CHANGE_ALBUM_TO_PUBLISHED_SUCCESS,
    CHANGE_ALBUM_TO_PUBLISHED_FAILURE,
    CHANGE_TRACK_TO_PUBLISHED_SUCCESS,
    CHANGE_TRACK_TO_PUBLISHED_FAILURE,
    DELETE_ARTIST_SUCCESS,
    DELETE_ALBUM_SUCCESS,
    DELETE_ARTIST_FAILURE,
    DELETE_TRACK_SUCCESS,
    DELETE_TRACK_FAILURE, } = require("../actionTypes")

const getUnpublishedItems = value => {
    return { type: GET_UNPUBLISHED_ITEMS_SUCCESS, value };
};

const getUnpublishedItemsFailure = error => {
    return { type: GET_UNPUBLISHED_ITEMS_FAILURE, error };
};

const publishArtistSuccess = () => {
    return { type: CHANGE_ARTIST_TO_PUBLISHED_SUCCESS };
};

const publishArtistFailure = error => {
    return { type: CHANGE_ARTIST_TO_PUBLISHED_FAILURE, error };
};

const publishAlbumSuccess = () => {
    return { type: CHANGE_ALBUM_TO_PUBLISHED_SUCCESS };
};


const publishAlbumFailure = error => {
    return { type: CHANGE_ALBUM_TO_PUBLISHED_FAILURE, error };
};

const publishTrackSuccess = () => {
    return { type: CHANGE_TRACK_TO_PUBLISHED_SUCCESS };
};


const publishTrackFailure = error => {
    return { type: CHANGE_TRACK_TO_PUBLISHED_FAILURE, error };
};

const deleteArtistSuccess = () => {
    return { type: DELETE_ARTIST_SUCCESS };
};

const deleteArtistFailure = error => {
    return { type: DELETE_ARTIST_SUCCESS, error };
};

const deleteAlbumSuccess = () => {
    return { type: DELETE_ALBUM_SUCCESS };
};

const deleteAlbumFailure = error => {
    return { type: DELETE_ARTIST_FAILURE, error };
};

const deleteTrackSuccess = () => {
    return { type: DELETE_TRACK_SUCCESS };
};

const deleteTrackFailure = error => {
    return { type: DELETE_TRACK_FAILURE, error };
};

export const fetchGetUnpublishedItems = token => {
    return async dispatch => {
        const headers = {
            'Authorization': token,
        };
        try {
            const response = await axiosApi.get("/unpublishedItems", { headers });
            dispatch(getUnpublishedItems(response.data));
        } catch (e) {
            dispatch(getUnpublishedItemsFailure(e.response.data.error));
        };
    };
};

export const publishArtist = id => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().user.user && getState().user.user.token,
            };
            let data;
            await axiosApi.put("/artists/" + id, data, { headers });
            dispatch(publishArtistSuccess());
        } catch (e) {
            dispatch(publishArtistFailure(e));
        };
    };
};

export const deleteArtist = id => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().user.user && getState().user.user.token,
            };
            await axiosApi.delete("/artists/" + id, { headers });
            dispatch(deleteArtistSuccess());
        } catch (e) {
            dispatch(deleteArtistFailure(e));
        };
    };
};

export const publishAlbum = (id) => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().user.user && getState().user.user.token,
            };
            let data;
            await axiosApi.put("/albums/" + id, data, { headers });
            dispatch(publishAlbumSuccess());
        } catch (e) {
            dispatch(publishAlbumFailure(e));
        };
    };
};

export const deleteAlbum = id => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().user.user && getState().user.user.token,
            };
            await axiosApi.delete("/albums/" + id, { headers });
            dispatch(deleteAlbumSuccess());
        } catch (e) {
            dispatch(deleteAlbumFailure(e));
        };
    };
}

export const publishTrack = (id) => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().user.user && getState().user.user.token,
            };
            let data;
            await axiosApi.put("/tracks/" + id, data, { headers });
            dispatch(publishTrackSuccess());
        } catch (e) {
            dispatch(publishTrackFailure(e));
        };
    };
};

export const deleteTrack = id => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().user.user && getState().user.user.token,
            };
            await axiosApi.delete("/tracks/" + id, { headers });
            dispatch(deleteTrackSuccess());
        } catch (e) {
            dispatch(deleteTrackFailure(e));
        };
    };
}