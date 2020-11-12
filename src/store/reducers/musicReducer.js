import { CHANGE_ALBUM_NAME_TITLE, CHANGE_ARTIST_NAME_TITLE, GET_ALBUMS_FAILURE, GET_ALBUMS_SUCCESS, GET_ARTISTS_FAILURE, GET_ARTISTS_SUCCESS, GET_TRACK_FAILURE, GET_TRACK_SUCCESS, REQUEST } from "../actionTypes";

const initialState = {
    tracks: [],
    artists: [],
    albums: [],
    artistTitle: '',
    albumTitle: '',
    loading: true,
    error: null,
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTISTS_SUCCESS:
            return { ...state, artists: action.value, loading: false };
        case GET_ARTISTS_FAILURE:
            return { ...state, error: action.error, loading: false };
        case GET_ALBUMS_SUCCESS:
            return { ...state, albums: action.value, loading: false };
        case GET_ALBUMS_FAILURE:
            return { ...state, error: action.error, loading: false };
        case GET_TRACK_SUCCESS:
            return { ...state, tracks: action.value, loading: false };
        case GET_TRACK_FAILURE:
            return { ...state, error: action.error, loading: false };
        case REQUEST:
            return {...state, loading: true};
        case CHANGE_ARTIST_NAME_TITLE:
            return { ...state, artistTitle: action.value };
        case CHANGE_ALBUM_NAME_TITLE:
            return { ...state, albumTitle: action.value };
        default:
            return state;
    };
};

export default musicReducer;