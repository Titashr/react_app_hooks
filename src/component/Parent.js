import React from 'react';
import Child from './Child';
import SecondChild from './SecondChild';
import { ageContext } from './../context/AgeContext';

export default class Parent extends React.Component {
    
    static contextType = ageContext;
    render() {
        // console.log(this.context);
        return (
            <div className='text-center'>
                <Child/>
                <SecondChild/>
            </div>
        );
    }
}
