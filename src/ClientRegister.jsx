import react, { useState } from "react";

export const ClientRegister = (props) => {
    const [FormVal, setFormVal] = useState({
        ID: '',
        clientNo: '',
        fName: '',
        lName: '',
        telNo: '',
        Street: '',
        City: '',
        PostCode: '',
        email: '',
        JoinedOn: '',
        Region: '',
        preType: '',
        maxRent: ''
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
          const response = await fetch('http://localhost:2023/ClientRegister', parameters);
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
                <h2 style={{color:"black"}}>REGISTER</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="ID">Client ID</label>
                <input value={FormVal.ID} name= 'ID' id="ID" placeholder="Client ID"onChange={Changefn}/>
                <label htmlFor="clientNO">Client Number</label>
                <input value={FormVal.clientNo} name= 'clientNo' id="clientNo" placeholder="Client Number" onChange={Changefn}/>
                <label htmlFor="fName">First Name</label>
                <input value={FormVal.fName} name= 'fName' id="fName" placeholder="First Name" onChange={Changefn}/>
                <label htmlFor="lName">Last Name</label>
                <input value={FormVal.lName} name= 'lName' id="lName" placeholder="Last Name" onChange={Changefn}/>
                <label htmlFor="telNo">Telephone Number</label>
                <input value={FormVal.telNo} name= 'telNo' id="telNo" placeholder="Telephone Number" onChange={Changefn}/>
                <label htmlFor="Street">Street</label>
                <input value={FormVal.Street} name= 'Street' id="Street" placeholder="Street" onChange={Changefn}/>
                <label htmlFor="City">City</label>
                <input value={FormVal.City} name= 'City' id="City" placeholder="City" onChange={Changefn}/>
                <label htmlFor="email">Email</label>
                <input value={FormVal.email} name= 'email' type="email" placeholder="youremail@gmail.com" id="email" onChange={Changefn}/>
                <label htmlFor="PostCode">PostCode</label>
                <input value={FormVal.PostCode} name= 'PostCode' id="PostCode" placeholder="PostCode" onChange={Changefn}/>
                <label htmlFor="joinedOn">Joining Date</label>
                <input value={FormVal.JoinedOn} name= 'JoinedOn' type="date" id="JoinedOn" placeholder="Joined Date" onChange={Changefn}/>
                <label htmlFor="Region">Region</label>
                <input value={FormVal.Region} name= 'Region' id="Region" placeholder="Region" onChange={Changefn}/>
                <label htmlFor="preType">Property Type</label>
                <input value={FormVal.preType} name= 'preType' id="preType" placeholder="Type" onChange={Changefn}/>
                <label htmlFor="maxRent">Maximum rent</label>
                <input value={FormVal.maxRent} name= 'maxRent' id="maxRent" placeholder="Maximum Rent" onChange={Changefn}/>
                <button type="submit">REGISTER</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('ClientLogin')}>Already have an account? Login here</button>
        </div>
    )
}