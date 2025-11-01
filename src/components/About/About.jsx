import React from 'react'
import './About.css';
import profile_img from "../../assets/Profile1.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="about icon"/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="Image" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate and results-driven Full Stack Developer skilled in Java, Spring Boot, React, HTML, CSS, JavaScript and SQL. I specialize in building responsive, user-friendly web applications with clean, efficient, and scalable code.</p>

                        <p>My passion for web development is not only reflected in my experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>JAVA</p><hr style={{width: "50%"}} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}} /></div>
                        <div className="about-skill"><p>SpringBoot</p><hr style={{width: "50%"}} /></div>
                        <div className="about-skill"><p>MySQL</p><hr style={{width: "50%"}} /></div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YOE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div> */}
        </div>
    )
}

export default About;

