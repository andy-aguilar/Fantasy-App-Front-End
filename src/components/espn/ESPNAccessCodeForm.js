import React, {useState} from 'react'

export default function ESPNAccessCodeForm({handleAccessCodeSubmit}) {

    const [formData, setFormData] = useState({
        code: ""
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAccessCodeSubmit(formData)
        setFormData({
            code: ""
        })
        
    }

    return (
        <div>
            <h1>You should have received an email from ESPN/Disney. Please enter the access code here:</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={formData.code} 
                    name="code" 
                    placeholder="code"
                    onChange={handleChange}
                />
                <input type="submit"
                    value="Submit Access Code"
                />
                
            </form>
        </div>
    )
}
