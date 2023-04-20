import React from "react";
import BackgroundVideo from './BackgroundVideo';
const Login = (props) => {
    const handleLogin = (e) => {
        const selectedOption = e.target.value;
        props.onFormSwitch(selectedOption);
    };
  return (
    <div className="">
        <BackgroundVideo />
        <li className="nav-item dropdown">
            <ul>
                <select class="logindd" onChange={handleLogin}>
                    <option value="">Select</option>
                    <option value="ClientLogin">Client Login</option>
                    <option value="OwnerLogin">Owner Login</option>
                    <option value="AdminLogin">Admin Login</option>
                </select>
            </ul>
        </li>
    </div>
  );
};

export default Login;

{/*
<ul class="dropdown-menu show" data-bs-popper="static">
<select onChange={handleLogin}>
    <option value="">Login</option>
    <option value="ClientLogin">Client Login</option>
    <option value="OwnerLogin">Owner Login</option>
    <option value="AdminLogin">Admin Login</option>
</select>
</ul>*/}