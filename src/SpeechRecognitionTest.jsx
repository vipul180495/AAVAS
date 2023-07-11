import React, { useEffect, useRef, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";

const SpeechRecognitionTest = () => {
  const { resetTranscript } = useSpeechRecognition();
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);

  const startRecognition = () => {
    resetTranscript();
    setIsListening(true);
    recognitionRef.current.start();
  };

  const stopRecognition = () => {
    setIsListening(false);
    recognitionRef.current.stop();
  };

  useEffect(() => {
    const handleRecognitionResult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      console.log("Spoken Text:", spokenText);
      // Perform desired actions based on spoken text
    };

    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current.onresult = handleRecognitionResult;

    // Start speech recognition when the component mounts
    startRecognition();

    return () => {
      // Clean up the recognition instance when the component unmounts
      recognitionRef.current.abort();
    };
  }, [resetTranscript]);

  return (
    <div>
      <h1>Speech Recognition Test</h1>
      <button onClick={resetTranscript}>Reset Transcript</button>
      <button onClick={isListening ? stopRecognition : startRecognition}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <p>Transcript: {resetTranscript()}</p>
    </div>
  );
};

export default SpeechRecognitionTest;

