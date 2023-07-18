

// import React, { useState } from "react";
// import "./PropertyDetails.css";
// import CreateBooking from "./CreateBooking";

// const PropertyDetails = ({ property }) => {
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   const handleBookingClick = () => {
//     setShowBookingForm(true);
//   };

//   const handleCancelClick = () => {
//     setShowBookingForm(false);
//   };

//   return (
//     <div className="property-list">
//       <h2>Available Properties for Rent</h2>
//       <div className="property-details">
//         {showBookingForm ? (
//           <CreateBooking property={property} handleCancelClick={handleCancelClick} />
//         ) : (
//           <>
//             <img
//               key={property.propertyNo}
//               src={`http://localhost:2023/backend/${property.picture}`}
//               className="img-fluid img-thumbnail"
//               alt={`Property ${property.propertyNo}`}
//             />
//             <h3>PropertyNo {property.propertyNo}</h3>
//             <p>Type: {property.type}</p>
//             <p>Rooms: {property.rooms}</p>
//             <p>Street: {property.street}</p>
//             <p>City: {property.city}</p>
//             <p>PostCode: {property.postcode}</p>
//             <p>Owner No.: {property.ownerNo}</p>
//             <p>Employee: {property.employeeNo}</p>
//             <p>Branch: {property.branchNo}</p>
//             <p>Maximum Rent: {property.rent}</p>
//             <p>Date Available: {property.formattedDateTo}</p>
//             <div>
//               <h4>Floor Plan for Property {property.propertyNo} </h4>
//               <img
//                 key={property.propertyNo}
//                 src={`http://localhost:2023/backend/${property.floorPlan}`}
//                 className="img-fluid img-thumbnail floor-plan"
//                 alt={`Property ${property.propertyNo} Floor Plan`}
//               />
//             </div>
//             <button onClick={handleBookingClick}>Arrange a Viewing</button>
//           </>
//         )}
//         {showBookingForm && <button onClick={handleCancelClick}>Back to Properties</button>}
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;
//----------------------------------------------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import "./PropertyDetails.css";
import CreateBooking from "./CreateBooking";

const PropertyDetails = ({ property }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  const handleCancelClick = () => {
    setShowBookingForm(false);
  };

  const speakPropertyDetails = () => {
    const message = new SpeechSynthesisUtterance(`Property number ${property.propertyNo}. Type: ${property.type}. Rooms: ${property.rooms}. Street: ${property.street}. City: ${property.city}. Postcode: ${property.postcode}. Owner number: ${property.ownerNo}. Employee: ${property.employeeNo}. Branch: ${property.branchNo}. Maximum Rent: ${property.rent}. Date Available: ${property.formattedDateTo}.`);
    window.speechSynthesis.speak(message);

    const instruction = new SpeechSynthesisUtterance("To arrange a viewing, say 'Arrange a viewing'.");
    setTimeout(() => {
      window.speechSynthesis.speak(instruction);
    }, 2000);
  };

  return (
    <div className="property-list">
      <h2>Property Details</h2>
      <div className="property-details">
        {showBookingForm ? (
          <CreateBooking property={property} handleCancelClick={handleCancelClick} />
        ) : (
          <>
            <img
              key={property.propertyNo}
              src={`http://localhost:2023/backend/${property.picture}`}
              className="img-fluid img-thumbnail"
              alt={`Property ${property.propertyNo}`}
            />
            <h3>PropertyNo {property.propertyNo}</h3>
            <p>Type: {property.type}</p>
            <p>Rooms: {property.rooms}</p>
            <p>Street: {property.street}</p>
            <p>City: {property.city}</p>
            <p>PostCode: {property.postcode}</p>
            <p>Owner No.: {property.ownerNo}</p>
            <p>Employee: {property.employeeNo}</p>
            <p>Branch: {property.branchNo}</p>
            <p>Maximum Rent: {property.rent}</p>
            <p>Date Available: {property.formattedDateTo}</p>
            <div>
              <h4>Floor Plan for Property {property.propertyNo} </h4>
              <img
                key={property.propertyNo}
                src={`http://localhost:2023/backend/${property.floorPlan}`}
                className="img-fluid img-thumbnail floor-plan"
                alt={`Property ${property.propertyNo} Floor Plan`}
              />
            </div>
            <button onClick={handleBookingClick}>Arrange a Viewing</button>
          </>
        )}
        {!showBookingForm && (
          <button onClick={speakPropertyDetails}>Hear Property Details</button>
        )}
        {showBookingForm && <button onClick={handleCancelClick}>Back to Properties</button>}
      </div>
    </div>
  );
};

export default PropertyDetails;