import React from 'react'
import './Footer.css';
import Logo from '../Logo/Logo';
import user_icon from '../../assets/user_icon.svg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const Footer = () => {
return (
    <div className='footer'>
        {/* <div className="footer-top">
            <div className="footer-top-left">
                <Logo className="footer-custom-logo"/>
                <p>I’m Aman Verma — Full Stack Java Developer proficient in front-end and back-end development.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div> */}
        <hr />

        <div className="footer-bottom">
            <a href="https://www.linkedin.com/in/amanvermaaa" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/aman0517" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://leetcode.com/u/verma_aman0517/" target="_blank" rel="noopener noreferrer">
                <TbBrandLeetcode />
            </a>

            
            {/* <p className="footer-bottom-left">© 2025 Aman Verma. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p> 
                
            </div> */}
        </div>
    </div>
)
}

export default Footer
{/* <button>Subscribe</button> */}