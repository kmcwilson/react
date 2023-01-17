import React, { useState } from 'react';
import travelBuddy from '../utils/images/Homepage.jpg';

const ProjectCard = () => {
    const [isEntering, setIsEntering] = useState(false);
    const handleMouseEnter = () => {
        setIsEntering(true);
    };
    const handleMouseOut = () => {
        setIsEntering(false);
    };
    return (
        <div onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseOut}>
            <div className="col-lg-4 col-md-6 col-sm-6">

                <div className="card mb-3">
                    <img src={travelBuddy} className="card-img" alt="..."></img>
                    <div className="card-img-overlay">

                        {isEntering && (
                            <div className="project-info" style={{background: "white"}}>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard