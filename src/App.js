import './App.css';
import portada from './img/daniel.webp.jpg'
import React,{useState} from 'react'
import About from './components/About/About';
import Skill from './components/Skills/Skill';
import Curriculum from './components/Curriculum/Curriculum';

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
                <a href="https://www.linkedin.com/in/daniel-serrano-4021bb205/"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/DSerranoG24"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    </section>

    <section id="sobremi" className="sobremi">
        <About/>
    </section>

    <section className="skills" id="skills">
        <Skill/>
    </section>

    <section id="curriculum" class="curriculum">
        <Curriculum/>
    </section>
    </>
  );
}

export default App;
