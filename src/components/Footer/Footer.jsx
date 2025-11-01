import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='footer'>
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
        </div>
        </div>
    );
};

export default Footer;
