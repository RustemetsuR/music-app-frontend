import { createStore, applyMiddleware ,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import musicReducers from './reducers/musicReducer';
import userReducer from './reducers/userReducer';
import {loadFromLocalStorage, saveToLocalStorage} from './localStorage';

const rootReducer = combineReducers({
    music: musicReducers,
    user: userReducer,
  });
  
  const persistedState = loadFromLocalStorage();
  
  
  const store = createStore(rootReducer,persistedState, applyMiddleware(thunkMiddleware));
  
  store.subscribe(() =>{
    saveToLocalStorage({
      user: {
        user: store.getState().user.user
      }
    });
  })

  export default store;