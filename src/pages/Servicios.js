import '../../src/styles/components/pages/Servicios.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Image1 from '../imagen/saludo.png';
import Image2 from '../imagen/ventosas.png';
import Image3 from '../imagen/materiales.png';

const Servicios = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="servicios">

            <div data-aos="fade-right" className='card' data-aos-duration="1000" >
                <img className="borde" src={Image1} />
                <br /><br />
                <div className="sal text1">* ATENCIÓN PERSONALIZADA A EMPRESAS, PROFESIONALES Y PARTICULARES *</div>
                <br /><br />
                <p>Ofrecemos nuestro servicio a obras en etapas de proyecto, construcción y/o mantenimiento para poder asesorar al cliente en la instalación de aberturas considerando las condiciones climáticas, los requerimientos arquitectónicos, la funcionalidad, los gustos y preferencias.</p>
            </div>

            <div data-aos="flip-left" className='card' data-aos-duration="1500" data-aos-easing="ease-out-linear">
                <img className="borde" src={Image2} />
                <br /><br />
                <div className="sal text1">* COLOCACIÓN DE CARPINTERÍA DE ALUMINIO, CRISTALES Y RENOVACIONES *</div>
                <br /><br />
                <p>Realizamos cambios de aberturas en casas y departamentos. El procedimiento se realiza en seco sobre el marco existente. Es rápido y limpio porque no requiere albañilería. Visitamos el domicilio para tomar medidas y brindar asesoramiento sobre la mejor abertura.</p>
            </div>

            <div data-aos="fade-up-right" className='card' data-aos-duration="1000" data-aos-delay="1000">
                <img className="borde" src={Image3} />
                <br /><br />
                <div className="sal text1">* LOS MATERIALES QUE UTILIZAMOS ESTÁN GARANTIZADOS  *</div>
                <br /><br />
                <p>Ofrecen aislación térmico-acústica, resistencia estructural y seguridad.
                    Comodidad, seguridad, diseño y eficiencia energética son nuestras prioridades en el desarrollo de los mismos.
                    La versatilidad del aluminio permite que el sistema se adapte a la escala del proyecto o la obra.</p>
            </div>

        </div>
    );
};

export default Servicios;