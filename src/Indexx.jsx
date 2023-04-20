// import React from "react";
// import { ClientRegister } from "./ClientRegister";

// const Index = (props) => {
//     const handleLogin = (e) => {
//         const selectedOption = e.target.value;
//         props.onFormSwitch(selectedOption);
//     };
//     return (
//         <div className="auth-form-container">
//             <h2>Welcome to DreamHome {ClientRegister.fName} </h2>
//             <div className="mission">
//                 <li className="nav-item dropdown">
//                     <ul>
//                         <select class="logindd" onChange={handleLogin}>
//                             <option value="">Select</option>
//                             <option value="ViewProperty">View Available Property</option>
//                             <option value="ReviewViewing">Review Viewed Property</option>

//                         </select>
//                     </ul>
//                 </li>
//             </div>
//             </div>
//             );
// };

//             export default Index;

// import React from "react";
// import { ClientRegister } from "./ClientRegister";

// const Index = (props) => {
//   const handleLogin = (option) => {
//     props.onFormSwitch(option);
//   };
//   return (
//     <div className="auth-form-container">
//       <h2>Welcome to DreamHome {ClientRegister.fName} </h2>
//       <div className="mission" style={{ display: "flex" }}>
//         <button onClick={() => handleLogin("ViewProperty")} style={{ marginRight: "10px" }}>
//           View Available Property
//         </button>
//         <button onClick={() => handleLogin("ReviewViewing")}>
//           Review Viewed Property
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Index;

// import React from "react";
// import { ClientRegister } from "./ClientRegister";

// const Index = (props) => {
//   const handleLogin = (option) => {
//     props.onFormSwitch(option);
//   };
//   return (
//     <div className="auth-form-container">
//       <h2>Welcome to DreamHome {ClientRegister.fName} </h2>
//       <form>
//       <div className="mission">
//         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
//           <button onClick={() => handleLogin("ViewProperty")} style={{ marginRight: "10px" }}>
//             View Available Property
//           </button>
//           <button onClick={() => handleLogin("ReviewViewing")}>
//             Review Viewed Property
//           </button>
//         </div>
//       </div>
//       </form>
//     </div>
//   );
// };

// export default Index;

import React from "react";
import { ClientRegister } from "./ClientRegister";

const Indexx = (props) => {
  const handleLogin = (option) => {
    console.log(ClientRegister.FormVal)
    props.onFormSwitch(option);
  };
  return (
    <div className="auth-form-container">
      <h2>Welcome to DreamHome {props.fName} </h2>
      <div className="mission" style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={() => handleLogin("ViewProperty")}>View Available Property</button>
        <br />
        <button onClick={() => handleLogin("ReviewViewing")}>Review Viewed Property</button>
      </div>
    </div>
  );
};

export default Indexx;


