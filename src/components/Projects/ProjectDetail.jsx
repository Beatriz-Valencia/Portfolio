import {useParams, useNavigate} from "react-router-dom";
import data from "../../data/data";
import "../../components/Projects/ProjectDetail.css";

//Transforma un URL de Youtube en URL embedded
function toYoutubeEmbed(url) {
    try{
        const u = new URL(url) //Parsea la cadena a objecto URL
            if (u.hostname.includes("youtube.com")) {
            const id = u.searchParams.get("v"); //extrae parámetro v (id del video)
            return id? `https://www.youtube.com/embed/${id}` :url;  //devuelve URL /embed/ID   
        }
    }
        catch(e) {
            return url;
        }
}

export default function ProjectDetail () {
    const {id} = useParams(); //lee el parámetro :id de la URL
    const navigate = useNavigate();
    const project = data.find((p) => String(p.id) === String(id));
    return (
        <section className="detail-container">
             <h2 className="detail-title">{project.title}</h2>
                {<data value="" className="description"></data> && (
                    <p className ="detail-description">{project.description}</p>
                )}
                
                <div className="video">
                    <iframe className = "video-frame" src={toYoutubeEmbed(project.youtubeUrl)} title={`${project.title}- demo`} allow="autoplay" allowFullScreen/>
                    </div>
                <div className="stack"> 
                    <img
                    src={project.images}
                    className="detail-image"
                />
                
                </div>    
            <div className = "detail-actions">
                <button onClick={() => navigate(-1)} className="button-navigate"> Volver</button>
                <a href={project.youtubeUrl}
                target="_blank"
                className="button-youtube"
                >Ver Demo</a>
            </div>

            
        </section>
    )
}