
// import React, { useEffect, useState } from "react";
// import "./ViewProperty.css";
// import PropertyDetails from "./PropertyDetails";
// import CreateBooking from './CreateBooking';

// const ViewProperty = () => {
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("http://localhost:2023/ViewProperty");
//       const data = await response.json();
//       setProperties(data);

//       // Speak out the available properties
//       const message = new SpeechSynthesisUtterance(`We have ${data.length} available properties for rent.`);
//       window.speechSynthesis.speak(message);
//       data.forEach((property, index) => {
//         const propertyNo = property.propertyNo;
//         const imgTitle = `Property ${propertyNo}`;
//         setTimeout(() => {
//           const propertyMessage = new SpeechSynthesisUtterance(`Property ${index + 1}, ${imgTitle}`);
//           window.speechSynthesis.speak(propertyMessage);
//         }, (index + 1) * 3000);
//       });
//     }
//     fetchData();
//   }, []);

//   const handleClick = (property) => {
//     const { propertyNo } = property;
//     fetch(`http://localhost:2023/ViewProperty/${propertyNo}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setSelectedProperty(data);
//         setShowBookingForm(false); // add this line
//       })
//       .catch((error) => {
//         console.error("Error fetching property details:", error);
//       });
//   };

//   const handleBookingClick = () => {
//     setShowBookingForm(true);
//   };

//   import React, { useEffect, useState } from "react";
//   import "./ViewProperty.css";
//   import PropertyDetails from "./PropertyDetails";
//   import CreateBooking from './CreateBooking';

//   const ViewProperty = () => {
//     const [properties, setProperties] = useState([]);
//     const [selectedProperty, setSelectedProperty] = useState(null);
//     const [showBookingForm, setShowBookingForm] = useState(false);
//     const [isListening, setIsListening] = useState(false);
//     const [speechResult, setSpeechResult] = useState("");

//     useEffect(() => {
//       async function fetchData() {
//         const response = await fetch("http://localhost:2023/ViewProperty");
//         const data = await response.json();
//         setProperties(data);

//         // Speak out the available properties
//         const message = new SpeechSynthesisUtterance(`We have ${data.length} available properties for rent.`);
//         window.speechSynthesis.speak(message);
//         data.forEach((property, index) => {
//           const propertyNo = property.propertyNo;
//           const imgTitle = `Property ${propertyNo}`;
//           setTimeout(() => {
//             const propertyMessage = new SpeechSynthesisUtterance(`Property ${index + 1}, ${imgTitle}`);
//             window.speechSynthesis.speak(propertyMessage);
//           }, (index + 1) * 3000);
//         });
//       }
//       fetchData();
//     }, []);

//     useEffect(() => {
//       if (isListening) {
//         const recognition = new window.webkitSpeechRecognition();
//         recognition.lang = "en-US";
//         recognition.start();
//         recognition.onresult = (event) => {
//           const result = event.results[0][0].transcript;
//           setSpeechResult(result);
//           setIsListening(false);
//         };
//       }
//     }, [isListening]);

//     // const handleClick = (property) => {
//     //   const { propertyNo } = property;
//     //   fetch(`http://localhost:2023/ViewProperty/${propertyNo}`)
//     //     .then((response) => response.json())
//     //     .then((data) => {
//     //       setSelectedProperty(data);
//     //       setShowBookingForm(false); // add this line
//     //     })
//     //     .catch((error) => {
//     //       console.error("Error fetching property details:", error);
//     //     });
//     // };

//     const handleClick = (propertyNo) => {
//       fetch(`http://localhost:2023/ViewProperty/${propertyNo}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setSelectedProperty(data);
//           setShowBookingForm(false);
//           // Speak out the property details
//           const message = new SpeechSynthesisUtterance(`Property ${data.propertyNo}, ${data.propertyType}, ${data.address}, ${data.rentPerMonth} per month`);
//           window.speechSynthesis.speak(message);
//         })
//         .catch((error) => {
//           console.error("Error fetching property details:", error);
//         });
//     };

//     // Add this function to handle user input
//     const handleUserInput = (event) => {
//       const userInput = event.results[0][0].transcript;
//       const propertyNo = parseInt(userInput.match(/\d+/)[0]);
//       handleClick(propertyNo);
//     };

