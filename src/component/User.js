import React, { useState, useContext, useEffect } from 'react';
import * as actions from '../actions/Actions';
import { userContext } from './../context/UserContext';

const User = () => {
    const context = useContext(userContext);
    const [person, setPerson] = useState(context.person);

    useEffect(() => {
        console.log('Inside use effect', context);
        context.getPerson();
    });

    return (
        <div className='container' data-testid='userDiv'>
            <h1 data-testid="userName" className='text-center'>
                {person.name.first} {person.name.last}
            </h1>
            <h2 data-testid="gender" className='text-center'>
                {person.gender}
            </h2>
            <h2 data-testid="email" className='text-center'>
                {person.email}
            </h2>
            <h2 data-testid="phone" className='text-center'>
                {person.phone}
            </h2>
            <div data-testid="image" className='text-center'>
                <img src={person.picture.large} className='img-rounded' alt={"LOADING"} />
            </div>
        </div>
    );
}

export default User;

// const mapStateToProps = (state) => {
//     return {
//         person: state.UserReducer.person
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUser: () => dispatch(actions.get_user())
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(User);
