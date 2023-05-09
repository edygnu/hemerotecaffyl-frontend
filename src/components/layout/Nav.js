import React from "react";
import '../../styles/components/layout/Nav.css';


import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="container-fluid">
                <ul className="navbar">

                    {/* ver cómo poner clase active para ver la ṕagina en la que se está navegando*/}

                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Principal</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/existencias" className={({ isActive }) => isActive ? "active" : undefined}>Existencias</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/titulos" className={({ isActive }) => isActive ? "active" : undefined}>Títulos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/novedades" className={({ isActive }) => isActive ? "active" : undefined}>Novedades</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : undefined}>Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;