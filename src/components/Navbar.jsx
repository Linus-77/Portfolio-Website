
import logo from "../assets/logo.png";
import {FaLinkedin } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import {FaSquareXTwitter } from "react-icons/fa6";
import {FaInstagram } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-0">
    <div className="flex-shrink-0 items-center">
        <img src={logo} alt="logo" className= "mx- w-15 h-12" />
    </div>
    <div className="m-8 flex items-center justify-centre gap-4 text-2xl"> 
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
        <FaLinkedin/>

    </div>
  </nav>
}

export default Navbar
