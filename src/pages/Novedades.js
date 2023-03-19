import React, { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../components/layout/NovedadItem";
import "./../styles/components/pages/Novedades.css";
import "../styles/components/layout/loader.css";

const Novedades = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/novedades`
      );
      setNovedades(response.data);
      setLoading(false);
    };
    cargarNovedades();
  }, []);

  return (
    <main>
      <section className="container--novedades">
        <div className="text2 encabezado">NOVEDADES</div>
        <br />
        {loading ? (
          <div class="container--loader">
            <p>Cargando...</p>
            <div class="loader"></div>
          </div>
        ) : (
          novedades.map((item) => (
            <NovedadItem
              Key={item.id}
              title={item.titulo}
              subtitle={item.subtitulo} // no tengo subtitulo
              imagen={item.imagen}
              body={item.cuerpo}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default Novedades;
