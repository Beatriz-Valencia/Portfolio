import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../components/Input"
import "./Connect.css";

const Connect = () => {
  const navigate = useNavigate();

  const [formData, setformData] = useState ({
    name:"",
    email:"",
    phone:"",
    message:""
  });
//Estado para guardar errores
  const [error, setError] = useState("");

  //Manejo de cambios
  const handleChange = (e) => {
    setformData ({
      ...formData,
      [e.target.name] : e.target.value, //actualizamos el campo que cambió
    });
  };

  //Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

  //Verificación de campos no vacíos
if (!formData.name || !formData.email || !formData.message) {
  setError ("Por favor, completa los campos obligatorios");
  return
}
setError("");

//Construimos el mailto 
const to="beconpe.enquiries@gmail.com";
const subject = `Nuevo mensaje de ${formData.name}`;
const bodyLine = [
  `Nombre: ${formData.name}`,
  `Email: ${formData.email}`,
  `Teléfono: ${formData.email}`,
  "",
  "Mensaje;", formData.message,
]
const body = bodyLines.join("\n");

//Codificamos la URL mailto

const href =`mailto:${to}?subject=${encodeURIComponent}(subject)`&body=${encondeURIComponent(body)};

//Abrimos el cliente de correo con el mensaje pre-rellenado
window.location.href= href;

//Render del formulario
return (
  <div className="connect_background">
    <div className="connect_container">
      <h3>LET'S START THE CONVERSATION</h3>
    </div>
  </div>
)


  }







}

