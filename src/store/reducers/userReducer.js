const { CHANGE_USERNAME_INPUT_VALUE, CHANGE_PASSWORD_INPUT_VALUE, REGISTER_SUCCESS, REGISTER_FAILURE, CHANGE_PASSWORD_LOGIN_INPUT_VALUE, CHANGE_USERNAME_LOGIN_INPUT_VALUE, LOGIN_SUCCESS, LOGIN_FAILURE, ADD_TRACK_HISTORY_SUCCESS, ADD_TRACK_HISTORY_FAILURE, GET_TRACK_HISTORY_SUCCESS, GET_TRACK_HISTORY_FAILURE } = require("../actionTypes");

const initialState = {
    user: null,
    userNameValue: '',
    passwordValue: '',
    userNameLoginValue: '',
    passwordLoginValue: '',
    trackHistory: null,
    error: null,
};

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_USERNAME_INPUT_VALUE:
            return {...state, userNameValue: action.value};
        case CHANGE_PASSWORD_INPUT_VALUE:
            return {...state, passwordValue: action.value};
        case CHANGE_PASSWORD_LOGIN_INPUT_VALUE:
            return {...state, passwordLoginValue: action.value};
        case CHANGE_USERNAME_LOGIN_INPUT_VALUE:
            return {...state, userNameLoginValue: action.value};
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
        default:
            return state;
    };
};

export default userReducer;