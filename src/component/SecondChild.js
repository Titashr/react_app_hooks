import React from 'react';
import { ageContext } from './../context/AgeContext';
import { userContext } from '../context/UserContext';
import * as actions from "../actions/Actions";

const SecondChild = () => {

    const clearinput = (event) => {
        event.target.value = '';
    }
    return (
        <userContext.Consumer>{(usercontext) => (
            <ageContext.Consumer>{(agecontext) => {
                return (
                    <div>
                        {/* {console.log(usercontext)}; */}
                        <h1>With context-API</h1>
                        <h3 data-testid="error">
                            {agecontext.error}
                        </h3>
                        <div data-testid="input">
                            Enter a required age
                <input data-testid="input-box" type='text' onKeyPress={agecontext._enteredAge} ref={agecontext._ref} onBlur={clearinput} />
                        </div>
                        <div>
                            <span data-testid="counter" className='text-area'>
                                {agecontext.age}
                            </span>
                        </div>
                        <button
                            data-testid="button1"
                            className='btn btn-dark'
                            onClick={() => agecontext.dispatch(actions.increment_age(agecontext.age))}
                        >
                            Increment
                </button>
                        <button
                            data-testid="button2"
                            className='btn btn-dark'
                            onClick={agecontext.age > 0 ?
                                () => agecontext.dispatch(actions.decrement_age(agecontext.age)) :
                                () => agecontext.dispatch(actions.invalid())}
                        >
                            Decrement
                </button>
                    </div>)
            }}
            </ageContext.Consumer>)}
        </userContext.Consumer>
    );
};

export default SecondChild;