import React from 'react'

export default function Skill() {
  return (
    <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila">

                <div className="col">
                    <h3>Technical Skills</h3>
                    <div className="skill">
                        <span>Javascript</span>
                        <div className="barra-skill">
                            <div className="progreso javascript">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>HTML & CSS</span>
                        <div className="barra-skill">
                            <div className="progreso htmlcss">
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>React y Redux</span>
                        <div className="barra-skill">
                            <div className="progreso react">
                                <span>72%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Express y Sequelize</span>
                        <div className="barra-skill">
                            <div className="progreso express">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Redux-Toolkit y Next.js</span>
                        <div className="barra-skill">
                            <div className="progreso reduxtoolkit">
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
                            <div className="progreso comunicacion">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Trabajo en Equipo</span>
                        <div className="barra-skill">
                            <div className="progreso trabajo">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Creatividad</span>
                        <div className="barra-skill">
                            <div className="progreso creatividad">
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Dedicación</span>
                        <div className="barra-skill">
                            <div className="progreso dedicacion">
                                <span>85%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Proyect Management</span>
                        <div className="barra-skill">
                            <div className="progreso proyect">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
