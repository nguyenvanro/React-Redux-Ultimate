import {
    INCREMENT,
    DECREMENT,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from './types';
import axios from 'axios';


export const increaseCounter = () => {

    return {

        type: INCREMENT,
        payload: { name: 'Nguyen Van', like: 'Buy milk' }

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};

// start doing finish
export const fetchAllUsers = () => {
    return async (dispath, getState) => {
        dispath(fetchUsersRequest());
        try {
            const res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : []
            dispath(fetchUsersSuccess(data))
        } catch (error) {
            console.log('error: ', error);

            dispath(fetchUsersError())

        }
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data
    }
}

export const fetchUsersError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}