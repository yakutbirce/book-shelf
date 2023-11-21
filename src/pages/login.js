// pages/login.js
import React from 'react';
import { LoginForm } from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export { LoginPage as default };
