import React from "react";
import projects from "../data/data";
import "./Projects.css";
import ProjectCard from "../components/Projects/Project/ProjectCard";

export default function Projects() {
  return (
    <div className = "background">
    <section className="projects-container">
      <header className="projects-header">
          <h1 className="projects-title">PROJECTS</h1>
      </header>
      <div className="projects-grid"> {/*grid responsive para renderizado de tarjetas*/}
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />//renderiza una tarjeta por proyecto REVISAR
        ))}
      </div>
    </section>
    </div>
  );
}
