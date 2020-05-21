import { userActionTypes } from '../actions/ActionTypes';

const userReducer = (state, action) => {
    let newState;
    const { type, payload } = action;
    switch (type) {
        case userActionTypes.getUserDetails:
            newState = { ...state, person: payload};
            break;
        default:
            newState = { ...state };
            break;
    }
    return newState;
};

export default userReducer;