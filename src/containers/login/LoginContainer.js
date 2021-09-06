import React from 'react';
import LoginForm from '../../components/login/LoginForm'
import SignupForm from '../../components/login/SignupForm'
import "./login.css"


// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '25ch',
//         height: 'cover',
//         },
//     },
//     loginContainer: {
//         backgroundColor: 'rgba(0,0,0,.80)',
        
//         height: '30em',
//         position: 'relative',
//         width: '25em',
//         padding: '0',
        
//     },
// }));


const LoginContainer = ({login}) => {

    const handle = () => {
        console.log("handled")
    }

    return (
        <div className="login-container">
            {login ? <LoginForm handleLogin={handle} /> : <SignupForm handleLogin={handle}/> }
        </div>
    );
}

export default LoginContainer
