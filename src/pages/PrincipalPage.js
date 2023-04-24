import React from "react";

const PrincipalPage = (props) => {
    return (

// revisar por qué no funciona el carrousel, no pasa de diapositiva
        <main>
            <div className="container-fluid" style={{ backgroundColor: 'white' }}>
                <div className="row">
                    <div className="col" style={{ backgroundColor: '#426180' }}>
                        <h3>Historia</h3>
                        <p>El 27 de febrero de 1970 fue inaugurada oficialmente la Biblioteca de la Facultad de
                            Filosofía y
                            Letras en el
                            edificio que hoy ocupa en el Centro Universitario, con alrededor de 100.000 documentos entre
                            libros,
                            publicaciones
                            periódicas y folletos.</p>

                    </div>
                    <div className="col" style={{ backgroundColor: '#5881AA' }}>
                        <h3>Fondo hemerográfico</h3>
                        <p>La colección del fondo hemerográfico está compuesta por revistas, periódicos, boletines,
                            anales,
                            facsimilares
                            y
                            otros. Actualmente posee 6700 títulos de revistas, entre ellas podemos encontrar revistas
                            científicas
                            especializadas, multidisciplinarias.</p>
                    </div>
                    <div className="col" style={{ backgroundColor: '#6EA1D4' }}>
                        <h3>Misión</h3>
                        <p>Tiene como misión gestionar los recursos de información, facilitar su acceso y llevar a cabo
                            su
                            difusión, así
                            como colaborar en los procesos de creación del conocimiento, a fin de contribuir a la
                            consecución de
                            los
                            objetivos de la Universidad y asegurar un servicio de excelencia a la sociedad.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>

                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="img/07.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/08.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/8-3.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <img src="img/8-4.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>

                            </div>



                        </div >

                    </div >

                </div >
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                    crossorigin="anonymous"></script>
            </div>

        </main >


    );
}

export default PrincipalPage;