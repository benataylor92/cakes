import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../Authentication/Accounts';
import '../Authentication/statusForm.css';

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
        <div className="Status_Form">
            {status ? (
                <div>
                    You are logge in.
                    <button onClick={logout}>Logout</button>
                </div>
            ) : 'Please login below'}
        </div>
    );
};