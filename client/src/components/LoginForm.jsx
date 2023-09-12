import  { useState } from 'react';
import '../index.css'
export default function LoginForm() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => { 
        setUser({
            ...user,
            [e.target.id]: e.target.value
        }) 
    }
    return (
        <div className="login-form">
            <div className="text-lg">Login</div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}