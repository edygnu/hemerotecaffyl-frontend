import React from "react";
import '../styles/components/pages/ExistenciasPage.css';

const ExistenciasPage = (props) => {
    return (
        <main>
            <div className="container-fluid">

                <div className="main-existencias">
                    <h2>Fondo hemerográfico</h2>
                    <p>Las publicaciones periódicas se encuentran ordenadas alfabeticamente por título.</p>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img src="img/periodicos.jpg" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Periódicos</h5>
                                    {/*<p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to
                                additional content. This content is a little bit longer.</p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="img/joyas.jpg" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Publicaciones antiguas, raras, con valor patriomonial</h5>
                                    {/*<p className="card-text">This is a longer card with supporting text below as a natural lead-in
                                to
                                additional content. This content is a little bit longer.</p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="img/revistas.jpg" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Revistas</h5>
                                    {/*<p className="card-text">This is a longer card with supporting text below as a natural lead-in
                                to
                                additional content.</p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="img/organismos.jpg" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Organismos internacionales</h5>
                                    {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to
                                additional content. This content is a little bit longer.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                        crossorigin="anonymous"></script>
                </div>
            </div>
        </main>

    );
}

export default ExistenciasPage;