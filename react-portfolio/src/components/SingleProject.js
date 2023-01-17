import React from 'react';


const ProjectCard = () => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card mb-3">
        <img src="../utils/images/Homepage.jpg" className="card-img" alt="..."></img>
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                </div>

        </div>
        </div>
    )
}

export default ProjectCard