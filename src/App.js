import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home.js';
import User from './User.js'
import _ from 'lodash';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          users: []
      }
  }

  componentWillMount() {
    fetch('https://11f532f7.ngrok.io/users')
        .then(response => {
            response.json().then(json => {
              const users = _.map(json, user => {
                  return {
                    id: user._id,
                    fullName: user.fullName,
                    steps: user.steps,
                    startTime: user.startTime
                  };
              })

              this.setState({
                  users: users
              })
            })
            .catch(err => {
                console.log(err)
            })
            })
        .catch(err => {
            console.log(err)
        })
    }

  render () {
    const { users } = this.state;

    return (
      <Router>
        <Route exact path="/" component={() => <Home users={users} />} />
        <Route path="/user/:userId" render={(props) => <User {...props} users={users} /> } />
      </Router>
    );
  }
}

export default App;
