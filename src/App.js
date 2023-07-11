

// import React, { useState } from "react";
// import Header from "./Components/Header";
// import "./App.css";
// import { ClientLogin } from "./ClientLogin";
// import { ClientRegister } from "./ClientRegister";
// import { OwnerLogin } from "./OwnerLogin";
// import { OwnerRegister } from "./OwnerRegister";
// import { AdminLogin } from "./AdminLogin";
// import Login from "./Components/Login";
// import DreamHouse from "./Components/DreamHouse";
// import About from "./Components/About";
// import ViewProperty from "./ViewProperty";
// import CreateBooking from "./CreateBooking";
// import ReviewViewing from "./ReviewViewing";
// import Indexx from "./Indexx";
// import { AdminDashboard } from "./AdminDashboard";


// function App() {
//   const [currentForm, setCurrentForm] = useState("DreamHouse");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false); // add a state variable to track if the user is an admin
//   const toggleForm = (formName) => {
//     console.log(formName);
//     switch (formName) {
//       case "Login":
//         setCurrentForm("Login");
//         break;
//       case "ClientLogin":
//         setCurrentForm("ClientLogin");
//         break;
//       case "ClientRegister":
//         setCurrentForm("ClientRegister");
//         break;
//       case "OwnerLogin":
//         setCurrentForm("OwnerLogin");
//         break;
//       case "OwnerRegister":
//         setCurrentForm("OwnerRegister");
//         break;
//       case "AdminLogin":
//         setCurrentForm("AdminLogin");
//         break;
//       case "AdminDashboard": // add new case for AdminDashboard
//         setCurrentForm("AdminDashboard");
//         break;
//       case "About":
//         setCurrentForm("About");
//         break;
//       case "ViewProperty":
//         setCurrentForm("ViewProperty");
//         break;
//       case "Indexx":
//         setCurrentForm("Indexx");
//         break;
//       case "ReviewViewing":
//         setCurrentForm("ReviewViewing");
//         break;
//       case "CreateBooking":
//         setCurrentForm("CreateBooking");
//         break;
//       default:
//         setCurrentForm("DreamHouse");
//     }
//   };


//   const handleLogin = (isLoggedIn, isAdmin) => {
//     setIsLoggedIn(isLoggedIn);
//     setIsAdmin(isAdmin); // set the isAdmin state variable based on the user type
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsAdmin(false); // reset the isAdmin state variable on logout
//   };
//   return (
//     <div className="App">
//       <Header
//         isLoggedIn={isLoggedIn}
//         isAdmin={isAdmin} // pass the isAdmin state variable to the Header component
//         onLogout={handleLogout}
//         onFormSwitch={toggleForm}
//       />
//       {currentForm === "Login" ? (
//         <Login onFormSwitch={toggleForm} setIsLoggedIn={handleLogin} />) :
//         currentForm === "ClientLogin" ? (
//           <ClientLogin onFormSwitch={toggleForm} setIsLoggedIn={handleLogin} />) :
//           currentForm === "ClientRegister" ? (
//             <ClientRegister onFormSwitch={toggleForm} />) :
//             currentForm === "OwnerLogin" ? (
//               <OwnerLogin onFormSwitch={toggleForm} />) :
//               currentForm === "OwnerRegister" ? (
//                 <OwnerRegister onFormSwitch={toggleForm} />) :
//                 currentForm === "AdminLogin" ? (
//                   <AdminLogin onFormSwitch={toggleForm} setIsLoggedIn={handleLogin} />) :
//                   currentForm === "AdminDashboard" ? (
//                     <AdminDashboard onFormSwitch={toggleForm} />) :
//                     currentForm === "ViewProperty" ? (
//                       <ViewProperty onFormSwitch={toggleForm} />) :
//                       currentForm === "Indexx" ? (
//                         <Indexx onFormSwitch={toggleForm} />) :
//                         currentForm === "ReviewViewing" ? (
//                           <ReviewViewing onFormSwitch={toggleForm} />) :
//                           currentForm === "CreateBooking" ? (
//                             <CreateBooking onFormSwitch={toggleForm} />) :
//                             currentForm === "About" ? (
//                               <About />) :
//                               currentForm === "DreamHouse" && <DreamHouse />}
//     </div>
//   );
// }

