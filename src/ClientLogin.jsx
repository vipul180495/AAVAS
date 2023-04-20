// import React, { useState } from "react";
// import Index from "./Index.jsx";

// export const ClientLogin = (props) => {
//     const [email, setEmail] = useState('');
//     const [PostCode, setPostCode] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [error, setError] = useState('');

//     const pcChange = e => {
//         e.preventDefault();
//         setPostCode(e.target.value);
//     }

//     const emailChange = e => {
//         e.preventDefault();
//         setEmail(e.target.value);
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // if (!validateEmail(email)) {
//         //     console.warn("Invalid email address");
//         //     return;
//         // }
//         const response = await fetch('http://localhost:2023/ClientLogin?' + new URLSearchParams({
//             email: email,
//             PostCode: PostCode
//         }));
//         if (!response.ok) {
//             //console.warn("Email Not Found");
//             setError("Email Not Found");
//         } else {
//             const data = await response.json();           
//             if (data.emailExists) {
//                 sessionStorage.setItem("Sdata", JSON.stringify(data));
//                 setLoggedIn(true);
//                 props.setLoggedIn(true);
//             } else {
//                 setError("Email not found");
//             }
//         }
//         // {
//         //     sessionStorage.setItem("Sdata", JSON.stringify(await response.json()));
//         //     setLoggedIn(true);
//         // }
//     };

//     return (
//         <div className="auth-form-container">
//             {loggedIn ? (
//                 <Index onFormSwitch={props.onFormSwitch} />
//             ) : (
//                 <>
//                     <h2 style={{ color: "black" }}>CLIENT LOGIN</h2>
//                     {error && <div className="error-message">{error}</div>} {/* Display error message */}
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         <label htmlFor="email">Email</label>
//                         <input value={email} name='email' type="email" placeholder="youremail@gmail.com" id="email" onChange={emailChange} />
//                         <label htmlFor="PostCode">PostCode</label>
//                         <input value={PostCode} name='PostCode' id="PostCode" placeholder="PostCode" onChange={pcChange} />
//                         <button type="submit">Log In</button>
//                     </form>
//                     <button className="link-btn" onClick={() => props.onFormSwitch('ClientRegister')}>Don't have an account? Register here</button>
//                 </>
//             )}
//         </div>
//     )
// };


// import React, { useState } from "react";
// import Indexx from "./Indexx.jsx";

// export const ClientLogin = (props) => {
//     const [email, setEmail] = useState('');
//     const [PostCode, setPostCode] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [error, setError] = useState('');
//     const [isListening, setIsListening] = useState(false);
//     const recognition = new window.webkitSpeechRecognition();

//     const pcChange = e => {
//         e.preventDefault();
//         setPostCode(e.target.value);
//     }

//     const emailChange = e => {
//         e.preventDefault();
//         setEmail(e.target.value);
//     }

//     const handleListen = () => {
//         setIsListening(true);
//         recognition.start();
//     }

//     const handleStopListening = () => {
//         setIsListening(false);
//         recognition.stop();
//     }

//     recognition.onresult = e => {
//         setEmail(e.results[0][0].transcript);
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // if (!validateEmail(email)) {
//         //     console.warn("Invalid email address");
//         //     return;
//         // }
//         const response = await fetch('http://localhost:2023/ClientLogin?' + new URLSearchParams({
//             email: email,
//             PostCode: PostCode
//         }));
//         if (!response.ok) {
//             //console.warn("Email Not Found");
//             setError("Email Not Found");
//         } else {
//             const data = await response.json();           
//             if (data.emailExists) {
//                 sessionStorage.setItem("Sdata", JSON.stringify(data));
//                 setLoggedIn(true);
//                 props.setLoggedIn(true);
//             } else {
//                 setError("Email not found");
//             }
//         }
//         // {
//         //     sessionStorage.setItem("Sdata", JSON.stringify(await response.json()));
//         //     setLoggedIn(true);
//         // }
//     };

//     return (
//         <div className="auth-form-container">
//             {loggedIn ? (
//                 <Indexx onFormSwitch={props.onFormSwitch} />
//             ) : (
//                 <>
//                     <h2 style={{ color: "black" }}>CLIENT LOGIN</h2>
//                     {error && <div className="error-message">{error}</div>} {/* Display error message */}
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         <label htmlFor="email">Email</label>
//                         <input value={email} name='email' type="email" placeholder="youremail@gmail.com" id="email" onChange={emailChange} />
//                         <button type="button" onClick={isListening ? handleStopListening : handleListen}>{isListening ? 'Stop' : 'Start'} Listening</button>
//                         <label htmlFor="PostCode">PostCode</label>
//                         <input value={PostCode} name='PostCode' id="PostCode" placeholder="PostCode" onChange={pcChange} />
//                         <button type="button" onClick={isListening ? handleStopListening : handleListen}>{isListening ? 'Stop' : 'Start'} Listening</button>
//                         <button type="submit">Log In</button>
//                     </form>
//                     <button className="link-btn" onClick={() => props.onFormSwitch('ClientRegister')}>Don't have an account? Register here</button>
//                 </>
//             )}
//         </div>
//     )
// };
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import Indexx from "./Indexx.jsx";
// import React, { useState, useRef } from "react";

