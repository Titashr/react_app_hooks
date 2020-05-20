import React from 'react';
import Parent from './Parent';
import User from './User';
import AgeContextProvider from "../context/AgeContext";


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
          <Parent
            age={this.state.age}
          />
          {/* <User/> */}
        </AgeContextProvider>
      </div>
    );
  }
}

