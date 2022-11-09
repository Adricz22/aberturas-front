import React from 'react';
import '../styles/components/pages/Home.css';

const Home = (props) => {
    return (
        <div >
            <div id="carouselExampleCaptions" className="carousel slide index" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner oscuro ">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src="/img/vivienda.png" className="d-block w-100 " alt="vivienda" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Viviendas</h5>
                            <p>Toda la línea completa de Aberturas.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="/img/frente.jpg" className="d-block w-100" alt="edificio" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Edificios</h5>
                            <p>Barandas y aleros vidriados.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="/img/edificio.jpg" className="d-block w-100" alt="edificio" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Edificios y Locales Comerciales</h5>
                            <p>Frentes integrales con Puertas Templadas.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="container content">
                <div>
                    <br />
                    <div className="text2">Somos una empresa familiar con años de experiencia en el mercado de las
                        aberturas.<br /><br /></div>
                    <div className="text1">Nuestras principales fortalezas:</div>
                    <br />
                    <ul className="list ">
                        <li>La fabricación de carpintería de aluminio de alta prestación.</li>
                        <li>Nuestro Servicio de soluciones Integrales, porque contamos con una gran variedad de
                            productos que se adaptan a lo que estás buscando.</li>
                    </ul>
                    <br />
                    <div className="text1">Nuestro concepto:</div>
                    <br />
                    <ul className="list">
                        <li>Calidad: Utilizamos materias primas y accesorios de primera calidad que garantizan la
                            excelente terminación y durabilidad de nuestros productos.</li> <br />
                        <li>Seguridad: Los vidrios son parte de nuestras aberturas, por lo tanto, te asesoramos para que
                            elijas correctamente los mismos a fin de garantizar la seguridad física de todos los que
                            viven o transitan en el lugar.</li><br />
                        <li>Asesoramiento: Dedicaremos todo el tiempo que sea necesario para mostrarte las diferentes
                            aberturas y te daremos toda la información para que puedas tomar la mejor decisión, porque
                            queremos ser más que tu proveedor de aberturas, queremos involucrarnos y ser parte de tu
                            proyecto.</li><br />
                        <li>Servicio post-venta: Hacemos las cosas enfocándonos en la excelencia, pero si algo sale mal
                            nos encontrarás para brindarte la solución con la misma energía que al momento de la venta.
                        </li>
                    </ul>
                    <br />
                    <div className="text1">Nuestro objetivo es que enfoques tu energía en el resto de tu obra, de las
                        aberturas nos encargamos nosotros.</div>
                    <br />
                </div>
            </section>
        </div>

    );
}

export default Home;