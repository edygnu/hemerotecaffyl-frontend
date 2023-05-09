import React from "react";
import '../styles/components/pages/TitulosPage.css';

const TitulosPage = (props) => {
    return (
        <main>
            <div className="container-fluid">
                <div className="main-titulos" style={{ backgroundColor: 'rgba(199, 197, 197, 0.644)' }}>
                    <div className="titulos">
                        <img src="img/alfabetico.jpg" alt="alfabetico" />
                        <div className="listado">
                            <h4>Listado por orden alfabético</h4>
                            <div className="button-listado">
                                <a href="files/alfabetico.docx" class="btn btn-primary enabled" tabindex="-1" role="button"
                                    aria-disabled="true">descargar</a>
                            </div>
                        </div>
                        <img src="img/tema.jpg" alt="tema" />
                        <div className="listado">
                            <h4>Listado por orden temático</h4>
                            <div className="button-listado">
                                <a href="files/materia.docx" class="btn btn-primary enabled" tabindex="-1" role="button"
                                    aria-disabled="true">descargar</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </main>

    );
}

export default TitulosPage;