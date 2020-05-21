import React, { Fragment } from 'react';
import Parent from './Parent';
import User from './User';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import { ageContext } from './../context/AgeContext';


export default class App extends React.Component {
  static contextType = ageContext;
  render() {
    return (
      <Fragment>
        <h1 className='text-center'>Welcome to React World</h1>
        <Router>
          <div className='container'>
            <div className='text-center'>
              <ul className='list-group'>
                <li className='list-group-item'><Link to="/Parent" exact >Link for age game</Link></li>
                <li className='list-group-item'><Link to="/user" exact >Link for randomUser</Link></li>
                <li className='list-group-item'><Link to="/" exact strict>Home</Link></li>
              </ul>
            </div>
            <Route path="/Parent" exact strict component={Parent} />
            <Route path="/user" exact strict component={User} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

