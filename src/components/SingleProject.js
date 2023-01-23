import React, { useState } from 'react';


// const StyledCard = 

const ProjectCard = (props) => {
    const styles = {
        card: {      
            backgroundImage: `url('${props.image}')`,
            height: '350px', 
            width:'350px'
        },
    
    
    }
    return (
        <div className="card single-project" style={styles.card}>
            <div className="card-info" >
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><small>{props.url}</small></p>
            </div>

        </div>
    )
}

export default ProjectCard