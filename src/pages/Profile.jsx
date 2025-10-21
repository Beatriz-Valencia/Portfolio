import "./Profile.css";
// import SamplePicture from "../assets/SamplePicture.jpg";
import FotoPortatilColor from "../assets/portfolio-working-area-pic-zoom-out.png";

export default function Profile() {
  return (
    <section className="profile">
     
      <div className="textProfile">
        <p>
        I’ve spent over a decade leading large-scale technical and strategic projects in London and working with cross-functional international teams — at iconic venues such as the British Library, 
     the Natural History Museum, and the Royal Opera House. Originally from Valencia, I have now returned to Spain to focus my career on what I enjoy most: 
     digital products and tech projects. I have experiencie working with IT teams, in data projects and within agile environments.
     </p>
     <p>
      I’ve always loved working in teams and coordinating people. 
     In the UK, I became a PRINCE2 Practitioner and a Scrum Master, and more recently an ITIL 4 Practitioner. 
     I have been programming for a long time, and recently completed the Full-Stack Development bootcamp at The Bridge, where I deepened my knowledge in technologies such as HTML, CSS, JavaScript, React, and Node.js;
     databases like MongoDB and SQL; and version control tools like GitHub. I’ve discovered a genuine passion for programming, and would love to put what I’ve learned into practice
    joining a technical team.
        </p>
      </div>
      {/* <img src={SamplePicture} alt="foto trabajando con portátil" /> */}
      <img src={FotoPortatilColor} alt="foto de portátil en espacio de trabajo"/>
    </section>
  );
}
