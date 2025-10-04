import {useParams, useNavigate} from "react-router-dom";
import data from "../data/data.js";
import ProjectDetail from "../Projects/ProjectDetail.css";

//Transforma un URL de Youtube en URL embedded
function toYoutubeEmbed(url) {
    try{
        const u = new URL(url) { //Parsea la cadena a objecto URL
            if (u.hostname.includes("youtube.com")) {
            const id = u.searchParams.get("v"); //extrae parámetro v (id del video)
            return id? `https://www.youtube.com/embed/${id}` :url;  //devuelve URL /embed/ID   
        }
        // if (u.hostname.includes("youtu.be")){
        //     const id = u.pathname.replace("/", "");
        //     return id? `https://www.youtube.com/embed/${id}` :url // devuelve URL embedebible
        // }
    }
        catch {
return url;
        }
}