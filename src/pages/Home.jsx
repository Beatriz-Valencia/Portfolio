import "./Home.css";
import foto from "../assets/foto.jpg";

export default function Home() {
  return (
    <section className="home">
      {/* <h4 className="title_primary">BEATRIZ CONCHADO PEIRÓ</h4> */}
      <h3 className="text">
        React | Node | Express | JavaScript | CSS | MongoDB | SQL Strong track record in project leadership and team management
      </h3>
      <h2 className="title_secondary">
        FULL-STACK DEVELOPER SPECIALISING IN FRONTEND AND BACKEND ARCHITECTURES
      </h2>
      <h1 className="title_terciary">BEATRIZ CONCHADO PEIRÓ</h1>
      <img src={foto} alt="foto de frente mirando a cámara" />
    </section>
  );
}
