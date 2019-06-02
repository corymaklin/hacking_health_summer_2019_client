import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash';
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './vendor/animate/animate.css';
import './vendor/select2/select2.min.css';
import './vendor/perfect-scrollbar/perfect-scrollbar.css';
import './css/util.css';
import './css/main.css';

class Home extends Component {    
    render () {
        const { users } = this.props;

        const u = _.map(users, user => <li key={user.id}><Link to={`user/${user.id}`}>{user.fullName} - {user.steps}</Link></li>)

        const x = _.map(users, user => {
            return (
                <tr>
                    <td className="column1">{user.id}</td>
                    <td className="column2">{user.fullName}</td>
                    <td className="column3">{user.steps}</td>
                    <td className="column4">123</td>
                </tr>
            );
        })

        return (
            <div className="limiter">
                <div className="container-table100">
                    <h1>Leaderboard</h1>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <div className="wrap-table100">
                        <div className="table100">
                            <table>
                                <thead>
                                    <tr className="table100-head">
                                        <th className="column1">Ranking</th>
                                        <th className="column2">Name</th>
                                        <th className="column3">Daily Steps</th>
                                        <th className="column4">Weekly Steps</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {/* <tr>
                                            <td className="column1">1</td>
                                            <td className="column2">Andrew Smith</td>
                                            <td className="column3">54</td>
                                            <td className="column4">235</td>
                                        </tr> */}
                                        { x }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;