// import react, { useState } from "react";


// export const AdminLogin = (props) => {
//     const [email, setEmail] = useState('');
//     const [PostCode, setPostCode] = useState('');

//     const pcChange = e => {
//         e.preventDefault();
//         setPostCode(e.target.value)
//     }

//     const emailChange = e => {
//         e.preventDefault();
//         setEmail(e.target.value)
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch ('http://localhost:2023/AdminLogin?');
//         if (!response.ok) {
//             console.warn(`An error has occured:`);
//         }else{
//             console.log(JSON.stringify(await response.json()))
//         }
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//                 <h2 style={{color:"black"}}>ADMIN LOGIN</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={emailChange}/>
//                 <label htmlFor="PostCode">PostCode</label>
//                 <input value={PostCode} type="password" placeholder="**********" id="PostCode" name="PostCode" onChange={pcChange} />
//                 <button type="submit">Log In</button>
//             </form>
            
//         </div>
//     )
// }


// import React, { useState } from "react";

// export const AdminLogin = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const usernameChange = e => {
//         e.preventDefault();
//         setUsername(e.target.value)
//     }

//     const passwordChange = e => {
//         e.preventDefault();
//         setPassword(e.target.value)
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch ('http://localhost:2023/AdminLogin?username=' + username + '&password=' + password);
//         if (!response.ok) {
//             console.warn(`An error has occured:`);
//         } else {
//             console.log(JSON.stringify(await response.json()))
//         }
//     }

//     return (
//         <div className="auth-form-container">
//             <h2 style={{color:"black"}}>ADMIN LOGIN</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username</label>
//                 <input value={username} type="text" placeholder="Username" id="username" name="username" onChange={usernameChange}/>
//                 <label htmlFor="password">Password</label>
//                 <input value={password} type="password" placeholder="Password" id="password" name="password" onChange={passwordChange} />
//                 <button type="submit">Log In</button>
//             </form>
//         </div>
//     )
// }

// import React, { useState } from "react";

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



