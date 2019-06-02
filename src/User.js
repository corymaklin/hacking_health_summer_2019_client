import React from 'react';
import _ from 'lodash';

const User = ({ match, users }) => {

    const user =  _.head((_.filter(users, user => user.id === match.params.userId)))

    return (
        <div>
            { _.get(user, 'fullName') }
            { _.get(user, 'steps') }
            { _.get(user, 'startTime') }
        </div>
    );
}

export default User;