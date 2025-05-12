import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/rootReducer';
// includes: reducers, middleware...
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const store = createStore(

    rootReducer,

    composeWithDevTools(applyMiddleware(thunkMiddleware)),

);


export default store;