// import { Component } from "react";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-body-tertiary">
//         <div className="container-fluid">
//           <span className="navbar-brand mb-0 h1">
//             Navbar
//             {this.props.totalCount > 0 &&
//             (
//               <span className="badge bg-secondary m-2">
//               {this.props.totalCount}
//               </span>
//             )} 
//           </span>
//         </div>
//       </nav>
//     );
//   }
// }

import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link to='/' style={{ textDecoration: "none" }}>
        <span className="navbar-brand mb-0 h1 text-white cursor-pointer" >
          E-commerce
        </span>
        </Link>
        <div className="position-relative mx-3 mt-2 d-inline-flex align-items-center cursor-pointer" >
        <Link to="/checkout" style={{ textDecoration: "none" }}> {/* Cart icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="currentColor"
            className="bi bi-cart-fill text-white mr-3"
            viewBox="0 0 16 16"
          >
           
            <path d="M2 1.5a.5.5 0 0 1 .5-.5h1.72l.53 1.598A1.5 1.5 0 0 0 5.72 3h4.56a1.5 1.5 0 0 0 1.47-1.902l.53-1.598h1.72a.5.5 0 0 1 .485.618l-1.545 5.454A2 2 0 0 1 11.72 8H5.279a2 2 0 0 1-1.94-2.428L2.515 2.118A.5.5 0 0 1 2 1.5zm1.146 2.598L4.72 7H11.28l1.574-2.902H3.146zM4.5 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
          </svg>
          </Link>
          {props.totalCount > 0 && (
            <span className="badge bg-danger border border-danger rounded-circle position-absolute top-0 start-100 translate-middle">
              {props.totalCount}
            </span>
          )}
        </div>
      </div>
    </nav>
    

          
  
        );
}

export default Navbar