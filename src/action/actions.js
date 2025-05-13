import {
    INCREMENT, DECREMENT,
    FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
    CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR
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

export const createUsersRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUsersSuccess = (data) => {
    return {
        type: CREATE_USER_SUCCESS,
        dataUsers: data
    }
}

export const createUsersError = () => {
    return {
        type: CREATE_USER_ERROR
    }
}

export const createNewUserRedux = (email, password, username) => {
    return async (dispath, getState) => {
        dispath(createUsersRequest());
        try {
            const dataNewUser = { email, password, username };
            let res = await axios.post("http://localhost:8080/users/create", dataNewUser)
            if (res && res.data.errCode === 0) {
                dispath(createUsersSuccess());
                dispath(fetchAllUsers());
            }
        } catch (error) {
            console.log(error);
            dispath(createUsersError())

        }
    }
}