// export const ClientLogin = (props) => {
//     const [email, setEmail] = useState('');
//     const [PostCode, setPostCode] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [error, setError] = useState('');
//     const [isListeningEmail, setIsListeningEmail] = useState(false);
//     const [isListeningPostCode, setIsListeningPostCode] = useState(false);
//     const recognitionEmail = new window.webkitSpeechRecognition();
//     const recognitionPostCode = new window.webkitSpeechRecognition();
//     const emailInputRef = useRef(null);
//     const postCodeInputRef = useRef(null);

//     const pcChange = e => {
//         e.preventDefault();
//         setPostCode(e.target.value);
//     }

//     const emailChange = e => {
//         e.preventDefault();
//         setEmail(e.target.value);
//     }

//     const handleListenEmail = () => {
//         setIsListeningEmail(true);
//         recognitionEmail.start();
//     }

//     const handleStopListeningEmail = () => {
//         setIsListeningEmail(false);
//         recognitionEmail.stop();
//     }

//     const handleListenPostCode = () => {
//         setIsListeningPostCode(true);
//         recognitionPostCode.start();
//     }

//     const handleStopListeningPostCode = () => {
//         setIsListeningPostCode(false);
//         recognitionPostCode.stop();
//     }
   
//     recognitionEmail.onresult = (event) => {
//         const speechResult = event.results[0][0].transcript;
//         setEmail(speechResult);
//         if (emailInputRef.current && emailInputRef.current.value === "") {
//             const emailSpeech = new SpeechSynthesisUtterance("Please enter your email");
//             window.speechSynthesis.speak(emailSpeech);
//             emailSpeech.onend = () => {
//                 emailInputRef.current.focus();
//             };
//         }
//     };
    
//     recognitionPostCode.onresult = (event) => {
//         const speechResult = event.results[0][0].transcript;
//         setPostCode(speechResult);
//         if (postCodeInputRef.current && postCodeInputRef.current.value === "") {
//             const postCodeSpeech = new SpeechSynthesisUtterance("Please enter your postcode");
//             window.speechSynthesis.speak(postCodeSpeech);
//             postCodeSpeech.onend = () => {
//                 postCodeInputRef.current.focus();
//             };
//         }
//     };
  
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost:2023/ClientLogin?' + new URLSearchParams({
//             email: email,
//             PostCode: PostCode
//         }));
//         if (!response.ok) {
//             setError("Email Not Found");
//         } else {
//             const data = await response.json();           
//             if (data.emailExists && email === data.email && PostCode === data.PostCode) {
//                 sessionStorage.setItem("Sdata", JSON.stringify(data));
//                 setLoggedIn(true);
//                 props.setLoggedIn(true);
//             } else {
//                 setError("Invalid Email or PostCode");
//             }
//         }
//     };

//     return (
//         <div className="auth-form-container">
//             {loggedIn ? (
//                 <Indexx onFormSwitch={props.onFormSwitch} />
//             ) : (
//                 <>
//                     <h2 style={{ color: "black" }}>CLIENT LOGIN</h2>
//                     {error && <div className="error-message">{error}</div>}
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         <label htmlFor="email">Email</label>
//                         <input 
//                             ref={emailInputRef} 
//                             value={email} 
//                             name='email' 
//                             type="email" 
//                             placeholder="youremail@gmail.com" 
//                             id="email" 
//                             onChange={emailChange} 
//                         />
//                         <button type="button" onClick={isListeningEmail ? handleStopListeningEmail : handleListenEmail}>{isListeningEmail ? 'Stop' : 'Start'} Listening</button>
//                         <label htmlFor="postCode">PostCode</label>
//                         <input 
//                             ref={postCodeInputRef} 
//                             value={PostCode} 
//                             name='postCode' 
//                             id="postCode" 
//                             placeholder="PostCode" 
//                             onChange={pcChange} 
//                         />
//                         <button type="button" onClick={isListeningPostCode ? handleStopListeningPostCode : handleListenPostCode}>{isListeningPostCode ? 'Stop' : 'Start'} Listening</button>
//                         <button type="submit">Log In</button>
//                     </form>
//                     <button className="link-btn" onClick={() => props.onFormSwitch('ClientRegister')}>Don't have an account? Register here</button>
//                 </>
//             )}
//         </div>
//     )
// };

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import Indexx from "./Indexx.jsx";

