import React, { useState } from 'react';
import UserPool from '../Authentication/UserPool';

export default () => {
    const [emailaddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

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