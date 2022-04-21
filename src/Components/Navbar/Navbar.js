import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return(
       <header>
           <div className="container">
               <nav>
                   <NavLink exact to="/" activeClassName="activLink">
                       Home
                   </NavLink>
                   <NavLink to="/post">
                       Blog Post
                   </NavLink>
                   <NavLink to="/project">
                       Projects
                   </NavLink>
                   <NavLink to="/about">
                       About Me!
                   </NavLink>
               </nav>
           </div>
       </header> 
    )
}