import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../action/types';


const INITIAL_STATE = {

  ListUsers: [],
  isLoading: false,
  isError: false
};

const UserReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case FETCH_USER_REQUEST:
      console.log("FETCH_USER_REQUEST: ", action);

      return {

        ...state,
        isLoading: true,
        isError: false
      };

    case FETCH_USER_SUCCESS:
      console.log("FETCH_USER_SUCCESS: ", action);
      return {
        ...state, 
        ListUsers: action.dataUsers,
        isLoading: false,
        isError: false

      };

    case FETCH_USER_ERROR:
      console.log("FETCH_USER_ERROR", action);
      return {
        ...state,
        isLoading: false,
        isError: true

      };


    default: return state;

  }

};

export default UserReducer;