// export const ClientLogin = (props) => {
//   const [email, setEmail] = useState("");
//   const [postCode, setPostCode] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [error, setError] = useState("");
//   const [isListeningEmail, setIsListeningEmail] = useState(false);
//   const [isListeningPostCode, setIsListeningPostCode] = useState(false);
//   const recognition = new window.webkitSpeechRecognition();

//   const handleListenEmail = () => {
//     setIsListeningEmail(true);
//     recognition.start();
//   };

//   const handleListenPostCode = () => {
//     setIsListeningPostCode(true);
//     recognition.start();
//   };

//   const handleStopListening = () => {
//     setIsListeningEmail(false);
//     setIsListeningPostCode(false);
//     recognition.stop();
//   };

//   recognition.onresult = (e) => {
//     const last = e.results.length - 1;
//     const { transcript } = e.results[last][0];
//     if (isListeningEmail) {
//       setEmail(transcript);
//     }
//     if (isListeningPostCode) {
//       setPostCode(transcript);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(
//       "http://localhost:2023/ClientLogin?" +
//         new URLSearchParams({
//           email: email,
//           postCode: postCode,
//         })
//     );
//     if (!response.ok) {
//       setError("Email not found");
//     } else {
//       const data = await response.json();
//       if (data.emailExists) {
//         sessionStorage.setItem("Sdata", JSON.stringify(data));
//         setLoggedIn(true);
//         props.setLoggedIn(true);
//       } else {
//         setError("Email not found");
//       }
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       {loggedIn ? (
//         <Indexx onFormSwitch={props.onFormSwitch} />
//       ) : (
//         <>
//           <h2 style={{ color: "black" }}>CLIENT LOGIN</h2>
//           {error && <div className="error-message">{error}</div>}
//           <form className="login-form" onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input
//               value={email}
//               name="email"
//               type="email"
//               placeholder="youremail@gmail.com"
//               id="email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={
//                 isListeningEmail ? handleStopListening : handleListenEmail
//               }
//             >
//               {isListeningEmail ? "Stop" : "Start"} Listening
//             </button>
//             <label htmlFor="postCode">PostCode</label>
//             <input
//               value={postCode}
//               name="postCode"
//               id="postCode"
//               placeholder="PostCode"
//               onChange={(e) => setPostCode(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={
//                 isListeningPostCode
//                   ? handleStopListening
//                   : handleListenPostCode
//               }
//             >
//               {isListeningPostCode ? "Stop" : "Start"} Listening
//             </button>
//             <button type="submit">Log In</button>
//           </form>
//           <button
//             className="link-btn"
//             onClick={() => props.onFormSwitch("ClientRegister")}
//           >
//             Don't have an account? Register here
//           </button>
//         </>
//       )}
//     </div>
//   );
//             }
//-----------------------------------------------------------------------------------------------------------------
// }
// import React, { useState, useEffect } from "react";
// import Indexx from "./Indexx.jsx";

// export const ClientLogin = (props) => {
//     const [email, setEmail] = useState('');
//     const [PostCode, setPostCode] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         if (window.SpeechRecognition) {
//             const recognition = new window.SpeechRecognition();
//             recognition.continuous = true;
//             recognition.lang = 'en-US';

//             recognition.onresult = (event) => {
//                 const last = event.results.length - 1;
//                 const spokenText = event.results[last][0].transcript;
//                 if (!email) {
//                     setEmail(spokenText);
//                 } else if (!PostCode) {
//                     setPostCode(spokenText);
//                     recognition.stop();
//                     handleSubmit(event);
//                 }
//             };

//             recognition.onerror = (event) => {
//                 console.error(event.error);
//                 setError("Speech recognition error occurred. Please try again.");
//             };
//         }
//     }, [email, PostCode]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost:2023/ClientLogin?' + new URLSearchParams({
//             email: email,
//             PostCode: PostCode
//         }));
//         if (!response.ok) {
//             setError("Email Not Found");
//         } else {
//             const data = await response.json();           
//             if (data.emailExists) {
//                 sessionStorage.setItem("Sdata", JSON.stringify(data));
//                 setLoggedIn(true);
//                 props.setLoggedIn(true);
//             } else {
//                 setError("Email not found");
//             }
//         }
//     };

//     return (
//         <div className="auth-form-container">
//             {loggedIn ? (
//                 <Indexx onFormSwitch={props.onFormSwitch} />
//             ) : (
//                 <>
//                     <h2 style={{ color: "black" }}>CLIENT LOGIN</h2>
//                     {error && <div className="error-message">{error}</div>}
//                     <form className="login-form" onSubmit={handleSubmit}>
//                         <label htmlFor="email">Email</label>
//                         <input value={email} name='email' type="email" placeholder="youremail@gmail.com" id="email" onChange={(e) => setEmail(e.target.value)} />
//                         <label htmlFor="PostCode">PostCode</label>
//                         <input value={PostCode} name='PostCode' id="PostCode" placeholder="PostCode" onChange={(e) => setPostCode(e.target.value)} />
//                         <button type="submit">Log In</button>
//                     </form>
//                     <button className="link-btn" onClick={() => props.onFormSwitch('ClientRegister')}>Don't have an account? Register here</button>
//                 </>
//             )}
//         </div>
//     )
// };
//------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import Indexx from "./Indexx.jsx";

// export const ClientLogin = (props) => {
//   const [email, setEmail] = useState("");
//   const [postcode, setPostcode] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [error, setError] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePostcodeChange = (e) => {
//     setPostcode(e.target.value);
//   };

//   const handleSpeechRecognition = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.start();
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       if (email === "") {
//         setEmail(transcript);
//       } else if (postcode === "") {
//         setPostcode(transcript);
//       }
//       recognition.stop();
//     };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(
//       "http://localhost:2023/ClientLogin?" +
//         new URLSearchParams({
//           email: email,
//           postcode: postcode,
//         })
//     );

//     if (!response.ok) {
//       setError("Email or postcode not found.");
//     } else {
//       const data = await response.json();
//       sessionStorage.setItem("Sdata", JSON.stringify(data));
//       setLoggedIn(true);
//       props.setLoggedIn(true);
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       {loggedIn ? (
//         <Indexx onFormSwitch={props.onFormSwitch} />
//       ) : (
//         <>
//           <h2 style={{ color: "black" }}>CLIENT LOGIN</h2>
//           {error && <div className="error-message">{error}</div>}
//           <form className="login-form" onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input
//               value={email}
//               name="email"
//               type="email"
//               placeholder="youremail@gmail.com"
//               id="email"
//               onChange={handleEmailChange}
//               onFocus={handleSpeechRecognition}
//             />
//             <label htmlFor="postcode">Postcode</label>
//             <input
//               value={postcode}
//               name="postcode"
//               id="postcode"
//               placeholder="Postcode"
//               onChange={handlePostcodeChange}
//               onFocus={handleSpeechRecognition}
//             />
//             <button type="submit">Log In</button>
//           </form>
//           <button
//             className="link-btn"
//             onClick={() => props.onFormSwitch("ClientRegister")}
//           >
//             Don't have an account? Register here
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

//------------------------------------------------------------------------------------------------------------------

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

    // recognition.onresult = (event) => {
    //     const speechResult = event.results[0][0].transcript;
    //     setSpeechText(speechResult);
    //     if (emailInputRef.current && emailInputRef.current === document.activeElement) {
    //         setEmail(speechResult);
    //     } else if (postCodeInputRef.current && postCodeInputRef.current === document.activeElement) {
    //         setPostCode(speechResult);
    //     }
    // };
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
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!email || !postCode) {
    //         setError("Please enter both email and postcode");
    //         return;
    //     }

    //     const response = await fetch(
    //         "http://localhost:2023/ClientLogin?" +
    //         new URLSearchParams({
    //             email: email,
    //             postCode: postCode,
    //         })
    //     );
    //     if (!response.ok) {
    //         setError("Email not found");
    //     } else {
    //         const data = await response.json();
    //         if (data.emailExists) {
    //             sessionStorage.setItem("Sdata", JSON.stringify(data));
    //             setLoggedIn(true);
    //             props.setIsLoggedIn(true);
    //         } else {
    //             setError("Email not found");
    //         }
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!email || !postCode) {
    //         setError("Please enter both email and postcode");
    //         return;
    //     }
    
    //     const response = await fetch(
    //         "http://localhost:2023/ClientLogin?" +
    //         new URLSearchParams({
    //             email: email,
    //             postCode: postCode,
    //         })
    //     );
    //     if (!response.ok) {
    //         setError("Email not found");
    //     } else {
    //         const data = await response.json();
    //         if (data.emailExists) {
    //             sessionStorage.setItem("Sdata", JSON.stringify(data));
    //             setLoggedIn(true);
    //             props.setIsLoggedIn(true);
    //         } else {
    //             setError("Email not found");
    //         }
    //     }
    
    //     // check if speech recognition has been used for email and postcode
    //     if (speechText !== "") {
    //         // check if email and postcode are valid
    //         const response2 = await fetch(
    //             "http://localhost:2023/ClientLogin?" +
    //             new URLSearchParams({
    //                 email: speechText,
    //                 postCode: postCode,
    //             })
    //         );
    //         if (response2.ok) {
    //             const data2 = await response2.json();
    //             if (data2.emailExists) {
    //                 sessionStorage.setItem("Sdata", JSON.stringify(data2));
    //                 setLoggedIn(true);
    //                 props.setIsLoggedIn(true);
    //             }
    //         }
    //     }
    // };
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
//-------------------------------------------------------------------------------------------------------------------------------------------------------------



