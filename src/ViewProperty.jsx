
// import React, { useEffect, useState } from "react";
// import "./ViewProperty.css";
// import PropertyDetails from "./PropertyDetails";
// import CreateBooking from './CreateBooking';


// const ViewProperty = () => {
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false); 
//   const recognition = new window.webkitSpeechRecognition();

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
//         const propertyMessage = new SpeechSynthesisUtterance(
//           `Property ${index + 1}, ${imgTitle}`
//         );
//         setTimeout(() => {
//           window.speechSynthesis.speak(propertyMessage);
//           if (index === data.length - 1) {
//             // add an event listener to stop the speechSynthesis
//             propertyMessage.addEventListener("end", () => {
//               window.speechSynthesis.cancel();
//             });
//           }
//         }, (index + 1) * 3000);
//       });
  
//       const message2 = new SpeechSynthesisUtterance(
//         `Please say the property number to get the details.`
//       );
//       window.speechSynthesis.speak(message2);
//     };
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
//---------------------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import "./ViewProperty.css";
import PropertyDetails from "./PropertyDetails";
import CreateBooking from './CreateBooking';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const ViewProperty = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:2023/ViewProperty");
      const data = await response.json();
      setProperties(data);
  
      // Speak out the available properties
      const message = new SpeechSynthesisUtterance(
        `We have ${data.length} available properties for rent.`
      );
      window.speechSynthesis.speak(message);
      data.forEach((property, index) => {
        const propertyNo = property.propertyNo;
        const imgTitle = `Property ${propertyNo}`;
        const propertyMessage = new SpeechSynthesisUtterance(
          `Property ${index + 1}, ${imgTitle}`
        );
        setTimeout(() => {
          window.speechSynthesis.speak(propertyMessage);
          if (index === data.length - 1) {
            // add an event listener to stop the speechSynthesis
            propertyMessage.addEventListener("end", () => {
              window.speechSynthesis.cancel();
              startRecognition();
            });
          }
        }, (index + 1) * 3000);
      });
    };
    fetchData();
  }, []);


  const handleSpeechRecognition = () => {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      if (spokenText.includes("arrange a viewing")) {
        recognition.stop();
        setIsListening(false);
        handleBookingClick();
      } else {
        const propertyNumber = extractPropertyNumber(spokenText);
        if (propertyNumber !== null) {
          recognition.stop();
          setIsListening(false);
          navigateToProperty(propertyNumber);
        }
      }
    };

    recognition.start();
  };

  const extractPropertyNumber = (spokenText) => {
    const words = spokenText.split(" ");
    const propertyNumber = words.find((word) => !isNaN(word));
    return propertyNumber ? parseInt(propertyNumber) : null;
  };

  const startRecognition = () => {
    handleSpeechRecognition();
  };

  const navigateToProperty = (propertyNumber) => {
    const property = properties.find((property) => property.propertyNo === propertyNumber);
    if (property) {
      setSelectedProperty(property);
      speakPropertyDetails(property);
    }
  };

    const speakPropertyDetails = (property) => {
    const message = new SpeechSynthesisUtterance(`Property number ${property.propertyNo}. Type: ${property.type}. Rooms: ${property.rooms}. Street: ${property.street}. City: ${property.city}. Postcode: ${property.postcode}. Owner number: ${property.ownerNo}. Employee: ${property.employeeNo}. Branch: ${property.branchNo}. Maximum Rent: ${property.rent}. Date Available: ${property.formattedDateTo}.`);
    window.speechSynthesis.speak(message);

    const instruction = new SpeechSynthesisUtterance("To arrange a viewing, say 'Arrange a viewing'.");
    setTimeout(() => {
      window.speechSynthesis.speak(instruction);
    }, 2000);
  };

  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  // ...

  const handleClick = (property) => {
    const { propertyNo } = property;
    fetch(`http://localhost:2023/ViewProperty/${propertyNo}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedProperty(data);
        setShowBookingForm(false); // add this line
        speakPropertyDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching property details:", error);
      });
  };

  return (
    <div className="property-list">
      <h2>Available Properties for Rent</h2>
      <div className="property-images">
        {properties.map((property) => (
          <div key={property.propertyNo}>
            <img
              src={`http://localhost:2023/backend/${property.picture}`}
              className="img-fluid img-thumbnail"
              alt={`Property ${property.propertyNo}`}
              onClick={() => handleClick(property)}
              title={`Property ${property.propertyNo}`}
            />
            <h4>{`PropertyNo ${property.propertyNo}`}</h4>
          </div>
        ))}
      </div>
      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          handleBookingClick={handleBookingClick} // pass handleBookingClick as a prop
        />
      )}
      {showBookingForm && (
        <CreateBooking
          property={selectedProperty}
          handleBookingClick={handleBookingClick} // pass handleBookingClick as a prop
        />
      )}
    </div>
  );
};

export default ViewProperty;
