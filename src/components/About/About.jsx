import React from 'react'
import cv from '../../CV.pdf'


export default function About() {
  return (
    <div className="contenido-seccion">
    <h2>Sobre Mí</h2>
  <p><span>Hola, soy Daniel David Serrano Gonzalez,</span> un apasionado Full Stack Developer con una sólida formación en física y fundamentos matemáticos. Mi trayectoria profesional se destaca por mi capacidad para trabajar en equipo y enfrentar nuevos desafíos con determinación.</p>
  <p>Me especializo en el desarrollo Full Stack, centrándome en el Front-end utilizando tecnologías como React, Redux, Next.js y Redux Toolkit. Además, en el Back-end, tengo experiencia con Node.js, Express y MongoDB. Estoy familiarizado con metodologías ágiles, GIT, estructura de datos y algoritmos, lo que me permite crear soluciones técnicas eficientes y sólidas.</p>
  <p>Me entusiasma la resolución de problemas y estoy siempre dispuesto a aprender y adaptarme a las últimas tecnologías del campo de la tecnología. Mi pasión por el desarrollo me impulsa a buscar continuamente el crecimiento profesional y a contribuir con soluciones innovadoras en cada proyecto en el que participo.</p>

        <div className="fila">

            <div className="col">
                <h3>Datos Personales</h3>
                <ul>
                    <li>
                        <strong>Cumpleaños</strong>
                        24-02-2003
                    </li>
                    <li>
                        <strong>Teléfono</strong>
                        +57 313 2272221
                    </li>
                    <li>
                        <strong>Email</strong>
                        daniel3112933987@gmail.com
                    </li>
                    <li>
                        <strong>Dirección</strong>
                        Bogotá DC, Colombia
                    </li>
                </ul>
            </div>

            <div className="col">
                <h3>Intereses</h3>
                <div className="contenedor-intereses">
                    <div className="interes">
                        <i className="fa-solid fa-gamepad"></i>
                        <span>JUEGOS</span>
                    </div>
                    <div className="interes">
                        <i className="fa-solid fa-headphones"></i>
                        <span>MUSICA</span>
                    </div>
                    <div className="interes">
                        <i className="fa-solid fa-plane"></i>
                        <span>VIAJAR</span>
                    </div>
                    <div className="interes">
                        <i className="fa-solid fa-person-hiking"></i>
                        <span>DEPORTE</span>
                    </div>
                    <div className="interes">
                        <i className="fa-solid fa-book"></i>
                        <span>LIBROS</span>
                    </div>
                    <div className="interes">
                        <i className="fa-solid fa-futbol"></i>
                        <span>FÚTBOL</span>
                    </div>
                    <div className="interes">
                        <i className="fa-solid fa-cat"></i>
                        <span>ANIMALES</span>
                    </div>
                    <div className="interes">
                        <i className="fa solid fa-code"></i>
                        <span>CODEO</span>
                    </div>
                    
                </div>
            </div>
        </div>
        <a href={cv} download style={{textDecoration:'none'}}>
          <button>
            Descargar CV <i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
          </button>
        </a>
    </div>
  )
}
