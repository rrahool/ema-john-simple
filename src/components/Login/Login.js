import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    // debugger;
    
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={auth.signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;