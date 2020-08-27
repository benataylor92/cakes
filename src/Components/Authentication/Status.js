import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../Authentication/Accounts';

export default () => {
    const [status, setStatus ] = useState(false);

    const { getSession, logout } = useContext(AccountContext);

    useEffect(() => {
        getSession().then(session => {
            console.log('session', session);
            setStatus(true);
        })
    }, []);

    return (
        <div>
            {status ? (
                <div>
                    You are logge in.
                    <button onClick={logout}>Logout</button>
                </div>
            ) : 'Please login below'}
        </div>
    );
};