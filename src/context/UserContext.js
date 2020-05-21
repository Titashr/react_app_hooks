import React, { useReducer } from "react";
import userReducer from './../reducers/UserReducer';
import {applyMiddleware} from '../reducers/ApplyMiddleware';


export const userContext = React.createContext();

const UserContextProvider = (props) => {

    const state = {
        person: {
            name: {
                first: null, last: null
            },
            gender: null,
            email: null,
            phone: null,
            picture: {
                large: null
            }
        }
    };

    const [initialState, dispatch] = useReducer(userReducer, state);
    const dispatchWithMiddleware = applyMiddleware(dispatch);

    return (
        <userContext.Provider value={{ person:initialState.person, dispatchWithMiddleware }}>
            {props.children}
        </userContext.Provider>
    );

}
export default UserContextProvider;