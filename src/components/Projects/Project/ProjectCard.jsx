import {Link} from "react-router-dom";
import "../Project/ProjectCard.css";

function ProjectCard ({project}) {
   
       return (
        <Link //enlace SPA sin recarga a la ruta del detalle
            to={`/project/${project.id}`} //Construye la url con el id del proyecto   
            className="card-link" //clase para estilos del enlace que envuelve la tarjeta
            >
                <div className="card">
                    <img src={project.cover} alt={project.title} className="card-image"/>
                       </div>
                         <>
                            <h3 className="card-title">{project.title}</h3>
                </>
            </Link>
    )
}

export default ProjectCard;
