import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return(
       <header>
           <div className="container">
               <a href="/">
                    <img className="nav-logo" src={require("../../images/monstera-leaf.png")} alt="logo" />
               </a>
               <nav>
                   <NavLink exact activeClassName="active" to="/">
                       Home
                   </NavLink>
                   <NavLink activeClassName="active" to="/post">
                       Blog Post
                   </NavLink>
                   <NavLink activeClassName="active" to="/project">
                       Projects
                   </NavLink>
                   <NavLink activeClassName="active" to="/about">
                       About Me!
                   </NavLink>
               </nav>
           </div>
       </header> 
    )
}