import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import "./Connect.css";
import Button from "../components/Button";
import TextType  from "../components/TextAnimations/TextType/TextType";

const Connect = () => {
  // const navigate = useNavigate();

  //guardamos lo que el usuario escribe
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  //Estado para guardar errores
  const [error, setError] = useState("");

  //Manejo de cambios, actualiza el estado al escribir
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, //actualizamos el campo que cambió
    });
  };

  //Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //Verificación de campos no vacíos
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please, complete the form");
      return;
    }
    setError("");

    //Construimos el mailto
    const to = "beconpe.enquiries@gmail.com";
    const subject = `Nuevo mensaje de ${formData.name}`;
    const bodyLines = [
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      `Teléfono: ${formData.phone}`,
      "",
      "Mensaje:",
      formData.message,
    ];
    const body = bodyLines.join("\n");

    //Codificamos la URL mailto

    const href = `mailto:${to}?subject=encodeURIComponent(subject)&body=${encodeURIComponent(
      body
    )}`;

    //Abrimos el cliente de correo con el mensaje pre-rellenado
    window.location.href = href;
    // navigate("/thanks");
  };
  //Render del formulario
  return (
    <div className="connect_background">
      <div className="connect_container">
        {/* <h4>EVERY GREAT PROJECT STARTS WITH A SIMPLE HELLO</h4>
        <h2>LET'S BUILD SOMETHING TOGETHER</h2> */}
        <h4 className="connect-text-h4">
        <TextType
          text={["EVERY GREAT PROJECT STARTS WITH A SIMPLE HELLO"]}
          textColors={["var(--black"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        </h4>
          <h2 className="connect-text-h2">
           <TextType
          text={["LET'S BUILD SOMETHING TOGETHER"]}
          textColors={["var(--black)"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        </h2>

        <form onSubmit={handleSubmit} className="connect_form">
          {/*Nombre*/}
          <Input
            name="name"
            required
            placeholder="NAME*"
            value={formData.name}
            onChange={handleChange}
          />

          {/*Email*/}
          <Input
            name="email"
            required
            placeholder="EMAIL*"
            value={formData.email}
            onChange={handleChange}
          />

          {/*Teléfono, opcional*/}
          <Input
            name="phone"
            required
            placeholder="TELEPHONE*"
            value={formData.phone}
            onChange={handleChange}
          />

          {/*Mensaje*/}
          <label className="field" htmlFor="message">
            <div className="field_textarea_container">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="field_textarea"
                placeholder="HOW CAN I HELP YOU"
              />
            </div>
          </label>

          <Button type="submit" label="[SUBMIT]" className="general_button" />
        </form>

        {/*Fallback: si JS está desactivado, se muestra un link mailto simple*/}
        <noscript>
          <p>
            JavaScript is not available. You can write me directly at{" "}
            <a href="mailto:beconpe.enquiries@gmail.com?subject=Connect%20from%20web">
              beconpe.enquiries@gmail.com
            </a>
          </p>
        </noscript>
      </div>
    </div>
  );
};

export default Connect;
