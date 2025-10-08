import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data";
import "../../components/Projects/ProjectDetail.css";

//Transforma un URL de Youtube en URL embedded
function toYoutubeEmbed(url) {
  try {
    const u = new URL(url); //Parsea la cadena a objecto URL
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v"); //extrae parámetro v (id del video)
      return id ? `https://www.youtube.com/embed/${id}` : url; //devuelve URL /embed/ID
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1); //quita la barra inicial
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    return url;
  } catch (e) {
    return url;
  }
}

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
        <div className="detail-description">
            <span>{project.description}</span>
            <button onClick={()=> navigate(-1)} className="button-navigate">
                Return to projects
            </button>
        </div>
        </section>
  );
}