// export default App;

 // const handleLogin = (isLoggedIn) => {
  //   setIsLoggedIn(isLoggedIn);
  // };
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  import React, { useState, useEffect } from "react";
  import Header from "./Components/Header";
  import "./App.css";
  import SpeechRecognitionTest from "./SpeechRecognitionTest.jsx";
  import { ClientLogin } from "./ClientLogin";
  import { ClientRegister } from "./ClientRegister";
  import { OwnerLogin } from "./OwnerLogin";
  import { OwnerRegister } from "./OwnerRegister";
  import { AdminLogin } from "./AdminLogin";
  import Login from "./Components/Login";
  import DreamHouse from "./Components/DreamHouse";
  import About from "./Components/About";
  import ViewProperty from "./ViewProperty";
  import CreateBooking from "./CreateBooking";
  import ReviewViewing from "./ReviewViewing";
  import Indexx from "./Indexx";
  import { AdminDashboard } from "./AdminDashboard";
  
  function App() {
    const [currentForm, setCurrentForm] = useState("DreamHouse");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    };
  
    const handleLogin = (isLoggedIn, isAdmin) => {
      setIsLoggedIn(isLoggedIn);
      setIsAdmin(isAdmin);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      setIsAdmin(false);
    };
  
    useEffect(() => {
      const speak = (text) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
      };
  
      const speakWelcomeMessage = () => {
        speak("Welcome! You are on the welcome page. To move further, say Dreamhouse, About, or Login.");
      };
  
      speakWelcomeMessage();
    }, []);
  
    return (
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          isAdmin={isAdmin}
          onLogout={handleLogout}
          onFormSwitch={toggleForm}
        />
        <SpeechRecognitionTest/>
        {currentForm === "Login" ? (
          <Login onFormSwitch={toggleForm} setIsLoggedIn={handleLogin} />
        ) : currentForm === "ClientLogin" ? (
          <ClientLogin onFormSwitch={toggleForm} setIsLoggedIn={handleLogin} />
        ) : currentForm === "ClientRegister" ? (
          <ClientRegister onFormSwitch={toggleForm} />
        ) : currentForm === "OwnerLogin" ? (
          <OwnerLogin onFormSwitch={toggleForm} />
        ) : currentForm === "OwnerRegister" ? (
          <OwnerRegister onFormSwitch={toggleForm} />
        ) : currentForm === "AdminLogin" ? (
          <AdminLogin onFormSwitch={toggleForm} setIsLoggedIn={handleLogin} />
        ) : currentForm === "AdminDashboard" ? (
          <AdminDashboard onFormSwitch={toggleForm} />
        ) : currentForm === "ViewProperty" ? (
          <ViewProperty onFormSwitch={toggleForm} />
        ) : currentForm === "Indexx" ? (
          <Indexx onFormSwitch={toggleForm} />
        ) : currentForm === "ReviewViewing" ? (
          <ReviewViewing onFormSwitch={toggleForm} />
        ) : currentForm === "CreateBooking" ? (
          <CreateBooking onFormSwitch={toggleForm} />
        ) : currentForm === "About" ? (
          <About />
        ) : currentForm === "DreamHouse" && <DreamHouse />}
      </div>
    );
  }
  
  export default App;
  
































































// return (
//   <div className="App">
//   <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//   {currentForm === "DreamHouse" && <DreamHouse toggleForm={toggleForm} handleLogin={handleLogin} />}
//   {currentForm === "About" && <About toggleForm={toggleForm} handleLogin={handleLogin} />}
//   {currentForm === "ViewProperty" && <ViewProperty toggleForm={toggleForm} handleLogin={handleLogin} />}
//   {currentForm === "CreateBooking" && <CreateBooking toggleForm={toggleForm} handleLogin={handleLogin} />}
//   {currentForm === "ReviewViewing" && <ReviewViewing toggleForm={toggleForm} handleLogin={handleLogin} />}
//   {currentForm === "Login" && <Login toggleForm={toggleForm} handleLogin={handleLogin} />}
//   {currentForm === "ClientLogin" && <ClientLogin toggleForm={toggleForm} handleLogin={handleLogin} />}
//   {currentForm === "ClientRegister" && <ClientRegister toggleForm={toggleForm} />}
//   {currentForm === "OwnerLogin" && <OwnerLogin toggleForm={toggleForm} handleLogin={handleLogin} />}
//   {currentForm === "OwnerRegister" && <OwnerRegister toggleForm={toggleForm} />}
//   {currentForm === "AdminLogin" && <AdminLogin toggleForm={toggleForm} handleLogin={handleLogin} />}
//   </div>
//   );