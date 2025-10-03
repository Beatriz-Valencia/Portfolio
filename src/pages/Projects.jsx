import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-container">
      <header className="projects-header">
        <div>
          <h1 className="projects-title">Projects</h1>
        </div>
      </header>
      <div className="projects-grid"> {/*grid responsive para renderizado de tarjetas*/}
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />//renderiza una tarjeta por proyecto
        ))}
      </div>
    </section>
  );
}