//     // Attach the handleUserInput function to the speech recognition event
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = true;
//     recognition.lang = "en-US";
//     recognition.onresult = handleUserInput;

//     const handleBookingClick = () => {
//       setShowBookingForm(true);
//     };

//     const handleListenClick = () => {
//       setIsListening(true);
//       const message = new SpeechSynthesisUtterance("Please say the property number.");
//       window.speechSynthesis.speak(message);
//     };

//     useEffect(() => {
//       if (speechResult !== "") {
//         const selectedProp = properties.find((property) =>
//           property.propertyNo.toString() === speechResult
//         );
//         if (selectedProp) {
//           handleClick(selectedProp);
//           setSpeechResult("");
//         } else {
//           const message = new SpeechSynthesisUtterance(`Property ${speechResult} is not available. Please try again.`);
//           window.speechSynthesis.speak(message);
//           setSpeechResult("");
//           setIsListening(false);
//         }
//       }
//     }, [speechResult, properties]);


//   return (
//     <div className="property-list">
//       <h2>Available Properties for Rent</h2>
//       <div className="property-images">
//         {properties.map((property) => (
//           <div key={property.propertyNo}>
//             <img
//               src={`http://localhost:2023/backend/${property.picture}`}
//               class="img-fluid img-thumbnail"
//               alt={`Property ${property.propertyNo}`}
//               onClick={() => handleClick(property)}
//               title={`Property ${property.propertyNo}`}
//             />
//             <h4>{`PropertyNo ${property.propertyNo}`}</h4>
//           </div>
//         ))}
//       </div>
//       {selectedProperty && (
//         <PropertyDetails
//           property={selectedProperty}
//           handleBookingClick={handleBookingClick} // pass handleBookingClick as a prop
//         />
//       )}
//       {showBookingForm && (
//         <CreateBooking
//           property={selectedProperty}
//           handleBookingClick={handleBookingClick} // pass handleBookingClick as a prop
//         />
//       )}
//     </div>
//   );
// };

// export default ViewProperty;

// import React, { useEffect, useState } from "react";
// import "./ViewProperty.css";
// import PropertyDetails from "./PropertyDetails";
// import CreateBooking from './CreateBooking';

// const ViewProperty = () => {
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("http://localhost:2023/ViewProperty");
//       const data = await response.json();
//       setProperties(data);

//       // Speak out the available properties
//       const message = new SpeechSynthesisUtterance(`We have ${data.length} available properties for rent.`);
//       window.speechSynthesis.speak(message);
//       data.forEach((property, index) => {
//         const propertyNo = property.propertyNo;
//         const imgTitle = `Property ${propertyNo}`;
//         setTimeout(() => {
//           const propertyMessage = new SpeechSynthesisUtterance(`Property ${index + 1}, ${imgTitle}`);
//           window.speechSynthesis.speak(propertyMessage);
//         }, (index + 1) * 3000);
//       });

//       // Listen for user speech input
//       const recognition = new window.webkitSpeechRecognition();
//       recognition.lang = "en-US";
//       recognition.onresult = (event) => {
//         const speechResult = event.results[0][0].transcript;
//         const selectedProperty = properties.find((property) =>
//           speechResult.toLowerCase().includes(`property ${property.propertyNo}`)
//         );
//         if (selectedProperty) {
//           handleClick(selectedProperty);
//         } else {
//           const message = new SpeechSynthesisUtterance(`Sorry, we could not find the property. Please try again.`);
//           window.speechSynthesis.speak(message);
//         }
//       };
//       recognition.onerror = (event) => {
//         console.error("Error with speech recognition:", event.error);
//       };
//       const startRecognition = () => {
//         recognition.start();
//         const message = new SpeechSynthesisUtterance(`Please say the property number to get the details.`);
//         window.speechSynthesis.speak(message);
//       };
//       setTimeout(startRecognition, (data.length + 1) * 3000);
//     }
//     fetchData();
//   }, []);

//   const handleClick = (property) => {
//     const { propertyNo } = property;
//     fetch(`http://localhost:2023/ViewProperty/${propertyNo}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setSelectedProperty(data);
//         setShowBookingForm(false); // add this line
//       })
//       .catch((error) => {
//         console.error("Error fetching property details:", error);
//       });
//   };

