import React, { useState, useContext } from 'react';
import { AccountContext } from '../Authentication/Accounts';

export default () => {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const { getSession, authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();

        getSession().then(({ user, email }) => {
            authenticate(email, password).then(() => {
                user.changePassword(password, newPassword, (err, results) => {
                    if (err) console.error(err);
                    console.log(results);
                });
            });
            
        });
    };
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <input 
                    value={newPassword}
                    onChange={event => setNewPassword(event.target.value)}
                />

                <button type="submit">Change Password</button>
            </form>
        </div>
    );
};