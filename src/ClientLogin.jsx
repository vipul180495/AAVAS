
import React, { useState, useRef } from "react";
import Indexx from "./Indexx.jsx";

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

export const ClientLogin = (props) => {
    const [email, setEmail] = useState("");
    const [postCode, setPostCode] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [speechText, setSpeechText] = useState("");
    const emailInputRef = useRef(null);
    const postCodeInputRef = useRef(null);

    const pcChange = (e) => {
        e.preventDefault();
        setPostCode(e.target.value);
    };

    const emailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const startRecording = () => {
        setIsRecording(true);
        recognition.start();
    };

    const stopRecording = () => {
        setIsRecording(false);
        recognition.stop();
    };

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        setSpeechText(speechResult);
    
        if (emailInputRef.current && emailInputRef.current.value === "") {
            const emailSpeech = new SpeechSynthesisUtterance("Please enter your email");
            window.speechSynthesis.speak(emailSpeech);
            emailSpeech.onend = () => {
                emailInputRef.current.focus();
                setEmail(speechResult);
            };
        } else if (postCodeInputRef.current && postCodeInputRef.current.value === "") {
            const postCodeSpeech = new SpeechSynthesisUtterance("Please enter your postcode");
            window.speechSynthesis.speak(postCodeSpeech);
            postCodeSpeech.onend = () => {
                postCodeInputRef.current.focus();
                setPostCode(speechResult);
            };
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !postCode) {
            setError("Please enter both email and postcode");
            return;
        }
    
        const response = await fetch(
            "http://localhost:2023/ClientLogin?" +
            new URLSearchParams({
                email: email,
                postCode: postCode,
            })
        );
        if (!response.ok) {
            setError("Email not found");
        } else {
            const data = await response.json();
            if (data.emailExists) {
                sessionStorage.setItem("Sdata", JSON.stringify(data));
                setLoggedIn(true);
                props.setIsLoggedIn(true); // update the isLoggedIn state in the parent component
            } else {
                setError("Email not found");
            }
        }
    };
    

    const handleEmailFocus = () => {
        const emailSpeech = new SpeechSynthesisUtterance("Please enter your email");
        window.speechSynthesis.speak(emailSpeech);
    };

    const handlePostcodeFocus = () => {
        const postCodeSpeech = new SpeechSynthesisUtterance(
            "Please enter your postcode"
        );
        window.speechSynthesis.speak(postCodeSpeech);
    };
  

    return (
        <div className="auth-form-container">
            {loggedIn ? (
                <Indexx onFormSwitch={props.onFormSwitch} />
            ) : (
                <>
                    <div className="video-container">
                        <video src="./video/video.mp4" autoPlay muted loop></video>
                    </div>
                    <h2 style={{ color: "black" }}>CLIENT LOGIN</h2>
                    {error && <div className="error-message">{error}</div>}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            ref={emailInputRef}
                            value={email}
                            name="email"
                            type="email"
                            placeholder="youremail@gmail.com"
                            id="email"
                            onFocus={handleEmailFocus}
                            onChange={emailChange}
                        />

                        <label htmlFor="postcode">Postcode</label>
                        <input
                            ref={postCodeInputRef}
                            value={postCode}
                            name="postcode"
                            type="text"
                            placeholder="Enter your postcode"
                            id="postcode"
                            onFocus={handlePostcodeFocus}
                            onChange={pcChange}
                        />

                        {!isRecording ? (
                            <button type="button" onClick={startRecording}>
                                Start Recording
                            </button>
                        ) : (
                            <button type="button" onClick={stopRecording}>
                                Stop Recording
                            </button>
                        )}

                        {isRecording && <div>Recording...</div>}
                        {speechText && (
                            <div>
                                Speech to text: {speechText}
                            </div>
                        )}

                        <button type="submit">Login</button>
                    </form>
                    <button className="link-btn" onClick={() => props.onFormSwitch('ClientRegister')}>Don't have an account? Register here</button>
                </>
            )}
        </div>
    )
}