//   const handleBookingClick = () => {
//     setShowBookingForm(true);
//   };

//   return (
//     <div className="property-list">
//       <h2>Available Properties for Rent</h2>
//       <div className="property-images">
//         {properties.map((property, index) => (
//           <div key={property.propertyNo}>
//             <img
//               src={`http://localhost:2023/backend/${property.picture}`}
//               class="img-fluid img-thumbnail"
//               alt={`Property ${property.propertyNo}`}
//               onClick={() => handleClick(property)}
//               title={`Property ${property.propertyNo}`}
//             />
//             <h4>{`PropertyNo ${property.propertyNo}`}</h4>
//           </div>
//         ))}
//       </div>
//       {!selectedProperty && (
//         <div>
//           <p>Please say the property number you are interested in:</p>
//           <button onClick={() => window.speechRecognition.start()}>Speak</button>
//         </div>
//       )}
//       {selectedProperty && (
//         <div>
//           <PropertyDetails
//             property={selectedProperty}
//             handleBookingClick={handleBookingClick} // pass handleBookingClick as a prop
//           />
//           <button onClick={() => setSelectedProperty(null)}>Back to properties</button>
//         </div>
//       )}
//       {showBookingForm && (
//         <CreateBooking
//           property={selectedProperty}
//           handleBookingClick={handleBookingClick} // pass handleBookingClick as a prop
//         />
//       )}
//     </div>
//   );
// }
// export default ViewProperty;
// import React, { useEffect, useState } from "react";
// import "./ViewProperty.css";
// import PropertyDetails from "./PropertyDetails";
// import CreateBooking from "./CreateBooking";

// const ViewProperty = () => {
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [recognizedText, setRecognizedText] = useState("");
//   const [listening, setListening] = useState(false);
//   const recognition = new window.webkitSpeechRecognition();

//   const handleSpeechRecognition = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Sorry, speech recognition is not supported in your browser.");
//       return;
//     }
    
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
//     if (text.includes(`${selectedProperty.propertyNo}`)) {
//       setShowBookingForm(false);
//     } else {
//       const message = new SpeechSynthesisUtterance(
//         `Sorry, we could not find the property. Please try again.`
//       );
//       window.speechSynthesis.speak(message);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:2023/ViewProperty");
//       const data = await response.json();
//       setProperties(data);

//       // Speak out the available properties
//       const message = new SpeechSynthesisUtterance(
//         `We have ${data.length} available properties for rent.`
//       );
//       window.speechSynthesis.speak(message);
//       data.forEach((property, index) => {
//         const propertyNo = property.propertyNo;
//         const imgTitle = `Property ${propertyNo}`;
//         setTimeout(() => {
//           const propertyMessage = new SpeechSynthesisUtterance(
//             `Property ${index + 1}, ${imgTitle}`
//           );
//           window.speechSynthesis.speak(propertyMessage);
//         }, (index + 1) * 3000);
//       });

//       const startRecognition = () => {
//         recognition.start();
//         const message = new SpeechSynthesisUtterance(
//           `Please say the property number to get the details.`
//         );
//         window.speechSynthesis.speak(message);
//       };
//       setTimeout(startRecognition, (data.length + 1) * 3000);
//     };
//     fetchData();
//   }, [recognition]);

//   const handleBookingClick = () => {
//     setShowBookingForm(true);
//   };

//   const handleBackToPropertiesClick = () => {
//     setSelectedProperty(null);
//   };

//   return (
//     <div className="property-list">
//       <h2>Available Properties for Rent</h2>
//       <div className="property-images">
//         {properties.map((property) => (
//           <div key={property.propertyNo}>
//             <img
//               src={`http://localhost:2023/backend/${property.picture}`}
//               className="img-fluid img-thumbnail"
//               alt={`Property ${property.propertyNo}`}
//               onClick={() => setSelectedProperty(property)}
//               title={`Property ${property.propertyNo}`}
//             />
//             <h4>{`PropertyNo ${property.propertyNo}`}</h4>
//           </div>
//         ))}
//       </div>
//       {
//         !selectedProperty && (
//           <div>
//             <p>Please say the property number you are interested in:</p>
//             <button onClick={handleSpeechRecognition}>{listening ? "Listening..." : "Speak"}</button>
//           </div>
//         )
//       }
//       {
//         selectedProperty && (
//           <div>
//             <PropertyDetails
//               property={selectedProperty}
//               handleBookingClick={handleBookingClick}
//             />
//             <button onClick={handleBackToPropertiesClick}>Back to Properties</button>
//           </div>
//         )
//       }
//       {
//         showBookingForm && (
//           <CreateBooking
//             property={selectedProperty}
//             handleBackToPropertiesClick={handleBackToPropertiesClick}
//           />
//         )
//       }
//     </div >
//   );  // end of div with className="property-list" and the entire component
// }
// export default ViewProperty;

