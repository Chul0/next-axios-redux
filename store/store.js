import { applyMiddleware, createStore } from 'redux' 
//createStore, to create the store that will maintain the Redux state
//applyMiddleware, to be able to use middleware, in this case thunk.
import thunk from 'redux-thunk'
//Thunk, a middleware that allows us to make asynchronous actions in Redux
import { composeWithDevTools } from 'redux-devtools-extension'
//composeWithDevTools, code that connects your app to Redux DevTools.

import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;