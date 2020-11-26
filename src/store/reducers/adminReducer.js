const {
    GET_UNPUBLISHED_ITEMS_SUCCESS,
    GET_UNPUBLISHED_ITEMS_FAILURE,
    CHANGE_ARTIST_TO_PUBLISHED_FAILURE,
    CHANGE_ALBUM_TO_PUBLISHED_SUCCESS,
    CHANGE_ALBUM_TO_PUBLISHED_FAILURE,
    CHANGE_TRACK_TO_PUBLISHED_SUCCESS,
    CHANGE_TRACK_TO_PUBLISHED_FAILURE,
    DELETE_ARTIST_SUCCESS,
    DELETE_ARTIST_FAILURE,
    DELETE_ALBUM_SUCCESS,
    DELETE_ALBUM_FAILURE,
    DELETE_TRACK_SUCCESS,
    DELETE_TRACK_FAILURE } = require("../actionTypes");

const initialState = {
    unpublishedItems: [],
    error: null,
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UNPUBLISHED_ITEMS_SUCCESS:
            return { ...state, unpublishedItems: action.value, error: null };
        case GET_UNPUBLISHED_ITEMS_FAILURE:
            return { ...state, error: action.error };
        case CHANGE_ARTIST_TO_PUBLISHED_FAILURE:
            return { ...state, error: null };
        case CHANGE_ARTIST_TO_PUBLISHED_FAILURE:
            return { ...state, error: action.error };
        case CHANGE_ALBUM_TO_PUBLISHED_SUCCESS:
            return { ...state, error: null };
        case CHANGE_ALBUM_TO_PUBLISHED_FAILURE:
            return { ...state, error: action.error };
        case CHANGE_TRACK_TO_PUBLISHED_SUCCESS:
            return { ...state, error: null };
        case CHANGE_TRACK_TO_PUBLISHED_FAILURE:
            return { ...state, error: action.error };
        case DELETE_ARTIST_SUCCESS:
            return { ...state, error: null };
        case DELETE_ARTIST_FAILURE:
            return { ...state, error: action.error };
        case DELETE_ALBUM_SUCCESS:
            return { ...state, error: null };
        case DELETE_ALBUM_FAILURE:
            return { ...state, error: action.error };
        case DELETE_TRACK_SUCCESS:
            return { ...state, error: null };
        case DELETE_TRACK_FAILURE:
            return { ...state, error: action.error };
        default:
            return state;
    };
};

export default adminReducer;