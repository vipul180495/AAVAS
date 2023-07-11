

//-------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useEffect, useRef, useState } from "react";
// import { useSpeechRecognition } from "react-speech-recognition";
// import BackgroundVideo from "./BackgroundVideo";

// const Login = ({ onFormSwitch }) => {
//   const [isListening, setIsListening] = useState(false);
//   const { resetTranscript } = useSpeechRecognition();
//   const recognitionRef = useRef(null);

//   const handleLogin = (e) => {
//     const selectedOption = e.target.value;
//     onFormSwitch(selectedOption);
//   };

//   const speak = (text) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
//   };

//   const speakLoginOptions = () => {
//     speak("Please say the type of login: client login, admin login, or owner login.");
//   };

//   useEffect(() => {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current = recognition;

//     recognition.onresult = (event) => {
//       const spokenText = event.results[0][0].transcript.toLowerCase();
//       if (spokenText.includes("client login")) {
//         recognition.stop();
//         setIsListening(false);
//         onFormSwitch("ClientLogin");
//       } else if (spokenText.includes("admin login")) {
//         recognition.stop();
//         setIsListening(false);
//         onFormSwitch("AdminLogin");
//       } else if (spokenText.includes("owner login")) {
//         recognition.stop();
//         setIsListening(false);
//         onFormSwitch("OwnerLogin");
//       }
//     };

//     recognition.onend = () => {
//       if (!isListening) {
//         resetTranscript();
//       }
//     };

//     if (!isListening) {
//       setIsListening(true);
//       speakLoginOptions();
//       resetTranscript();
//       recognition.start();
//     }

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, [isListening, onFormSwitch, resetTranscript]);

//   return (
//     <div className="">
//       <BackgroundVideo />
//       <li className="nav-item dropdown">
//         <ul>
//           <select className="logindd" onChange={handleLogin}>
//             <option value="">Select</option>
//             <option value="ClientLogin">Client Login</option>
//             <option value="OwnerLogin">Owner Login</option>
//             <option value="AdminLogin">Admin Login</option>
//           </select>
//         </ul>
//       </li>
//     </div>
//   );
// };

