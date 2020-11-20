import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from "redux-thunk";
import musicReducers from './reducers/musicReducer';
import userReducer from './reducers/userReducer';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';


export const history = createBrowserHistory();

const rootReducer = combineReducers({
  music: musicReducers,
  user: userReducer,
  router: connectRouter(history)
});

const middleWare = [
  thunkMiddleware,
  routerMiddleware(history),
];

const persistedState = loadFromLocalStorage();


const store = createStore(rootReducer, persistedState, applyMiddleware(...middleWare));

store.subscribe(() => {
  saveToLocalStorage({
    user: {
      user: store.getState().user.user
    }
  });
})

export default store;