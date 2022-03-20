import React from 'react';
import {  Link } from "react-router-dom";
import "./navbar.css";


const Navbar= () =>{
  
  return (
  <div className='nav'>
    
    <li>
      <Link to="/App">Home</Link>
    </li>
    
    <li>
      <Link to="/Creator">Creator</Link>
    </li>
    

  </div>
  );
}
export default Navbar;