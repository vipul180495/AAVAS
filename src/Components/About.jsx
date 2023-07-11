
// import React from "react";
// //import BackgroundVideo from './BackgroundVideo';

// const About = () => {
//   return (
//     <div className="mission">
//       {/* <BackgroundVideo /> */}
//       <h1>About Us</h1>
//       <p>
//       The first branch office of AAVAS was opened in 1992 in a city called Glasgow in the UK. 
//       Since then, the Company has grown steadily and now has several offices in most of the main cities of the UK.
//       AAVAS specializes in property management, by taking an intermediate role between owners who wish to rent 
//       out their furnished property and clients of AAVAS who require to rent furnished property for a fixed period. 
//       AAVAS currently has about 2000 staff working in 100 branches.   
//       </p>
//     </div>
//   );
// };

// export default About;

import React, { useEffect } from "react";
//import BackgroundVideo from './BackgroundVideo';

const About = () => {
  useEffect(() => {
    const speakAboutText = () => {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance("The first branch office of AAVAS was opened in 1992 in a city called Glasgow in the UK. Since then, the Company has grown steadily and now has several offices in most of the main cities of the UK. AAVAS specializes in property management, by taking an intermediate role between owners who wish to rent out their furnished property and clients of AAVAS who require to rent furnished property for a fixed period. AAVAS currently has about 2000 staff working in 100 branches.");
      synth.speak(utterance);
    };

    speakAboutText();

    return () => {
      const synth = window.speechSynthesis;
      synth.cancel();
    };
  }, []);

  return (
    <div className="mission">
      {/* <BackgroundVideo /> */}
      <h1>About Us</h1>
      <p>
      The first branch office of AAVAS was opened in 1992 in a city called Glasgow in the UK. 
      Since then, the Company has grown steadily and now has several offices in most of the main cities of the UK.
      AAVAS specializes in property management, by taking an intermediate role between owners who wish to rent 
      out their furnished property and clients of AAVAS who require to rent furnished property for a fixed period. 
      AAVAS currently has about 2000 staff working in 100 branches.   
      </p>
    </div>
  );
};

export default About;


// import React, { useEffect } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// const About = () => {
//   const { transcript, resetTranscript } = useSpeechRecognition();

//   useEffect(() => {
//     if (transcript.toLowerCase().includes("read")) {
//       const text = document.getElementById("aboutText").innerText;
//       speak(text);
//     }
//   }, [transcript]);

//   const speak = (text) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
//   };

//   const handleStart = () => {
//     SpeechRecognition.startListening({ continuous: true });
//   };

//   const handleStop = () => {
//     SpeechRecognition.stopListening();
//   };

//   return (
//     <div className="mission">
//       <h1>About Us</h1>
//       <p id="aboutText">
//         The first branch office of AAVAS was opened in 1992 in a city called Glasgow in the UK. Since then, 
//         the Company has grown steadily and now has several offices in most of the main cities of the UK. 
//         AAVAS specializes in property management, by taking an intermediate role between owners who wish to 
//         rent out their furnished property and clients of AAVAS who require to rent furnished property for a fixed period. 
//         AAVAS currently has about 2000 staff working in 100 branches.
//       </p>
//       <button onClick={handleStart}>Start Listening</button>
//       <button onClick={handleStop}>Stop Listening</button>
//     </div>
//   );
// };

//export default About;
