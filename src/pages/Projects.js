import React from 'react';
import ProjectCard from '../components/SingleProject';
import  projectList  from '../utils/projectList';



const Projects = () => {
    return (
        <div className="container projects-page" style={{display:'flex', justifyContent: 'space-between',
        flexWrap: 'wrap'}}>
            {/* <div className="flex-item single-project-container"> */}
                {projectList.map(project =>
                (<ProjectCard
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    url={project.url}
                    gitHub={project.gitHub} />))}
        </div>
    )
}

export default Projects