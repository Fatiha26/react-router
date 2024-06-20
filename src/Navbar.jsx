import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return(
        <>
           <div className="main_heading">
           <NavLink exact activeClassName="active_class" to='/about'>About</NavLink>
           <NavLink exact activeClassName="active_class" to='/service'>Service</NavLink>      
           <NavLink exact activeClassName="active_class" to='/contact'>Contact</NavLink>    
           </div>
        </>
    )
}

export default Navbar;