// import React, { useEffect, useState, useMemo } from "react";
// import "./ViewProperty.css";
// import PropertyDetails from "./PropertyDetails";
// import CreateBooking from "./CreateBooking";

// const ViewProperty = () => {
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [recognizedText, setRecognizedText] = useState("");
//   const [listening, setListening] = useState(false);

//   const recognition = useMemo(() => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Sorry, speech recognition is not supported in your browser.");
//       return null;
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

//     return recognition;
//   }, []);

//   const handleSpeechRecognition = () => {
//     if (!recognition) {
//       return;
//     }

//     recognition.start();
//   };

//   const handleUserInput = (text) => {
//     if (selectedProperty && text.includes(`${selectedProperty.propertyNo}`)) {
//       handleBookingClick(PropertyDetails);
//     } else {
//       const message = new SpeechSynthesisUtterance(
//         `Sorry, we could not find the property. Please try again.`
//       );
//       //window.speechSynthesis.speak(message);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:2023/ViewProperty");
//       const data = await response.json();
//       setProperties(data);

//       // Speak out the available properties
//       const message = new SpeechSynthesisUtterance(
//         `We have ${data.length} available properties for rent.`
//       );
//       window.speechSynthesis.speak(message);
//       data.forEach((property, index) => {
//         const propertyNo = property.propertyNo;
//         const imgTitle = `Property ${propertyNo}`;
//         setTimeout(() => {
//           const propertyMessage = new SpeechSynthesisUtterance(
//             `Property ${index + 1}, ${imgTitle}`
//           );
//           window.speechSynthesis.speak(propertyMessage);
//         }, (index + 1) * 3000);
//       });

//     const startRecognition = () => {
//       recognition.start();
//       const message = new SpeechSynthesisUtterance(
//         `Please say the property number to get the details.`
//       );
//         window.speechSynthesis.speak(message);
//       };
//       setTimeout(startRecognition, (data.length + 1) * 3000);
//     };
//     fetchData();
//   }, [recognition]);

//   const handleBookingClick = () => {
//     setShowBookingForm(true);
//   };

//   const handleBackToPropertiesClick = () => {
//     setSelectedProperty(null);
//   };

//   return (
//     <div className="property-list">
//       <h2>Available Properties for Rent</h2>
//       <div className="property-images">
//         {properties.map((property) => (
//           <div key={property.propertyNo}>
//             <img
//               src={`http://localhost:2023/backend/${property.picture}`}
//               className="img-fluid img-thumbnail"
//               alt={`Property ${property.propertyNo}`}
//               onClick={() => setSelectedProperty(property)}
//               title={`Property ${property.propertyNo}`}
//             />
//             <h4>{`PropertyNo ${property.propertyNo}`}</h4>
//           </div>
//         ))}
//       </div>
//       {
//         !selectedProperty && (
//           <div>
//             <p>Please say the property number you are interested in:</p>
//             <button onClick={handleSpeechRecognition}>
//           {listening ? "Stop Listening" : "Start Listening"}
//         </button>
//           </div>
//         )
//       }
//       {
//         selectedProperty && (
//           <div>
//             <PropertyDetails
//               property={selectedProperty}
//               handleBookingClick={handleBookingClick}
//             />
//             {/*<button onClick={handleBackToPropertiesClick}>Back to Properties</button>*/}
//           </div>
//         )
//       }
//       {
//         showBookingForm && (
//           <CreateBooking
//             property={selectedProperty}
//             handleBackToPropertiesClick={handleBackToPropertiesClick}
//           />
//         )
//       }
//     </div >
//   );  // end of div with className="property-list" and the entire component
// }
// export default ViewProperty;
