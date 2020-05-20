import React from 'react';
import { ageContext } from './../context/AgeContext';

const SecondChild = () => {

    const clearinput = (event) => {
        event.target.value = '';
    }
    return (
        <ageContext.Consumer>{(contextType) => {
            return (
                <div>
                    {/* {console.log(contextType)} */}
                    <h1>With context-API</h1>
                    <h3 data-testid="error">
                        {contextType.error}
                    </h3>
                    <div data-testid="input">
                        Enter a required age
                <input data-testid="input-box" type='text' onKeyPress={contextType._enteredAge} ref={contextType._ref} onBlur={clearinput} />
                    </div>
                    <div>
                        <span data-testid="counter" className='text-area'>
                            {contextType.age}
                        </span>
                    </div>
                    <button
                        data-testid="button1"
                        className='button-hover'
                        onClick={contextType._increaseAge}
                    >
                        Increment
                </button>
                    <button
                        data-testid="button2"
                        className='button-hover'
                        onClick={contextType._decreaseAge}
                    >
                        Decrement
                </button>
                </div>)
        }}
        </ageContext.Consumer>
    );
};

export default SecondChild;