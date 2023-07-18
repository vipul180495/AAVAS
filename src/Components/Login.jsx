
//-------------------------------------------------------------------------------------------------------------------
// import React, { useEffect, useRef, useState } from "react";
// import { useSpeechRecognition } from "react-speech-recognition";
// import BackgroundVideo from "./BackgroundVideo";

// const Login = ({ onFormSwitch }) => {
//   const [isListening, setIsListening] = useState(false);
//   const { resetTranscript } = useSpeechRecognition();
//   const recognitionRef = useRef(null);
//   const isLoginOptionsPlayedRef = useRef(false);

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
//     isLoginOptionsPlayedRef.current = true;
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

//     if (!isListening && isLoginOptionsPlayedRef.current) {
//       resetTranscript();
//       recognition.start();
//     } else {
//       speakLoginOptions();
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
//--------------------------------------------------------------------------------------------
//      good     //
import React, { useEffect, useRef, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import BackgroundVideo from "./BackgroundVideo";

const Login = ({ onFormSwitch }) => {
  const [isListening, setIsListening] = useState(false);
  const { resetTranscript } = useSpeechRecognition();
  const recognitionRef = useRef(null);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const speakLoginOptions = () => {
    speak("Please say the type of login: client login, admin login, or owner login.");
  };

  const startRecognition = () => {
    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current.onresult = handleRecognitionResult;
    recognitionRef.current.start();
    recognitionRef.current.onend = () => {
      setIsListening(false);
    };
  };

  const handleRecognitionResult = (event) => {
    const spokenText = event.results[0][0].transcript.toLowerCase();
    if (spokenText.includes("client login")) {
      recognitionRef.current.stop();
      setIsListening(false);
      onFormSwitch("ClientLogin");
    } else if (spokenText.includes("admin login")) {
      recognitionRef.current.stop();
      setIsListening(false);
      onFormSwitch("AdminLogin");
    } else if (spokenText.includes("owner login")) {
      recognitionRef.current.stop();
      setIsListening(false);
      onFormSwitch("OwnerLogin");
    }
  };

  const handleLogin = (e) => {
    const selectedOption = e.target.value;
    onFormSwitch(selectedOption);
  };

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current = recognition;

    recognition.onresult = handleRecognitionResult;

    recognition.onend = () => {
      if (!isListening) {
        resetTranscript();
      }
    };

    const handleClick = (event) => {
      if (!isListening) {
        startRecognition();
      }
    };

    document.addEventListener("click", handleClick);

    if (!isListening) {
      setIsListening(true);
      speakLoginOptions();
      resetTranscript();
      startRecognition();
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      document.removeEventListener("click", handleClick);
    };
  }, [isListening, onFormSwitch, resetTranscript, speakLoginOptions]);

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




