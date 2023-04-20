// import React, { useState } from "react";
// import "./Header.css";
// import About from './About'
// import App from '../App'



// const Header = (props) => {
  

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '50px' }}>
//       <div className="container-fluid">
//         <button className="navbar-brand" onClick={()=>props.onFormSwitch('DreamHouse')}>DREAMHOME</button>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">

//               <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('About')}>
//                 ABOUT
//               </button>
              
//             </li>
//             <li className="nav-item">

//               <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('Login')}>
//                 LOGIN
//               </button>

//             </li>
//             </ul>
//           </div>
//       </div>
     
//     </nav>
//   )
// }

// export default Header;


// import React from "react";
// import "./Header.css";

// console.log(isLoggedIn);


// const Header = ({ isLoggedIn, onFormSwitch }) => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '50px' }}>
//       <div className="container-fluid">
//         <button className="navbar-brand" onClick={()=>onFormSwitch('DreamHouse')}>
//           {isLoggedIn ? 'HOME' : 'DREAMHOME'}
//         </button>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               {isLoggedIn ? (
//                 <button className="nav-link active" aria-current="page" onClick={()=>onFormSwitch('CreateBooking')}>
//                   CREATE BOOKING
//                 </button>
//               ) : (
//                 <button className="nav-link active" aria-current="page" onClick={()=>onFormSwitch('About')}>
//                   ABOUT
//                 </button>
//               )}
//             </li>
//             <li className="nav-item">
//               {isLoggedIn ? (
//                 <button className="nav-link active" aria-current="page" onClick={()=>onFormSwitch('')}>
//                   LOG OUT
//                 </button>
//               ) : (
//                 <button className="nav-link active" aria-current="page" onClick={()=>onFormSwitch('Login')}>
//                   LOGIN
//                 </button>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// import React from "react";
// import "./Header.css";

// const Header = (props) => {

//   const isLoggedIn = props.isLoggedIn;

//   const handleLogout = () => {
//     // Call the logout function passed as a prop from the parent component
//     props.onLogout();
//   }

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '50px' }}>
//       <div className="container-fluid">
//         <button className="navbar-brand" onClick={()=>props.onFormSwitch('DreamHouse')}>DREAMHOME</button>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('About')}>
//                 ABOUT
//               </button>
//             </li>
//             { isLoggedIn ?
//               <li className="nav-item">
//                 <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('DreamHouse')}>
//                   HOME
//                 </button>
//               </li>
//               :
//               <li className="nav-item">
//                 <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('Login')}>
//                   LOGIN
//                 </button>
//               </li>
//             }
//             { isLoggedIn &&
//               <li className="nav-item">
//                 <button className="nav-link active" aria-current="page" onClick={handleLogout}>
//                   LOGOUT
//                 </button>
//               </li>
//             }
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Header;

// import React from "react";
// import "./Header.css";

// const Header = (props) => {

//   const isLoggedIn = props.isLoggedIn;

//   const handleLogout = () => {
//     // Call the logout function passed as a prop from the parent component
//     props.onLogout();
//   }

//   return (
//     <nav className={isLoggedIn ? "navbar navbar-expand-lg bg-primary" : "navbar navbar-expand-lg bg-secondary"} style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '50px' }}>
//       <div className="container-fluid">
//         <button className="navbar-brand" onClick={()=>props.onFormSwitch('DreamHouse')}>DREAMHOME</button>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('About')}>
//                 ABOUT
//               </button>
//             </li>
//             { isLoggedIn ?
//               <li className="nav-item">
//                 <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('DreamHouse')}>
//                   HOME
//                 </button>
//               </li>
//               :
//               <li className="nav-item">
//                 <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('Login')}>
//                   LOGIN
//                 </button>
//               </li>
//             }
//             { isLoggedIn &&
//               <li className="nav-item">
//                 <button className="nav-link active" aria-current="page" onClick={handleLogout}>
//                   LOGOUT
//                 </button>
//               </li>
//             }
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Header;
import React from "react";
import "./Header.css";


const Header = (props) => {
  const isLoggedIn = props.isLoggedIn;

  const handleLogout = () => {
    // Call the logout function passed as a prop from the parent component
    props.onLogout();
    window.location.href = './DreamHome';
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '50px' }}>
      <div className="container-fluid">
        <button className="navbar-brand" onClick={()=>props.onFormSwitch('DreamHouse')}>AAVAS</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {props.isLoggedIn ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('Indexx')}>
                  HOME
                </button>
                
              </li>
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={handleLogout}>
                  LOGOUT
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('About')}>
                  ABOUT
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={()=>props.onFormSwitch('Login')}>
                  LOGIN
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
  
}

export default Header;
