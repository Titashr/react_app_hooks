import React from 'react';
import Parent from './Parent';
import User from './User';
import AgeContextProvider from "../context/AgeContext";
import UserContextProvider from '../context/UserContext';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    };
  }
  render() {
    return (
      <div className='container'>
        <AgeContextProvider>
          <UserContextProvider>
            <Parent
              age={this.state.age}
            />
            <User/>
          </UserContextProvider>
        </AgeContextProvider>
      </div>
    );
  }
}

