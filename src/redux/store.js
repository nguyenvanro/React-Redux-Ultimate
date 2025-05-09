import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';
// includes: reducers, middleware...
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(

    rootReducer,

    composeWithDevTools(),

);


export default store;