import React, { Fragment } from 'react';
import Child from './Child';
import SecondChild from './SecondChild';

const Parent = (props) => {
    return (
        <Fragment>
            {console.log(props.age)};
            <div className='text-center'>
                <Child />
                <SecondChild />
            </div>
        </Fragment>
    );
}
export default Parent;
