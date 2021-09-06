import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignupForm = ({handleLogin}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }

    return(
        <>
            <h1 className="header">Sign Up</h1>
            <form autoComplete="off" onSubmit={handleSubmit}>
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
                <TextField id="standard-password-input"
                    label="Password Confirmation"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    className="text-field"
                />
                
                
                <br/>
                <Button type="submit" size="large" variant="contained" color="secondary">
                    Sign Up
                </Button>
            </form>
        </>
    )
}



export default SignupForm