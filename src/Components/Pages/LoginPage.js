import React, { useState } from 'react';
import UserPool from '../Authentication/UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

export default () => {
    const [emailaddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: emailaddress,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: emailaddress,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onSuccess:', data);
            },

            onFailure: err => {
                console.error('onFailure:', err );
            },

            newPasswordRequired: data => {
                console.log('newPasswordRequired:', data );
            }
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
                <button type='submit'>Login</button>
            </form>
        </div>
    )
};