import { actionTypes, userActionTypes } from './ActionTypes';

export function increment_age(val) {
    return {
        type: actionTypes.increase_age,
        payload: val
    };
};

export function decrement_age(val) {
    return {
        type: actionTypes.decrease_age,
        payload: val
    };
};

export function invalid() {
    return { type: actionTypes.invalid_age };
};

export function get_user_details(val) {
    return {
        type: userActionTypes.getUserDetails,
        payload: val
    };
};

export const userDetails = () => {
    return {
        type: userActionTypes.getUser
    };
};
