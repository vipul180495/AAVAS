
// import React from "react";
// import "./PropertyDetails.css"

// const PropertyDetails = ({ property }) => {
//   return (
//     <div className="property-details">
//       <img
//         key={property.propertyNo}
//         src={`http://localhost:2023/backend/${property.picture}`} class="img-fluid img-thumbnail"
//         alt={`Property ${property.propertyNo}`}
//       />
//       <h3>PropertyNo {property.propertyNo}</h3>
//       <p>Type: {property.type}</p>
//       <p>Rooms: {property.rooms}</p>
//       <p>Street: {property.street}</p>
//       <p>City: {property.city}</p>
//       <p>PostCode: {property.postcode}</p>
//       <p>Branch: {property.branchNo}</p>
//       <p>Maximum Rent: {property.rent}</p>
//       <p>Date Available: {property.dateFrom}</p>
//       {/* <img src={property.picture} alt="Property Image" /> */}
//       <div>
//         <h4>Floor Plan for Property {property.propertyNo} </h4>
//         <img
//           key={property.propertyNo}
//           src={`http://localhost:2023/backend/${property.floorPlan}`} class="img-fluid img-thumbnail floor-plan"
//           alt={`Property ${property.propertyNo} Floor Plan`}
//         />
//       </div>
//       {/* <a href={property.floorPlan} target="_blank" rel="noreferrer">
//         View Floor Plan
//       </a> */}
//     </div>
//   );
// };

// export default PropertyDetails;

// import React from "react";
// import "./PropertyDetails.css";

// const PropertyDetails = ({ property, onCreateBooking }) => {
//   return (
//     <div className="property-details">
//       <img
//         key={property.propertyNo}
//         src={`http://localhost:2023/backend/${property.picture}`}
//         className="img-fluid img-thumbnail"
//         alt={`Property ${property.propertyNo}`}
//       />
//       <h3>PropertyNo {property.propertyNo}</h3>
//       <p>Type: {property.type}</p>
//       <p>Rooms: {property.rooms}</p>
//       <p>Street: {property.street}</p>
//       <p>City: {property.city}</p>
//       <p>PostCode: {property.postcode}</p>
//       <p>Branch: {property.branchNo}</p>
//       <p>Maximum Rent: {property.rent}</p>
//       <p>Date Available: {property.dateFrom}</p>
//       <div>
//         <h4>Floor Plan for Property {property.propertyNo} </h4>
//         <img
//           key={property.propertyNo}
//           src={`http://localhost:2023/backend/${property.floorPlan}`}
//           className="img-fluid img-thumbnail floor-plan"
//           alt={`Property ${property.propertyNo} Floor Plan`}
//         />
//       </div>
//       {/* <button onClick={() => onCreateBooking(property)}>Create Booking</button> */}
//       <button className="btn btn-success" onClick={() => props.onFormSwitch('CreateBooking')}>
//         Create Booking
//       </button>
//     </div>
//   );
// };

// export default PropertyDetails;

// import React, { useState } from "react";
// import "./PropertyDetails.css";
// import CreateBooking from "./CreateBooking";

// const PropertyDetails = ({ property }) => {
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   const handleBookingClick = () => {
//     setShowBookingForm(true);
//   };

//   return (
//     <div className="property-details">
//       <img
//         key={property.propertyNo}
//         src={`http://localhost:2023/backend/${property.picture}`}
//         className="img-fluid img-thumbnail"
//         alt={`Property ${property.propertyNo}`}
//       />
//       <h3>PropertyNo {property.propertyNo}</h3>
//       <p>Type: {property.type}</p>
//       <p>Rooms: {property.rooms}</p>
//       <p>Street: {property.street}</p>
//       <p>City: {property.city}</p>
//       <p>PostCode: {property.postcode}</p>
//       <p>Branch: {property.branchNo}</p>
//       <p>Maximum Rent: {property.rent}</p>
//       <p>Date Available: {property.dateFrom}</p>
//       <div>
//         <h4>Floor Plan for Property {property.propertyNo} </h4>
//         <img
//           key={property.propertyNo}
//           src={`http://localhost:2023/backend/${property.floorPlan}`}
//           className="img-fluid img-thumbnail floor-plan"
//           alt={`Property ${property.propertyNo} Floor Plan`}
//         />
//       </div>
//       <button onClick={handleBookingClick}>Create Booking</button>
//       {showBookingForm && <CreateBooking property={property} />}
//     </div>
//   );
// };

// export default PropertyDetails;

// import React, { useState } from "react";
// import "./PropertyDetails.css";
// import CreateBooking from "./CreateBooking";

// const PropertyDetails = ({ property }) => {
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   const handleBookingClick = () => {
//     setShowBookingForm(true);
//   };

//   return (
//     <div className="property-details">
//       {showBookingForm ? (
//         <CreateBooking property={property} />
//       ) : (
//         <>
//           <img
//             key={property.propertyNo}
//             src={`http://localhost:2023/backend/${property.picture}`}
//             className="img-fluid img-thumbnail"
//             alt={`Property ${property.propertyNo}`}
//           />
//           <h3>PropertyNo {property.propertyNo}</h3>
//           <p>Type: {property.type}</p>
//           <p>Rooms: {property.rooms}</p>
//           <p>Street: {property.street}</p>
//           <p>City: {property.city}</p>
//           <p>PostCode: {property.postcode}</p>
//           <p>Branch: {property.branchNo}</p>
//           <p>Maximum Rent: {property.rent}</p>
//           <p>Date Available: {property.dateFrom}</p>
//           <div>
//             <h4>Floor Plan for Property {property.propertyNo} </h4>
//             <img
//               key={property.propertyNo}
//               src={`http://localhost:2023/backend/${property.floorPlan}`}
//               className="img-fluid img-thumbnail floor-plan"
//               alt={`Property ${property.propertyNo} Floor Plan`}
//             />
//           </div>
//           <button onClick={handleBookingClick}>Arrange a Viewing</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default PropertyDetails;

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

  return (
    <div className="property-list">
      <h2>Available Properties for Rent</h2>
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
        {showBookingForm && <button onClick={handleCancelClick}>Back to Properties</button>}
      </div>
    </div>
  );
};

export default PropertyDetails;
