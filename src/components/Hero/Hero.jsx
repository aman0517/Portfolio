import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Profile1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Aman-Verma_resume_1.pdf";

const Hero = () => {

     // Function to trigger resume download
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Aman-Verma_resume_1.pdf"; // The file name for download
        link.click();
    };

    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="Hero Image" />
            <h1 className="typing"><span>I am Aman Verma, </span>a passionate full-stack java developer</h1>
            <p>Versatile software developer skilled in building robust front-end interfaces and efficient back-end systems.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume" onClick={handleDownload}>My Resume</div>
            </div>
        </div>
    );
};

export default Hero;
