import react, { useState } from "react";


export const OwnerLogin = (props) => {
    const [email, setEmail] = useState('');
    const [ownerNo, setownerNo] = useState('');
    const [PostCode, setPostCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
                <h2 style={{color:"black"}}>OWNER LOGIN</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="ownerNo">Owner Number</label>
                <input value={ownerNo} id="ownerNo" placeholder="Owner Number" />
                <label htmlFor="PostCode">PostCode</label>
                <input value={PostCode} type="PostCode" placeholder="**********" id="PostCode" name="PostCode" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('OwnerRegister')}>Register Property here</button>
        </div>
    )
}
