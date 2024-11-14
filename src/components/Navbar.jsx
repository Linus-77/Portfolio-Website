
import logo from "../assets/logo.png";
import {FaLinkedin } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import {FaSquareXTwitter } from "react-icons/fa6";
import {FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-0">
    <div className="flex-shrink-0 items-center">
        <img src={logo} alt="logo" className= "mx- w-15 h-12" />
    </div>
    <div className="m-8 flex items-center justify-centre gap-4 text-2xl"> a
       <a href="https://github.com/Linus-77" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
        <FaInstagram/>
        <FaSquareXTwitter/>
        <FaLinkedin/>
    </div>
  </nav>
}

export default Navbar
