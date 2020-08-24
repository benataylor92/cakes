import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

export default () => {
    const [emailaddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const poolData = {
        UserPoolId: 'eu-west-2_eo0FY3NOV',
        ClientId: '4lv29c83bl00svq4r9e4pf2k81'
    };

    const UserPool = new CognitoUserPool(poolData);

    const onSubmit = event => {
        event.preventDefault();

        UserPool.signUp(emailaddress, password, [], null, (err, data) => {
            if (err) console.log(err);
            console.log(data);
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={emailaddress}
                    onChange={event => setEmailAddress(event.target.value)}
                />
                <input 
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
};