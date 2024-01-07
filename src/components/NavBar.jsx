import React from "react";
import logo from '../img/logo.png'
const NavBar=()=>{
    return(
        <div className="flex items-center justify-between mx-2 border border-black">
            <img className="h-20 w-20" src={logo} alt="logo"/>
            <ul className="flex text-center gap-6 font-Sans font-semibold">
                <li className="caret-lime-200 font-Sans cursor-pointer hover:text-red-300">Home</li>
                <li className="cursor-pointer  hover:text-red-300">Properties</li>
                <li className="cursor-pointer  hover:text-red-300">Project</li>
                <li className="cursor-pointer  hover:text-red-300">Services</li>
                <li className="cursor-pointer  hover:text-red-300">Contact Us</li>
            </ul>
        </div>
    )
}
export default NavBar