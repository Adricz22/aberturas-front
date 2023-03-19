import React, { useState } from "react";
import axios from "axios";
import "../styles/components/pages/Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response =
      await // axios.post('http://localhost:3000/api/contacto', formData); api local
      axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);

    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main>
      <div className="contenedor pb-5">
        <div className="contacto">
          <div>
            <h3>Contacto</h3>
            <p>
              Envianos tus dudas, consultas y/o sugerencias completando el
              siguiente formulario. Nuestro equipo le responderá a la brevedad.
            </p>
          </div>

          <form
            className="formulario"
            action="/contacto"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="input-contenedor">
              <FontAwesomeIcon className="icon" icon={faUserAlt} />
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="input-contenedor">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-contenedor">
              <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
              <input
                type="text"
                placeholder="Telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="input-contenedor">
              <textarea
                className="text"
                placeholder="Mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}

            <input type="submit" value="Enviar" class="button" />
          </form>
        </div>

        <div className="">
          <h3>Otras vías de contacto</h3>
          <p>Tambien se pueden comunicar con nosotros...</p>
          <ul>
            <li>Telefono: 4275-0523</li>
            <li>Email:ventas@aberturasch.com.ar</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Contacto;
