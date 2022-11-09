import '../styles/components/pages/Productos.css';

const Productos = (props) => {
    return (
        <section>
            <article>
                <div className="container">
                    <div>
                        <div className="text2 encabezado"> PUNTOS PARA ELEGIR LA MEJOR ABERTURA</div>
                        <br />
                        <div className="text1">1: ¿POR QUÉ ELEGIR ALUMINIO?</div><br />
                        <div>
                            <span>Elegir un material para una obra, hoy día, no es una tarea fácil,
                                más si se trata de aberturas. La gran variedad de alternativas que se pueden conseguir
                                nos indican que es conveniente conocer en profundidad las propiedades físicas, químicas
                                y mecánicas de los materiales que componen las mismas. En la elección del material para
                                aberturas, ya sea para obras nuevas o para refacciones, la oferta del mercado se
                                diversifica en Hierro, Madera, PVC y Aluminio.</span>
                        </div>
                        <hr /><br />
                        <div className='modulo'>
                            <div>
                                <div className="text1">2: ¿CÓMO ELEGIR LA ABERTURA CORRECTA EN
                                    ALUMINIO?</div>
                                <br />
                                <span>Los marcos realizados con perfiles de aluminio tienen el mejor desempeño a lo largo del tiempo,
                                    por su durabilidad y resistencia y, porque el mantenimiento es casi nulo. <br />Con el aluminio se pueden hacer
                                    estas tipologías de aberturas:</span>
                                <br />
                            </div>

                            <div className="caja">
                                <div className="cara cara1">
                                    <img src="/img/casa1.png" />
                                </div>
                                <div className="cara cara2">
                                    <img src="/img/casa2.png" />
                                </div>
                                <div className="cara cara3">
                                    <img src="/img/casa3.png" />
                                </div>
                                <div className="cara cara4">
                                    <img src="/img/casa4.png" />
                                </div>
                                <div className="cara cara5">
                                    <img src="/img/casa5b.png" />
                                </div>
                                <div className="cara cara6">
                                    <img src="/img/casa6.png" />
                                </div>
                            </div>
                        </div>

                        {/* ////////////// acordeon  */}
                        <h4>Tipologías: características</h4>
                        <br />

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Paño fijo:
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>es decir, un bastidor de perfiles donde se inserta los vidrios -Ventana de abrir: abertura lateral por medio de bisagras y hacia adentro del ambiente. Abre el 100 % del tamaño del vano, permite la limpieza del vidrio exterior e interior y permite colocar protecciones exteriores y sistemas de oscurecimiento. Si va a estar en un ambiente donde haya planos de trabajo como mesadas y escritorios, debe saberse que el recorrido donde se produce la apertura, inhabilita ese espacio.</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Ventana oscilo-batiente:
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>posee dos movimientos, abre como banderola para ventilación y rebate con bisagras laterales. Posee características similares a la ventana de abrir aunque, mejora su uso con respecto al espacio interior por la posibilidad de su movimiento como banderola. -Ventana banderola: de abertura superior con bisagras y hacia el interior. Era muy utilizada a principios de siglo. Puede llevar protecciones y oscurecimiento del lado exterior. Su punto débil es la limpieza ya que suele ubicarse a grandes alturas y la apertura sólo se da a 45º.</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Ventana proyectante:
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>de abertura inferior sin bisagras, hacia el exterior y con tijeras que permiten regular la apertura. Esta tipología es similar a la proyectante aunque al no tener bisagras en la parte superior y usa tijeras regulables, permiten que la limpieza sea más sencilla y que se pueda regular la ventilación. No invade el espacio interior.</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr /><br />
                        <div className="text1">3: PRESTACIÓN DE LAS ABERTURAS</div>
                        <br />
                        <div>
                            <h4>¿Qué es y qué compran quienes adquieren Prestación? </h4>
                            <span>Las empresas que fabrican los perfiles de aluminio indican, que se
                                pueden realizar aberturas de distintas prestaciones, a saber: económicas, standard, de
                                mediana y/o de alta prestación.
                                Pero, antes que nada, es bueno aclarar que una carpintería es el resultado de ensamblar
                                perfiles, vidrios, accesorios, burletes y sellados además de la colocación.
                                Y que cada ítem debe estar en perfecta concordancia para hablar de una buena prestación.
                            </span><br /><br />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
export default Productos;