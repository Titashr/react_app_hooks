// Link.react.js
import React, { useState, useRef, useContext } from 'react';
import '../styles/Button.scss';
import PropTypes from 'prop-types';
import { ageContext } from './../context/AgeContext';
import withAddedFunctionality from '../HOC/WithAddedFunc';

const Child = () => {

    const [error, setError] = useState(null);
    const myRef = useRef();
    const agecontext = useContext(ageContext);
    const [age, setAge] = useState(agecontext.age);

    const _decreaseAge = () => {
        if (age > 0) {
            setAge(age - 1);
            setError(null);
        } else {
            setError("Age can't be smaller than 0");
        }
    }

    const _increaseAge = () => {
        setAge(parseInt(age, 10) + 1);
        setError(null);
    }

    const _enteredAge = (event) => {
        if (event.key === 'Enter') {
            setAge(event.target.value);
            myRef.current.blur();
        }
    };

    const clearInput = (event) => {
        event.target.value = '';
    }

    return (
        <div>
            <h1>This is with internal state</h1>
            <h3 data-testid="error">
                {error}
            </h3>
            <div data-testid="input">
                Enter a required age
                <input type='text' onKeyPress={_enteredAge} ref={myRef} onBlur={clearInput}></input>
            </div>
            <div>
                <span data-testid="counter" className='text-area'>
                    {age}
                </span>
            </div>
            <button
                data-testid="button1"
                className='btn btn-dark'
                onClick={_increaseAge}
            >
                Increment
                </button>
            <button
                data-testid="button2"
                className='btn btn-dark'
                onClick={_decreaseAge}
            >
                Decrement
                </button>
        </div>
    )
}

Child.propTypes = {
    age: PropTypes.number
};
const UpdatedChildComponent = withAddedFunctionality(Child)
export default UpdatedChildComponent;
