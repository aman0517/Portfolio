import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Profile1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="Hero Image" />
            <h1><span> I am Aman Verma, </span>a passionate Full Stack Java Developer.</h1>
            <p>Versatile software developer skilled in building robust front-end interfaces and efficient back-end systems.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;