import React from 'react'
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import shoppingCart from "../../assets/project_1.png";
import blogPost from "../../assets/project_2.jpg";

const MyWork = () => {
    return (
        <div id="work" className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt=""/>
            </div>

            {/* <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <img src={work.w_img} key={index} alt="" />
                })}
            </div> */}

            <div className="mywork-container">
                <div className="project-card">
                    <img src={shoppingCart} alt="Shopping Cart" />
                    <h3>Shopping Cart</h3>
                    <p>
                    Developed an e-commerce website with a shopping cart system allowing
                    users to browse products, add/remove items, update quantities, and
                    view the total price in real time.
                    </p>
                </div>

                <div className="project-card">
                    <img src={blogPost} alt="Top Courses" />
                    <h3>Journal Web App</h3>
                    <p>
                    Developed a Journal Web App that allows users to create, read, update, and delete personal posts with secure authentication and authorization, ensuring only authorized users can manage their own entries.
                    </p>
                </div>
            </div>

            <div className="mywork-showmore">
                <p>Working on more...</p>
                {/* <img src={arrow_icon} alt="arrow icon"/> */}
            </div>
        </div>
    )
}

export default MyWork;