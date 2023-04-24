import React from "react";

import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="container-fluid">
                <ul className="navbar">

                    {/* ver cómo poner clase active para ver la ṕagina en la que se está navegando*/}

                    <li className="nav-item">
                        <Link to="/">Principal</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/existencias">Existencias</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/titulos">Títulos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/novedades">Novedades</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;