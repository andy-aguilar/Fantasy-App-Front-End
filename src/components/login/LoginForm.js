import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = ({handleLogin}) => {


    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }

    return(
        <>
            <h1 className="header"> Log In</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="filled-email"
                    label="Your Email"
                    autoComplete="current-email"
                    type="email"
                    variant="filled"
                    className="text-field"
                />
                <TextField id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    className="text-field"
                />
                <Button className="login-button" type="submit" size="large" variant="contained" color="primary">
                    LOGIN
                </Button>
            </form>
        </>
    )
}



export default LoginForm
