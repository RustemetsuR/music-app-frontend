import { push } from "connected-react-router";
import axiosApi from "../../axiosApi";
import { ADD_ALBUM_SUCCESS, ADD_ARTIST_FAILURE, ADD_ARTIST_SUCCESS, ADD_TRACK_FAILURE, ADD_TRACK_HISTORY_FAILURE, ADD_TRACK_HISTORY_SUCCESS, ADD_TRACK_SUCCESS, GET_TRACK_HISTORY_FAILURE, GET_TRACK_HISTORY_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAILURE, REGISTER_SUCCESS } from "../actionTypes"

const userRegisterSuccess = value => {
    return { type: REGISTER_SUCCESS, value };
};

const userRegisterFailure = error => {
    return { type: REGISTER_FAILURE, error };
};

const userLoginSuccess = value => {
    return { type: LOGIN_SUCCESS, value };
};

const userLoginFailure = error => {
    return { type: LOGIN_FAILURE, error };
};

const addToHistorySuccess = () => {
    return { type: ADD_TRACK_HISTORY_SUCCESS };
};

const getHistorySuccess = value => {
    return { type: GET_TRACK_HISTORY_SUCCESS, value };
};

const getHistoryFailure = error => {
    return { type: GET_TRACK_HISTORY_FAILURE, error };
};

const addToHistoryFailure = () => {
    return { type: ADD_TRACK_HISTORY_FAILURE };
};

const addArtist = () => {
    return { type: ADD_ARTIST_SUCCESS };
};

const addArtistFailure = error => {
    return { type: ADD_ARTIST_FAILURE, error };
};

const addAlbum = () => {
    return { type: ADD_ALBUM_SUCCESS };
};

const addAlbumFailure = error => {
    return { type: ADD_ARTIST_FAILURE, error };
};

const addTrack = () => {
    return { type: ADD_TRACK_SUCCESS };
};

const addTrackFailure = error => {
    return { type: ADD_TRACK_FAILURE, error };
};

export const addToTrackHistory = (token, trackID, user) => {
    if (user !== null) {
        return async dispatch => {
            const data = {
                track: trackID,
                dateTime: new Date().toISOString(),
            };
            const headers = {
                'Authorization': token,
            };
            try {
                await axiosApi.post("/trackHistory", data, { headers });
                dispatch(addToHistorySuccess());
            } catch (e) {
                dispatch(addToHistoryFailure(e.response.data));
            };
        };
    }
};

export const getHistory = () => {
    return async (dispatch, getState) => {
        const headers = {
            'Authorization': getState().user.user && getState().user.user.token
        };
        if (!getState().user.user) {
            return dispatch(push('/login'));
        };
        try {
            const response = await axiosApi.get("/trackHistory", { headers });
            dispatch(getHistorySuccess(response.data));
        } catch (e) {
            dispatch(getHistoryFailure(e.response))
        };
    };
};

export const register = userData => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/users', userData);
            dispatch(userRegisterSuccess(response.data));
            dispatch(push('/music'));
        } catch (error) {
            dispatch(userRegisterFailure(error.response.data));
        };
    };
};

export const login = userData => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/users/sessions', userData);
            dispatch(userLoginSuccess(response.data));
            dispatch(push('/music'));
        } catch (error) {
            console.log(error)
            dispatch(userLoginFailure(error.response.data));
        };
    };
};

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const token = getState().user.user.token;
        const headers = {
            'Authorization': token,
        };
        await axiosApi.delete("/users/sessions", { headers });
        dispatch({ type: LOGOUT_USER });
    }
};

export const fetchAddArtist = data => {
    return async (dispatch, getState) => {
        if (getState().user.user !== []) {
            const token = getState().user.user.token;
            const headers = {
                'Authorization': token,
            };
            try {
                await axiosApi.post("/artists", data, { headers });
                dispatch(addArtist());
                dispatch(push("/music"));
            } catch (e) {
                dispatch(addArtistFailure(e));
            };
        };
    };
};

export const fetchAddAlbum = data => {
    return async (dispatch, getState) => {
        if (getState().user.user !== []) {
            const token = getState().user.user.token;
            const headers = {
                'Authorization': token,
            };
            try {
                await axiosApi.post("/albums", data, { headers });
                dispatch(addAlbum());
                dispatch(push("/music"));
            } catch (e) {
                dispatch(addAlbum(e));
            };
        };
    };
};

export const fetchAddTrack = data => {
    return async (dispatch, getState) => {
        if (getState().user.user !== []) {
            const token = getState().user.user.token;
            const headers = {
                'Authorization': token,
            };
            try {
                await axiosApi.post("/tracks", data, { headers });
                dispatch(addTrack());
                dispatch(push("/music"));
            } catch (e) {
                dispatch(addTrackFailure(e.response.data));
            };
        };
    };
};

