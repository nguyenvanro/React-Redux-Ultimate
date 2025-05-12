import { INCREMENT, DECREMENT } from './types';


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