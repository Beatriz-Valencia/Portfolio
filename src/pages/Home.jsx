import "./Home.css";
import foto from "../assets/foto.jpg";

export default function Home() {
  return (
    <section className="home">
      <h4 className="title_primary">BEATRIZ CONCHADO PEIRÓ</h4>
      <h3 className="text">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, mi orci praesent lacus nisl lobortis, nam vivamus placerat erat sollicitudin fusce. 
      </h3>
      <h2 className="title_secondary">
        VENETATIS NOSTRA LIGULA MAFNIS FERMENTUM FAUCIBUS APTENT PALLENTESQUE
      </h2>
      <h1 className="title_terciary">BEATRIZ CONCHADO PEIRÓ</h1>
      <img src={foto} alt="foto de frente mirando a cámara" />
    </section>
  );
}
