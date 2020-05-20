import React, { useState, useRef, useReducer } from "react";
import ageReducer from "../reducers/AgeReducer";

export const ageContext = React.createContext();

const state = {
    age: 0,
    error: null
};

const AgeContextProvider = (props) => {
    const myRef = useRef();
    const [initialState, dispatch] = useReducer(ageReducer, state);
    const [inputAge, setInputAge] = useState();

    const ageFromInput = (event) => {
        if (event.key === 'Enter') {
            setInputAge(event.target.value);
            myRef.current.blur();
        }
    }
    const newAge = inputAge ? inputAge : initialState.age;

    return (
        <ageContext.Provider value={{ age: newAge, error:initialState.error, dispatch, _enteredAge: ageFromInput, _ref: myRef }}>
            {props.children}
        </ageContext.Provider>
    );
}

export default AgeContextProvider;