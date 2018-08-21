import React, { Component } from 'react';
import './App.css';
import UserComponent from '../components/UserComponent';

class App extends Component {

  constructor() {
    super();
    this.state = {showUser: true, currentUser: 'sample'};
  }

  showUserComponent() {
    this.setState({showUser: true});
  };

  handleChange(event) {
    this.setState({currentUser: event.target.value});
  };


  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-12" style={{'marginTop': '64px'}}>
          <div className="col-sm-4">
            <UserComponent name="User 1"/>
          </div>
          <div className="col-sm-4">
            <UserComponent name="User 2"/>
          </div>
          <div className="col-sm-4">
            <UserComponent name="User 3"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
