import React from 'react'

export default function ESPNLoginForm({handleLoginSubmit}) {
    return (
        <div>
            <h1>Please enter your ESPN credentials</h1>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" name="email" placeholder="email"></input>
                <input type="password" name="password" placeholder="password"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
