import React, {useState} from 'react'
import './home.css'
import Button from '@material-ui/core/Button';
import logo from '../../images/LS.png'
import logoSecondary from "../../images/LSSecondary.png"

export default function Home() {
    const [login, setLogin] = useState(true)
    return (
        <div className="Home">
            <header className={login ? "Home-header" : "Home-header signup"}>
                <nav className="header-nav">
                    <div className="logo-div">
                        <img className="header-logo" src={login ? logo : logoSecondary} alt="logo"/>
                        <h1 id={login ? "header-title" : "header-title signup"}>League Story</h1>
                    </div>
                    <Button className="login-btn" variant="contained" color={login ? "primary" : "secondary"} onClick={() => setLogin(!login)}>
                        {login ? "Sign Up" : "Login"}
                    </Button>
                
                </nav>
            </header>
            <div className="spacer"></div>
            <main>

            </main>
        </div>
    )
}
