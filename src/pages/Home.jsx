import "./Home.css";
import foto from "../assets/foto.jpg";

export default function Home() {
  return (
    <div className="home">
      <h1 className="title_primary">BEATRIZ CONCHADO PEIRÓ</h1>
      <h3 className="text">
        Des marques accompagnées aux quatre coins du monde — France, Suisse,
        États-Unis, Sénégal, Madagascar, Côte d’Ivoire
      </h3>
      <h3 className="title_secondary">
        ACCOMPAGNER LES MARQUES D'AUJOURD'HUI À DEVENIR CELLES DE DEMAIN.
      </h3>
      <h5 className="title_terciary">BEATRIZ CONCHADO PEIRÓ</h5>
      <img src={foto} alt="foto de frente mirando a cámara" />
    </div>
  );
}
