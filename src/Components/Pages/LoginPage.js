import React, { useState, useContext } from 'react';
import { AccountContext } from '../Authentication/Accounts';
import '../Pages/loginPage.css';

export default () => {
    const [emailaddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();

        authenticate(emailaddress, password).then(data => {
            console.log('logged in!', data);
        })
        .catch(err => {
            console.log('Failed to login', err);
        })
    };

    return (
        <div className="Login_Form">
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