import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from "redux-thunk";
import musicReducers from './reducers/musicReducer';
import userReducer from './reducers/userReducer';
import adminReducer from './reducers/adminReducer';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  music: musicReducers,
  user: userReducer,
  admin: adminReducer,
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