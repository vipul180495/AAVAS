

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
