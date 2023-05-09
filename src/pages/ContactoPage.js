import React from "react";
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main class="contacto">
            <div>
                <form action="" method="" className="formulario">
                    <h2>Contáctenos</h2>

                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="nombre">Mensaje</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otros medios de comunicación</h2>
                <ul>
                    <li>Teléfono: 4135000 int 2224</li>
                    <li>Email: hemero@ffyl.uncu.edu.ar</li>
                </ul>
            </div>
            <div className="horarios">
                <h2>Horarios de atención</h2>
                <ul>
                    <li>Lunes: 8 a 13 y 15 a 19</li>
                    <li>Martes: 8 a 13 y 15 a 17</li>
                    <li>Miércoles: 8 a 13 y 15 a 19</li>
                    <li>Jueves: 8 a 13</li>
                    <li>Viernes: 8 a 13</li>
                </ul>
            </div>
        </main>

    );
}

export default ContactoPage;