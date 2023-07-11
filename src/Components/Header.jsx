// import React, { useEffect, useRef, useState } from "react";
// import "./Header.css";
// import { useSpeechRecognition } from "react-speech-recognition";

// const Header = (props) => {
//   const isLoggedIn = props.isLoggedIn;
//   const { resetTranscript } = useSpeechRecognition();
//   const recognitionRef = useRef(null);
//   const [isListening, setIsListening] = useState(false);

//   const handleLogout = () => {
//     props.onLogout();
//     window.location.href = "./DreamHome";
//   };

//   useEffect(() => {
//     const speak = (text) => {
//       const synth = window.speechSynthesis;
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.onend = () => {
//         if (!isListening) {
//           setIsListening(true);
//           startRecognition();
//         }
//       };
//       synth.speak(utterance);
//     };

//     const speakWelcomeMessage = () => {
//       speak("Welcome to AAVAS. You are on the main page. To navigate, say Aavas, About, or Login.");
//     };

//     const startRecognition = () => {
//       recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//       recognitionRef.current.onresult = handleRecognitionResult;
//       recognitionRef.current.start();
//       recognitionRef.current.onend = () => {
//         setIsListening(false);
//       };
//     };

//     const handleRecognitionResult = (event) => {
//       const spokenText = event.results[0][0].transcript.toLowerCase();
//       if (spokenText.includes("home")) {
//         props.onFormSwitch("Indexx");
//       } else if (spokenText.includes("about")) {
//         props.onFormSwitch("About");
//       } else if (spokenText.includes("login")) {
//         props.onFormSwitch("Login");
//       }
//     };

//     const handleClick = () => {
//       if (!isListening) {
//         speakWelcomeMessage();
//         resetTranscript();
//       }
//     };

//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, [isListening, resetTranscript, props.onFormSwitch]);

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '50px' }}>
//       <div className="container-fluid">
//         <button className="navbar-brand" onClick={() => props.onFormSwitch('DreamHouse')}>AAVAS</button>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         {isLoggedIn ? (
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <button className="nav-link active" aria-current="page" onClick={() => props.onFormSwitch('Indexx')}>
//                   HOME
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link active" aria-current="page" onClick={handleLogout}>
//                   LOGOUT
//                 </button>
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <div classNameclassName="collapse navbar-collapse" id="navbarSupportedContent">
//             ...
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

//------------------------------------------------------------------------------------------------------------------------------------


