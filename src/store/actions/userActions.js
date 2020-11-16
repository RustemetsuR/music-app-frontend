import axiosApi from "../../axiosApi";
import { ADD_TRACK_HISTORY_FAILURE, ADD_TRACK_HISTORY_SUCCESS, CHANGE_PASSWORD_INPUT_VALUE, CHANGE_PASSWORD_LOGIN_INPUT_VALUE, CHANGE_USERNAME_INPUT_VALUE, CHANGE_USERNAME_LOGIN_INPUT_VALUE, GET_TRACK_HISTORY_FAILURE, GET_TRACK_HISTORY_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from "../actionTypes"

export const passwordValueOnChange = value => {
    return { type: CHANGE_PASSWORD_INPUT_VALUE, value };
};

export const userValueOnChange = value => {
    return { type: CHANGE_USERNAME_INPUT_VALUE, value };
};

export const usernameLoginValueOnChange = value => {
    return { type: CHANGE_USERNAME_LOGIN_INPUT_VALUE, value };
};

export const passwordLoginValueOnChange = value => {
    return { type: CHANGE_PASSWORD_LOGIN_INPUT_VALUE, value };
};

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

export const addToTrackHistory = (token, trackID, user) => {
    if (user !== null) {
        return async dispatch => {
            const data = {
                track: trackID,
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

export const getHistory = (token) => {
    return async dispatch => {
        const headers = {
            'Authorization': token,
        };
        const history = [];
        try {
            const response = await axiosApi.get("/trackHistory", { headers });
            response.data.map(async r => {
                const track = await axiosApi.get("/tracks/" + r.track);
                const album = await axiosApi.get("/albums/" + track.data.album);
                const data = {
                    artist: album.data.artist.name,
                    duration: track.data.duration,
                    name: track.data.name,
                    id: r._id,
                };
                history.push(data);
            });
            dispatch(getHistorySuccess(history));

        } catch (e) {
            dispatch(getHistoryFailure(e.response))
        }
    }
}

export const register = userData => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/users', userData);
            dispatch(userRegisterSuccess(response.data));
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
        } catch (error) {
            dispatch(userLoginFailure(error.response.data));
        };
    };
};