import "./Profile.css";
// import SamplePicture from "../assets/SamplePicture.jpg";
import FotoPortatilColor from "../assets/portfolio-working-area-pic-zoom-out.png";

export default function Profile() {
  return (
    <section className="profile">
     
      <div className="textProfile">
        <p>
       IT Project Manager with over 10 years of experience leading project delivery, having developed a 
       significant part of my career in London. I currently manage technology projects end-to-end, from defining objectives 
       and planning through to execution, monitoring, and delivery. I also work daily in maintenance projects.
     </p>
     <p>
      Certified in ITIL 4, Scrum Master, and PRINCE2. What I enjoy most is working with people and creating the connections 
      that make great digital projects possible. I see the PM as the invisible glue that keeps everything moving: inspiring people,
      removing blockers, keeping communication open and human, and making sure everyone knows exactly where they are heading and why.
      I care a lot about creating spaces where technical and non-technical people can speak openly, challenge each other, 
      and collaborate. If this sounds like the kind of PM you want to work with, feel free to DM me to collaborate. 
        </p>
      </div>
      {/* <img src={SamplePicture} alt="foto trabajando con portátil" /> */}
      <img src={FotoPortatilColor} alt="foto de portátil en espacio de trabajo"/>
    </section>
  );
}
