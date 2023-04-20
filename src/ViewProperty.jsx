// import React, { useEffect, useState } from "react";
// import "./ViewProperty.css";
// import PropertyDetails from "./PropertyDetails";

// const ViewProperty = () => {
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("http://localhost:2023/ViewProperty");
//       const data = await response.json();
//       setProperties(data);
//     }
//     fetchData();
//   }, []);

// //   const handleClick = (property) => {
// //     setSelectedProperty(property);
// //     console.log("Selected Property:", property)
// //   };
  
//   const handleClick = (property) => {
//     const { propertyNo } = property;
//     fetch(`http://localhost:2023/ViewProperty/${propertyNo}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setSelectedProperty(data);
//         setShowBookingForm(false); // Set showBookingForm to false
//       })
//       .catch((error) => {
//         console.error("Error fetching property details:", error);
//       });
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
//       {selectedProperty && <PropertyDetails property={selectedProperty} />}
//     </div>
//   );
  
// };

// export default ViewProperty;

import React, { useEffect, useState } from "react";
import "./ViewProperty.css";
import PropertyDetails from "./PropertyDetails";
import CreateBooking from './CreateBooking';


const ViewProperty = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false); 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:2023/ViewProperty");
      const data = await response.json();
      setProperties(data);
    }
    fetchData();
  }, []);

  const handleClick = (property) => {
    const { propertyNo } = property;
    fetch(`http://localhost:2023/ViewProperty/${propertyNo}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedProperty(data);
        setShowBookingForm(false); // add this line
      })
      .catch((error) => {
        console.error("Error fetching property details:", error);
      });
  };

  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="property-list">
      <h2>Available Properties for Rent</h2>
      <div className="property-images">
        {properties.map((property) => (
          <div key={property.propertyNo}>
            <img
              src={`http://localhost:2023/backend/${property.picture}`}
              class="img-fluid img-thumbnail"
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
