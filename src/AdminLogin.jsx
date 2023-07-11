import React, { useState } from "react";
import { AdminDashboard } from "./AdminDashboard"; 

export const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:2023/AdminLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (response.ok) {
            setIsLoggedIn(true);
        } else {
            console.warn(`An error has occurred:`);
        }
    }

    if (isLoggedIn) {
        return <AdminDashboard />;
    }

    return (
        <div className="auth-form-container">
            <h2 style={{ color: "black" }}>ADMIN LOGIN</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} type="text" placeholder="Username" id="username" name="username" onChange={handleUsernameChange} />
                <label htmlFor="password">Password</label>
                <input value={password} type="password" placeholder="Password" id="password" name="password" onChange={handlePasswordChange} />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}



