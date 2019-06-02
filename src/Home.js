import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash';

class Home extends Component {    
    render () {
        const { users } = this.props;

        const u = _.map(users, user => <li key={user.id}><Link to={`user/${user.id}`}>{user.fullName} - {user.steps}</Link></li>)

        return (
            <div>
                <ul>
                    { u }
                </ul>
            </div>
        );
    }
}

export default Home;