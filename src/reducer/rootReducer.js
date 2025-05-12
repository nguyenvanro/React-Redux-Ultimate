import { combineReducers } from 'redux';
import counterReducer from '../reducer/counterReducer';
import UserReducer from './userReducer';

const rootReducer = combineReducers({

    counter: counterReducer,
    user: UserReducer,

});

export default rootReducer;