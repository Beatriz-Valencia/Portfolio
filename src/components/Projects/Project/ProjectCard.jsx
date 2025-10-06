import {Link} from "react-router-dom";
import "../Project/ProjectCard.css";

const SIZE_TO_CLASS = {
        sm: "card--sm",
        md: "card--md",
        lg: "card--lg"
}


function ProjectCard ({project}) {
    const sizeClass = SIZE_TO_CLASS[project.size] || "card--lg";
       return (
        <Link //enlace SPA sin recarga a la ruta del detalle
            to={`/project/${project.id}`} //Construye la url con el id del proyecto   
            className="card-link" //clase para estilos del enlace que envuelve la tarjeta
            >
                <div className={`card ${sizeClass}`}>
                    <img src={project.cover} alt={project.title} className="card-image"/>
                       </div>
                         <>
                            <h3 className="card-title">{project.title}</h3>
                </>
            </Link>
    )
}

export default ProjectCard;
