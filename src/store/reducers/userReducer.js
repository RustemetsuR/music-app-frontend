const { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, ADD_TRACK_HISTORY_SUCCESS, ADD_TRACK_HISTORY_FAILURE, GET_TRACK_HISTORY_SUCCESS, GET_TRACK_HISTORY_FAILURE, LOGOUT_USER } = require("../actionTypes");

const initialState = {
    user: [],
    trackHistory: null,
    error: null,
};

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state, user: action.value, error: null};
        case REGISTER_FAILURE:
            return {...state, error: action.error};
        case LOGIN_SUCCESS:
            return {...state, user: action.value, error: null};
        case LOGIN_FAILURE:
            return {...state, error: action.error};
        case ADD_TRACK_HISTORY_SUCCESS:
            return {...state, error: null};
        case ADD_TRACK_HISTORY_FAILURE:
            return {...state, error: action.error};
        case GET_TRACK_HISTORY_SUCCESS:
            return {...state, trackHistory: action.value, error: null};
        case GET_TRACK_HISTORY_FAILURE:
            return {...state, error: action.error};
        case LOGOUT_USER: 
            return {...state, user: []};
        default:
            return state;
    };
};

export default userReducer;