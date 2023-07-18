

// import React, { useEffect, useState } from "react";
// //import { ClientRegister } from "./ClientRegister";

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const Indexx = (props) => {
//   const [recognizedText, setRecognizedText] = useState("");
//   const [listening, setListening] = useState(false);

//   const handleSpeechRecognition = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Sorry, speech recognition is not supported in your browser.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onstart = () => {
//       setListening(true);
//     };

//     recognition.onend = () => {
//       setListening(false);
//     };

//     recognition.onresult = (event) => {
//       const text = event.results[0][0].transcript.trim();
//       setRecognizedText(text);
//       handleUserInput(text);
//     };

//     recognition.start();
//   };

//   const handleUserInput = (text) => {
//    if (text.includes("review viewed property")) {
//     props.onFormSwitch("ReviewViewing");
//    } else if (text.includes("view available property")) {
//     props.onFormSwitch("ViewProperty");
//   }

//   };

//   useEffect(() => {
//     const welcomeMessage = new SpeechSynthesisUtterance(`You are logged into your account, Welcome to AAVAS, ${props.fName}. What would you like to do?`);
//     const instructionsMessage = new SpeechSynthesisUtterance(`To check the properties available with us say "View Available Property". To check already viewed properties say "Review Viewed Property".`);

//     // Set the voice for the messages to be the default voice of the browser
//     const voices = window.speechSynthesis.getVoices();
//     const defaultVoice = voices.find(v => v.default);
//     welcomeMessage.voice = defaultVoice;
//     instructionsMessage.voice = defaultVoice;

//     // Speak the welcome message and the instructions
//     window.speechSynthesis.speak(welcomeMessage);
//     setTimeout(() => window.speechSynthesis.speak(instructionsMessage), 2000);
//   }, [props.fName]);

 

//   return (
//     <div className="auth-form-container">
//       <h2 id="welcome-message">Welcome to AAVAS {props.fName}</h2>
//       <div className="mission" style={{ display: "flex", flexDirection: "row" }}>
//         <button onClick={() => props.onFormSwitch("ViewProperty")}>View Available Property</button>
//         <br />
//         <button onClick={() => props.onFormSwitch("ReviewViewing")}>Review Viewed Property</button>
//         <br />
//         <button onClick={handleSpeechRecognition}>
//           {listening ? "Stop Listening" : "Start Listening"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Indexx;



 // useEffect(() => {
  //   if (recognizedText) {
  //     handleUserInput(recognizedText);
  //     setRecognizedText("");
  //   }
  // }, [recognizedText]);

    // const handleUserInput = (text) => {
  //   if (text.includes("view available property")) {
  //     props.onFormSwitch("ViewProperty");
  //   } else if (text.includes("review viewed property")) {
  //     props.onFormSwitch("ReviewViewing");
  //   }
  // };
  //----------------------------------------------------------------------------------------------------------------
  import React, { useEffect, useState } from "react";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const Indexx = (props) => {
  const [recognizedText, setRecognizedText] = useState("");
  const [listening, setListening] = useState(false);

  const handleUserInput = (text) => {
    if (text.includes("review viewed property")) {
      props.onFormSwitch("ReviewViewing");
    } else if (text.includes("view available property")) {
      props.onFormSwitch("ViewProperty");
    }
  };

  useEffect(() => {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript.trim();
      setRecognizedText(text);
      handleUserInput(text);
    };

    const welcomeMessage = new SpeechSynthesisUtterance(`You are logged into your account, Welcome to AAVAS, ${props.fName}. What would you like to do?`);
    const instructionsMessage = new SpeechSynthesisUtterance(`To check the properties available with us say "View Available Property". To check already viewed properties say "Review Viewed Property".`);

    // Set the voice for the messages to be the default voice of the browser
    const voices = window.speechSynthesis.getVoices();
    const defaultVoice = voices.find(v => v.default);
    welcomeMessage.voice = defaultVoice;
    instructionsMessage.voice = defaultVoice;

    // Speak the welcome message and then the instructions
    window.speechSynthesis.speak(welcomeMessage);
    welcomeMessage.onend = () => {
      setTimeout(() => {
        window.speechSynthesis.speak(instructionsMessage);
        instructionsMessage.onend = () => {
          recognition.start(); // Start speech recognition after instructions
        };
      }, 2000);
    };

    return () => {
      recognition.stop(); // Stop recognition when the component unmounts
    };
  }, [props.fName]);

  return (
    <div className="auth-form-container">
      <h2 id="welcome-message">Welcome to AAVAS {props.fName}</h2>
      <div className="mission" style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={() => props.onFormSwitch("ViewProperty")}>View Available Property</button>
        <br />
        <button onClick={() => props.onFormSwitch("ReviewViewing")}>Review Viewed Property</button>
        <br />
      </div>
    </div>
  );
};

export default Indexx;