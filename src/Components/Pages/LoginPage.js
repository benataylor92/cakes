import React, { useState } from 'react';
import '../Pages/loginPage.css';

function LoginPage() {
    const [emailaddress, updateEmailAddress ] = useState();
    const [password, updatePassword ] = useState();

    return (
        <div className="Login-component">   
            <div className="Login1">Login</div>
            <form className="Login-form">
                <div className="Form-group">
                    <label htmlFor="Email-name">Email Adress</label>
                    <input type="text" className="Form-control" name="emailAdress" value={emailaddress} />
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="text" className="Form-control" name="password" value={password} />
                </div>
                <div>
                <button className="Form-button">Login</button>
                <a className="Register-button" href="/Signup">Sign Up</a>
                </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;