// export default Login;
//-----------------------------------------------------------------------------------------------------------------------------------------
import React, { useEffect, useRef, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import BackgroundVideo from "./BackgroundVideo";

const Login = ({ onFormSwitch }) => {
  const [isListening, setIsListening] = useState(false);
  const { resetTranscript } = useSpeechRecognition();
  const recognitionRef = useRef(null);

  const handleLogin = (e) => {
    const selectedOption = e.target.value;
    onFormSwitch(selectedOption);
  };

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const speakLoginOptions = () => {
    speak("Please say the type of login: client login, admin login, or owner login.");
    setIsListening(true);
  };

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      if (spokenText.includes("client login")) {
        recognition.stop();
        setIsListening(false);
        onFormSwitch("ClientLogin");
      } else if (spokenText.includes("admin login")) {
        recognition.stop();
        setIsListening(false);
        onFormSwitch("AdminLogin");
      } else if (spokenText.includes("owner login")) {
        recognition.stop();
        setIsListening(false);
        onFormSwitch("OwnerLogin");
      }
    };

    recognition.onend = () => {
      if (isListening) {
        resetTranscript();
        recognition.start();
      }
    };

    if (!isListening) {
      speakLoginOptions();
      resetTranscript();
      recognition.start();
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [isListening, onFormSwitch, speakLoginOptions, resetTranscript]);

  return (
    <div className="">
      <BackgroundVideo />
      <li className="nav-item dropdown">
        <ul>
          <select className="logindd" onChange={handleLogin}>
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
//-------------------------------------------------------------------------------------------------------------------------------------
// import React, { useEffect, useRef, useState } from "react";
// import { useSpeechRecognition } from "react-speech-recognition";
// import BackgroundVideo from "./BackgroundVideo";

// const Login = ({ onFormSwitch }) => {
//   const [hasSpokenLoginOptions, setHasSpokenLoginOptions] = useState(false);
//   const { resetTranscript, transcript } = useSpeechRecognition();
//   const recognitionRef = useRef(null);

//   const handleLogin = (e) => {
//     const selectedOption = e.target.value;
//     onFormSwitch(selectedOption);
//   };

//   const speak = (text) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
//   };

//   const speakLoginOptions = () => {
//     speak("Please say the type of login: client login, admin login, or owner login.");
//   };

//   useEffect(() => {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current = recognition;

//     recognition.onresult = (event) => {
//       const spokenText = event.results[0][0].transcript.toLowerCase();
//       if (spokenText.includes("client login")) {
//         recognition.stop();
//         onFormSwitch("ClientLogin");
//       } else if (spokenText.includes("admin login")) {
//         recognition.stop();
//         onFormSwitch("AdminLogin");
//       } else if (spokenText.includes("owner login")) {
//         recognition.stop();
//         onFormSwitch("OwnerLogin");
//       }
//     };

//     recognition.onend = () => {
//       if (!hasSpokenLoginOptions) {
//         setHasSpokenLoginOptions(true);
//         resetTranscript();
//         recognition.start();
//       }
//     };

//     if (!hasSpokenLoginOptions) {
//       speakLoginOptions();
//       recognition.start();
//     }

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, [hasSpokenLoginOptions, onFormSwitch, resetTranscript]);

//   return (
//     <div className="">
//       <BackgroundVideo />
//       <li className="nav-item dropdown">
//         <ul>
//           <select className="logindd" onChange={handleLogin}>
//             <option value="">Select</option>
//             <option value="ClientLogin">Client Login</option>
//             <option value="OwnerLogin">Owner Login</option>
//             <option value="AdminLogin">Admin Login</option>
//           </select>
//         </ul>
//       </li>
//     </div>
//   );
// };

// export default Login;
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//new to test
// import React, { useEffect, useRef, useState } from "react";
// import { useSpeechRecognition } from "react-speech-recognition";
// import BackgroundVideo from "./BackgroundVideo";

// const Login = ({ onFormSwitch }) => {
//   const [hasSpokenLoginOptions, setHasSpokenLoginOptions] = useState(false);
//   const [isListening, setIsListening] = useState(false);
//   const { resetTranscript } = useSpeechRecognition();
//   const recognitionRef = useRef(null);

//   const handleLogin = (e) => {
//     const selectedOption = e.target.value;
//     onFormSwitch(selectedOption);
//   };

//   const speak = (text) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
//   };

//   const speakLoginOptions = () => {
//     speak("Please say the type of login: client login, admin login, or owner login.");
//     setIsListening(true);
//   };

//   useEffect(() => {
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognitionRef.current = recognition;

//     recognition.onresult = (event) => {
//       const spokenText = event.results[0][0].transcript.toLowerCase();
//       if (spokenText.includes("client login")) {
//         recognition.stop();
//         setIsListening(false);
//         onFormSwitch("ClientLogin");
//       } else if (spokenText.includes("admin login")) {
//         recognition.stop();
//         setIsListening(false);
//         onFormSwitch("AdminLogin");
//       } else if (spokenText.includes("owner login")) {
//         recognition.stop();
//         setIsListening(false);
//         onFormSwitch("OwnerLogin");
//       }
//     };

//     recognition.onend = () => {
//       if (isListening) {
//         resetTranscript();
//         recognition.start();
//       }
//     };

//     if (!hasSpokenLoginOptions) {
//       setHasSpokenLoginOptions(true);
//       speakLoginOptions();
//       resetTranscript();
//     }

//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.abort();
//       }
//     };
//   }, [hasSpokenLoginOptions, isListening, onFormSwitch, resetTranscript]);

//   return (
//     <div className="">
//       <BackgroundVideo />
//       <li className="nav-item dropdown">
//         <ul>
//           <select className="logindd" onChange={handleLogin}>
//             <option value="">Select</option>
//             <option value="ClientLogin">Client Login</option>
//             <option value="OwnerLogin">Owner Login</option>
//             <option value="AdminLogin">Admin Login</option>
//           </select>
//         </ul>
//       </li>
//     </div>
//   );
// };

// export default Login;






