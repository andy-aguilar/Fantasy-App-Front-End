import React, {useState} from 'react'

export default function ESPNLoginForm({handleLoginSubmit}) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLoginSubmit(formData)
        setFormData({
            email: "",
            password: ""
        })
        
    }

    return (
        <div>
            <h1>Please enter your ESPN credentials</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={formData.email} 
                    name="email" 
                    placeholder="email"
                    onChange={handleChange}
                />
                <input type="password" 
                    value={formData.password} 
                    name="password" 
                    placeholder="password"
                    onChange={handleChange}
                />
                <input type="submit"
                    value="Login to ESPN"
                />
                
            </form>
        </div>
    )
}
