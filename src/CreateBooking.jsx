
// import react, { useState } from "react";

// export const CreateBooking = (props) => {
//     const [FormVal, setFormVal] = useState({
//         propertyNo: '',
//         ID: '',
//         viewDate: '',
//         viewHour: '',

//     });

//     const Changefn = e => {
//         e.preventDefault();
//         const { name, value } = e.target;
//         setFormVal({ ...FormVal, [name]: value })
//     }

//     const handleSubmit = async () => {
//         const parameters = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(FormVal)
//         };
//         try {
//             const response = await fetch('http://localhost:2023/CreateBooking', parameters);
//             if (!response.ok) {
//                 console.warn(`An error has occured:`);
//             } else {
//                 sessionStorage.setItem("Sdata", JSON.stringify([FormVal]))
//                 const successMessage = `You have successfully booked a viewing for Property ${property.propertyNo} on ${viewDate} at ${viewHour}.`;
//                 alert(successMessage);
//                 // sessionStorage.setItem("LoginStatus", "Success");
//                 // setPage('Nav');
//                 // navigate('/')
//             }
//         }
//         catch (e) {
//             console.warn('An error has occured: ' + e)
//         }
//     }

//     return (
//         <div className="auth-form-container">
//             <h2 style={{ color: "black" }}>BOOK A VIEWING</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//                 <label htmlFor="ID">Client ID</label>
//                 <input value={FormVal.ID} name='ID' id="ID" placeholder="Client ID" onChange={Changefn} />
//                 <label htmlFor="propertyNo">Property Number</label>
//                 <input value={FormVal.propertyNo} name= 'propertyNo' id="propertyNo" placeholder="Property Number" onChange={Changefn} />
//                 <label htmlFor="date">Viewing Date </label>
//                 <input value={FormVal.viewDate} name='date' id="date" placeholder="Viewing date" onChange={Changefn} />
//                 <label htmlFor="time">Preferred Hour between 9am to 5pm </label>
//                 <input value={FormVal.viewTime} name='time' id="time" placeholder="Viewing time" onChange={Changefn} />
//                 <label htmlFor="name">Client Name</label>
//                 <input name='name' id="name" placeholder="Client Name"  />
//                 <label htmlFor="name">Agent Name</label>
//                 <input name='name' id="name" placeholder="Agent Name"  />

//                 <button type="submit">Submit</button>
//             </form>

//         </div>
//     )
// }
// export default CreateBooking;

import React, { useState } from "react";
import "./CreateBooking.css"

const CreateBooking = ({ property }) => {
  const [formValues, setFormValues] = useState({
    viewID: '',
    propertyNo: '',
    ID: '',
    viewDate: '',
    viewHour: '',
    Comment: '',
    WishToRent: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      viewID: formValues.viewID,
      propertyNo: property.propertyNo,
      ID: formValues.ID,
      viewDate: formValues.viewDate,
      viewHour: formValues.viewHour,
      Comment: formValues.Comment,
      WishToRent: formValues.WishToRent === 'yes' ? 'yes' : 'no'
    };
    

    const parameters = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch("http://localhost:2023/CreateBooking", parameters);
      if (!response.ok) {
        throw new Error(`An error has occured: ${response.status}`);
      } else {
        const successMessage = `You have successfully booked a viewing for Property ${property.propertyNo} on ${formValues.viewDate} at ${formValues.viewHour}.`;
        alert(successMessage);
      }
    } catch (e) {
      console.warn(`An error has occured: ${e.message}`);
    }
  };

  
  return (
    <div className="auth-form-container">
      <h2>Book A Viewing for {property.propertyNo} </h2>
      <form className="register-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="viewID">Viewing ID:</label>
        <input type="text" name="viewID" value={formValues.viewID} onChange={handleChange} required />
      </div>
        <div>
          <label htmlFor="ID">Client ID:</label>
          <input type="text" name="ID" value={formValues.ID} onChange={handleChange} required />
        </div>
        {/* <div>
          <label htmlFor="propertyNo">Property Number:</label>
          <input type="text" name="propertyNo" value={formValues.propertyNo} onChange={handleChange} required />
        </div> */}
        <div>
          <label htmlFor="date">Viewing Date:</label>
          <input type="date" name="viewDate" value={formValues.viewDate} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="hour">Preferred Hour:</label>
          <input type="time" name="viewHour" value={formValues.viewHour} onChange={handleChange} required min="09:00" max="17:00" />
        </div>
        <div>
          <label htmlFor="text">Comment:</label>
          <input type="text" name="Comment" value={formValues.Comment} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="hour">Do you wish to rent during this hour?</label>
          <div>
            <label>
              <input type="radio" name="WishToRent" value="yes" checked={formValues.WishToRent === "yes"} onChange={handleChange} required />
              Yes
            </label>
            <label>
              <input type="radio" name="WishToRent" value="no" checked={formValues.WishToRent === "no"} onChange={handleChange} />
              No
            </label>
          </div>
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBooking;
// import React, { useState } from "react";

// export const CreateBooking = (props) => {
//   const [formVal, setFormVal] = useState({
//     ID: "",
//     propertyNo: "",
//     viewDate: "",
//     viewHour: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormVal((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:2023/CreateBooking", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formVal),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         sessionStorage.setItem("Sdata", JSON.stringify([formVal]));
//         const successMessage = `You have successfully booked a viewing for Property ${formVal.propertyNo} on ${formVal.viewDate} at ${formVal.viewHour}.`;
//         alert(successMessage);
//       } else {
//         console.warn(`An error has occurred: ${data.message}`);
//       }
//     } catch (error) {
//       console.warn(`An error has occurred: ${error}`);
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <h2 style={{ color: "black" }}>BOOK A VIEWING </h2>
//       <form className="register-form" onSubmit={handleSubmit}>
        // <label htmlFor="ID">Client ID</label>
        // <input
        //   type="number"
        //   id="ID"
        //   name="ID"
        //   placeholder="Client ID"
        //   value={formVal.ID}
        //   onChange={handleChange}
        // />

        // <label htmlFor="propertyNo">Property Number</label>
        // <input
        //   type="text"
        //   id="propertyNo"
        //   name="propertyNo"
        //   placeholder="Property Number"
        //   value={formVal.propertyNo}
        //   onChange={handleChange}
        // />

        // <label htmlFor="viewDate">Viewing Date</label>
        // <input
        //   type="date"
        //   id="viewDate"
        //   name="viewDate"
        //   placeholder="Viewing Date"
        //   value={formVal.viewDate}
        //   onChange={handleChange}
        // />

        // <label htmlFor="viewHour">Preferred Hour between 9am to 5pm</label>
        // <input
        //   type="time"
        //   id="viewHour"
        //   name="viewHour"
        //   placeholder="Viewing Hour"
        //   value={formVal.viewHour}
        //   onChange={handleChange}
        // />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateBooking;
