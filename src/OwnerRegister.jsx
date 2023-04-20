import react, { useState } from "react";

export const OwnerRegister = (props) => {
    const [FormVal, setFormVal] = useState({
        propertyNo: '',
        street: '',
        city: '',
        Postcode: '',
        type: '',
        rooms: '',
        rent: '',
        ownerNo: '',
        employeeNo: '',
        branchNo: '',
        picture: '',
        floorPlan: '',
        dateFrom: '',
        dateTo: '',
        email: ''
      });
       
    const Changefn = e => {
        e.preventDefault();
        const {name,value} = e.target;
        setFormVal({...FormVal, [name]: value})
    }

       const handleSubmit = async () => {
        const parameters = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(FormVal)
        };
        try{
          const response = await fetch('http://localhost:2023/OwnerRegister', parameters);
          if (!response.ok) {
              console.warn(`An error has occured:`);
          }else{
            sessionStorage.setItem("Sdata", JSON.stringify([FormVal]))
            sessionStorage.setItem("LoginStatus", "Success");
            // setPage('Nav');
            // navigate('/')
          }
        } 
        catch(e){
          console.warn('An error has occured: ' + e)
        }
      }

    return (
        <div className="auth-form-container">
                <h2 style={{color:"black"}}>REGISTER PROPERTY</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="propertyNo">Property Number</label>
                <input value={FormVal.propertyNo} name= 'propertyNo' id="propertyNo" placeholder="Property Number" onChange={Changefn} />
                <label htmlFor="street">Street</label>
                <input value={FormVal.street} name= 'street' id="street" placeholder="Street" onChange={Changefn}/>
                <label htmlFor="city">City</label>
                <input value={FormVal.city} name= 'city' id="city" placeholder="City" onChange={Changefn}/>
                <label htmlFor="postcode">Post Code</label>
                <input value={FormVal.Postcode} name= 'Postcode' id="postcode" placeholder="Post Code" onChange={Changefn}/>
                <label htmlFor="type">Room Type</label>
                <input value={FormVal.type} name= 'type' id="type" placeholder="Room Type" onChange={Changefn}/>
                <label htmlFor="rooms">Number of Rooms</label>
                <input value={FormVal.rooms} name= 'rooms' id="rooms" placeholder="Number of Rooms" onChange={Changefn}/>
                <label htmlFor="rent">Rent</label>
                <input value={FormVal.rent} name= 'rent' id="rent" placeholder="Rent" onChange={Changefn}/>
                <label htmlFor="ownerNo">Owner Number</label>
                <input value={FormVal.ownerNo} name= 'ownerNo' id="ownerNo" placeholder="Owner Number" onChange={Changefn}/>
                <label htmlFor="employeeNo">Employee Number</label>
                <input value={FormVal.employeeNo} name= 'employeeNo' id="employeeNo" placeholder="Employee Number" onChange={Changefn}/>
                <label htmlFor="branchNo">Branch Number</label>
                <input value={FormVal.branchNo} name= 'branchNo' id="branchNo" placeholder="Branch Number" onChange={Changefn}/>
                <label htmlFor="picture">Picture</label>
                <input value={FormVal.picture} name= 'picture' id="picture" placeholder="Picture" onChange={Changefn}/>
                <label htmlFor="floorPlan">Floor Plan</label>
                <input value={FormVal.floorPlan} name= 'floorPlan' id="floorPlan" placeholder="Floor Plan" onChange={Changefn}/>
                <label htmlFor="dateFrom">From Date</label>
                <input value={FormVal.dateFrom} name= 'dateFrom' type="date" id="dateFrom" placeholder="From Date" onChange={Changefn}/>
                <label htmlFor="dateTo">To date</label>
                <input value={FormVal.dateTo} name= 'dateTo' type="date" id="dateTo" placeholder="To Date" onChange={Changefn}/>
                <label htmlFor="email">Email</label>
                <input value={FormVal.email} name= 'email' type="email" placeholder="youremail@gmail.com" id="email" onChange={Changefn}/>
                <button type="submit">Register</button>
            </form>
            
        </div>
    )
}