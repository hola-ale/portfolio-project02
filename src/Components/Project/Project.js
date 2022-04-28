import React, { useEffect, useState} from "react";
import sanityClient from "../../client"
import "./Project.css"

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] {
            title, 
            date,
            place,
            description,
            projectType,
            link,
            tags 
        }`).then((data) => setProjectData(data)) 
        .catch(console.error)
    }, []);

    return(
        <main>
            <section>
                <h1 className="page-title">My project page</h1>
                <section className="projects-grid">
                    { projectData && projectData.map((project, index) => (
                    <article className="single-project ">
                        <h3>
                            <a href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                {project.title} 
                            </a>
                        </h3>
                        <div className="project-info"> 
                            <span className="project-info-details">
                                <strong>Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="project-info-details">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span className="project-info-details">
                                <strong>Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="link-to-view">
                                View The Project{" "}
                                <span roll="img" aria-label="righ pointer">
                                    👉 
                                </span>
                            </a>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span className="project-tag">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}