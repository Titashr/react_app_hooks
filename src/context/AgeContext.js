import React from "react";

export const ageContext = React.createContext();

export default class AgeContextProvider extends React.Component {

    state = {
        age: 0,
        error: null
    };

    myRef = React.createRef();

    decrement = () => {
        if (this.state.age > 0) {
            this.setState({ age: this.state.age - 1 });
        }
        else {
            this.setState({
                error: "Age can't be smaller than 0"
            })
        }
    }

    increment = () => {
        this.setState({
            age: parseInt(this.state.age, 10) + 1,
            error: null
        });
    }

    inputAge = (event) => {
        if (event.key === 'Enter') {
            this.setState({ age: event.target.value });
            this.myRef.current.blur();
        }
    }

    render() {
        return (
            <ageContext.Provider value={{ ...this.state, _increaseAge: this.increment, _decreaseAge: this.decrement, _enteredAge: this.inputAge, _ref: this.myRef }}>
                {this.props.children}
            </ageContext.Provider>
        );
    }

}