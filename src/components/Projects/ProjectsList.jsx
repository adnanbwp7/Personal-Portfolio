import React from 'react'
import ProjectCards from './ProjectCards'

const ProjectsList = () => {
    return (
        <>
            <div className="projects" >
                <div className="about-txt" style={{ margin: '20px 0' }}>Projects</div>
                <div className="porject-container">
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                </div>
            </div>
        </>
    )
}

export default ProjectsList
