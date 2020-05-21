import React, { useContext, useEffect } from 'react';
import { userContext } from './../context/UserContext';
import * as actions from '../actions/Actions';

const User = () => {
    const context = useContext(userContext);

    useEffect(() => {
        if (context.dispatchWithMiddleware) {
            context.dispatchWithMiddleware(actions.userDetails());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1 className='text-center'>Use of middleWare without redux</h1>
            <div className='container' data-testid='userDiv'>
                <h2 data-testid="userName" className='text-center'>
                    {context.person.name.first} {context.person.name.last}
                </h2>
                <h2 data-testid="gender" className='text-center'>
                    {context.person.gender}
                </h2>
                <h2 data-testid="email" className='text-center'>
                    {context.person.email}
                </h2>
                <h2 data-testid="phone" className='text-center'>
                    {context.person.phone}
                </h2>
                <div data-testid="image" className='text-center'>
                    <img src={context.person.picture.large} className='img-rounded' alt="LOADING" />
                </div>
                {/* <div className='text-center'>
                <button data-testid="userButton" className = 'btn btn-primary'
                onClick={() => { context.dispatchWithMiddleware({ type: userActionTypes.getUser }) }}> Click To Get User </button>
            </div> */}
            </div>
        </div>
    );
}

export default User;
