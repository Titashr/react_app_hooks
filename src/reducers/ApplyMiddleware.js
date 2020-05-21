import * as actions from '../actions/Actions';
import { userActionTypes } from '../actions/ActionTypes';
import axios from "axios";
import match from 'conditional-expression';

export const applyMiddleware = dispatch => action => {
    dispatch(action) ||
        match(action.type)
            .equals(userActionTypes.getUser).then(() =>
                axios.get(`https://randomuser.me/api/`)
                    .then(res => {
                        const person = res.data.results[0];
                        setTimeout(() => { dispatch(actions.get_user_details(person)) }, 3000);
                    }))
            .else(null)

}
