import  { useState } from 'react';
import '../index.css'
export default function LoginForm() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        userType: ''
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
        <div className="signup-form">
            <div className="text-lg">Sign Up</div>
            <div className="form">
                <div className='form-group'>
                    <label htmlFor='user-type'>User Type</label>
                    <select id='userType' onChange={handleChange}>
                        <option value='admin'>Admin</option>
                        <option value='agency'>Agency</option>
                        <option value='customer'>Customer</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
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