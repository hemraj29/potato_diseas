import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import "./App.css"
import logo from "./assest/logo.png"
export default function NavBar(){

  return(
        <div className="navbar">
          <div className="logo">
            <img src={logo}/>
          </div>
           <ul className="nav-links">
              <Link to="/"><span><button>Home</button></span></Link>
              <Link to="/about"><span><button>About</button></span></Link>
              <Link to="/shop"><span><button>Model Description</button></span></Link>
           </ul>
        </div>
  );

}