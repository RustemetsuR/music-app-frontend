import { push } from "connected-react-router";
import axiosApi from "../../axiosApi";
import { ADD_TRACK_HISTORY_FAILURE, ADD_TRACK_HISTORY_SUCCESS, GET_TRACK_HISTORY_FAILURE, GET_TRACK_HISTORY_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAILURE, REGISTER_SUCCESS } from "../actionTypes"

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
                    dateTime: r.dateTime,
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

export const logoutUser = () =>{
    return async (dispatch, getState) =>{
        const token = getState().user.user.token;
        const headers = {
            'Authorization': token,
        };
        await axiosApi.delete("/users/sessions", {headers});
        dispatch({type: LOGOUT_USER});
    } 
};
