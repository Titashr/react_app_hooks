import React from "react";

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

    const getUser = () => {
        return (
            <div>{state}</div>);
    }

    return (
        <userContext.Provider value={{ person:state.person, getPerson: getUser }}>
            {props.children}
        </userContext.Provider>
    );

}
export default UserContextProvider;