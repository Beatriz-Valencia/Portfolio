import "./Profile.css";
// import SamplePicture from "../assets/SamplePicture.jpg";
import FotoPortatilColor from "../assets/foto-portatil-bw.png";

export default function Profile() {
  return (
    <section className="profile">
     
      <div className="textProfile">
        <p>
        I’ve spent over a decade leading design and construction projects in London — at iconic venues such as the British Library, 
     the Natural History Museum, and the Royal Opera House — and I’m now pivoting my career in Spain to focus on what I enjoy most: 
     digital products and tech projects. Let me tell you a bit more about me: I studied Architecture at the Polytechnic University of Valencia and 
     specialised in management of large-scale strategic and technical projects, working in cross-functional international teams.
     </p>
     <p>
      I’ve always loved working in teams and coordinating people. 
     My career took me to the UK for over a decade, where I became a PRINCE2 Practitioner, and more recently a Scrum Master and ITIL 4 Practitioner. 
     I recently completed the Full-Stack Development bootcamp at The Bridge, where I learned technologies such as HTML, CSS, JavaScript, React, and Node.js;
     databases like MongoDB and SQL; and version control tools like GitHub. I’ve discovered a genuine passion for programming, and would love to put what I’ve learned into practice 
     by joining a technical team.
        </p>
      </div>
      {/* <img src={SamplePicture} alt="foto trabajando con portátil" /> */}
      <img src={FotoPortatilColor} alt="foto trabajando con el portátil"/>
    </section>
  );
}
