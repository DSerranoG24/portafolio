import './App.css';
import portada from './img/daniel.webp.jpg'
import React,{useState} from 'react'
import cv from './Copia de CV Henry - Template.pdf'

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  function mostrarOcultarMenu() {
    setMenuVisible(!menuVisible);
  }

  function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    setMenuVisible(false)
}
  return (
    <>
      <div className="contenedor-header" >
        <header>
            <div className="logo">
                <a href="#">Daniel Serrano</a>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#inicio" onClick={seleccionar}>INICIO</a></li>
                    <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
                    <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
                    <li><a href="#curriculum" onCick={seleccionar}>CURRICULUM</a></li>
                    <li><a href="#portfolio" onClick={seleccionar}>PORTFOLIO</a></li>
                    <li><a href="#contacto" onClick={seleccionar}>CONTACTO</a></li>
                </ul>
            </nav>
            <div className="nav-responsive" onClick={mostrarOcultarMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>

    <section id="inicio" className="inicio">
        <div className="contenido-banner">
            <div className="contenedor-img">
                <img src={portada} alt="" />
            </div>
            <h1>Daniel Serrano</h1>
            <h2>Developer Full Stack</h2>
            <div className="redes">
                <a href="https://www.facebook.com/profile.php?id=100008575899229&mibextid=ZbWKwL"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-skype"></i></a>
                <a href="https://www.linkedin.com/in/daniel-serrano-4021bb205/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/DSerranoG24"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    </section>

    <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
      <p><span>Hola, soy Daniel David Serrano Gonzalez,</span> un apasionado Full Stack Developer con una sólida formación en física y fundamentos matemáticos. Mi trayectoria profesional se destaca por mi capacidad para trabajar en equipo, analizar datos de manera masiva y enfrentar nuevos desafíos con determinación.</p>
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
    </section>

    <section className="skills" id="skills">
        <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila">

                <div className="col">
                    <h3>Technical Skills</h3>
                    <div className="skill">
                        <span>Javascript</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>HTML & CSS</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>89%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Photoshop</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Wordpress</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>81%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Drupa</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>55%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h3>Professional Skills</h3>
                    <div className="skill">
                        <span>Comunicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Trabajo en Equipo</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Creatividad</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>99%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Dedicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Proyect Management</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>94%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default App;
