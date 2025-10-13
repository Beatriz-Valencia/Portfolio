import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data";
import "../../components/Projects/ProjectDetail.css";
import Button from "../Button";

import {
    SiHtml5,
    SiCss3,
    SiJavascript, 
    SiReact,
    SiRedux, 
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiSwagger,
    SiUnsplash,
} from "react-icons/si";
import {TbCode} from "react-icons/tb";

const ICONS = {
    html: SiHtml5,
    "html5": SiHtml5,
    css: SiCss3,
    "css3": SiCss3,
    javascript: SiJavascript,
    js: SiJavascript,
    react: SiReact,
    redux: SiRedux,
    "node.js": SiNodedotjs,
    node: SiNodedotjs,
    express: SiExpress,
    mongodb: SiMongodb,
    postman: SiPostman,
    swagger: SiSwagger,
    unsplash: SiUnsplash,
    "unsplash api": SiUnsplash,

}



// //Transforma un URL de Youtube en URL embedded
// function toYoutubeEmbed(url) {
//   try {
//     const u = new URL(url); //Parsea la cadena a objecto URL
//     if (u.hostname.includes("youtube.com")) {
//       const id = u.searchParams.get("v"); //extrae parámetro v (id del video)
//       return id ? `https://www.youtube.com/embed/${id}` : url; //devuelve URL /embed/ID
//     }
//     if (u.hostname === "youtu.be") {
//       const id = u.pathname.slice(1); //quita la barra inicial
//       return id ? `https://www.youtube.com/embed/${id}` : url;
//     }
//     return url;
//   } catch (e) {
//     return url;
//   }
// }

export default function ProjectDetail() {
  const { id } = useParams(); //lee el parámetro :id de la URL
  const navigate = useNavigate();
  const project = data.find((p) => String(p.id) === String(id));
  return (
    <section className="detail-container">
      <h2 className="detail-title">{project.title}</h2>
      <div className="video">
        <video 
            className="video-element"
            src={project.videoPath}
            controls
            autoPlay
            muted
        />
        </div>

        <div className="stack">
            <img src={project.images} className="detail-image" alt={project.title}/>
        </div>
        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
            <div className="techs">
                <ul className="tech-list">
                {project.technologies.map(t => {
                    const key = t.trim().toLowerCase();
                    const Icon = ICONS[key] || TbCode; //fallback genérico
                    return (
                        <li key={t} className="tech-chip" title={t}>
                                <Icon size={16}/>
                                <span>{t}</span>
                        </li>   
                     )
                })}
                </ul>
            </div>
        )}
        <div className="detail-description">
            <span>{project.description}</span>
            <Button onClick={()=> navigate("/projects")} 
            className="general_button" 
            label="[RETURN TO PROJECTS]"/>
        </div>
        </section>
  );
}


