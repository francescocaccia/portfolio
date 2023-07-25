import React, { useEffect } from 'react';
import fotoMia from '../fotoMia.jpeg';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faSass, faJava, faGitAlt, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import CurriculumFR from "../Cacciapuoti Francesco FR-1.pdf"
import { Carousel } from 'react-bootstrap';
import work1 from '../Linkedin project.png';
import work2 from '../App&tito.png';
import MyFooter from './MyFooter';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import DescriptionFr from './DescriptionFr';
const HomePageFr = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div id="home" className="homeContainer">
                <div className="hero d-flex justify-content-center align-items-center p-5 gap-5">
                    <div className="d-flex flex-column flex-md-row align-items-center ">
                        <div className="d-flex flex-column text-md-end text-center me-md-5">
                            <h1 className="heroTitle text-md-end text-center">Francesco Cacciapuoti</h1>
                            <h2 className="heroSubtitle fw-semibold text-md-end text-center text-light mb-4">
                                FULL STACK DÉVELOPPEUR
                            </h2>
                            <p className="text fs-0 text-md-end text-center">
                                "Ma passion pour la programmation est née de la curiosité et du
                                désir d'explorer de nouvelles opportunités professionnelles et
                                de réalisation personnelle. J'ai été fasciné par les graphismes,
                                la technique et la façon dont la programmation me permet
                                d'exprimer ma créativité de 100 000 manières différentes. J'apprends
                                et grandis constamment dans ce domaine, et je suis impatient de
                                voir où cela me mènera."
                            </p>
                            <a href="#contacts">
                                <button className="button px-4 text-end mt-5">Contactez-moi</button>
                            </a>
                        </div>
                        <img className="profilePic " src={fotoMia} alt="profilePic" />
                    </div>
                </div>
                <DescriptionFr />
                <div className="skills-section">
                    <h2>Compétences</h2>
                </div>
                <Container className="mt-5">
                    <div id="skills" className="skillsContainer">
                        <div className="sectionBody">
                            {/* icons */}
                            <Row className="g-5 mt-5 row-gap-5">
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faHtml5}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#e55f06" }}
                                    />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faCss3}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#3585ed" }}
                                    />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faJs}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#ecf005" }}
                                    />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faReact}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#089bf7" }}
                                    />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faBootstrap}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#9738d6" }}
                                    />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faSass}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#f226e1" }}
                                    />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faJava}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#e60a2b" }}
                                    />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faGitAlt}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#ec9027" }}
                                    />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon
                                        icon={faStackOverflow}
                                        bounce
                                        className="large-icon"
                                        style={{ color: "#e9994e" }}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
                <Row className="mt-5">
                    <Col className="mt-5 mb-5 text-center">
                        <a href={CurriculumFR} target="_blank" rel="noreferrer">
                            <Button className="custom-button">CURRICULUM VITAE</Button>
                        </a>
                        <a href={CurriculumFR} target="_blank" rel="noreferrer">
                            <Button className="custom-button">TEST D'APTITUDE</Button>
                        </a>
                    </Col>
                </Row>
                <div className="portfolio-section">
                    <h2>Portfolio</h2>
                    {/* ... */}
                </div>
                <h5 className="text-center titleProject mt-5">
                    Mes projets pendant le cours Epicode
                </h5>
                <Carousel className="mt-5">
                    <Carousel.Item>
                        <img className="d-block w-100" src={work1} alt="Work 1" style={{ height: "500px" }} />
                        <Carousel.Caption>
                            <h3>Linkedin</h3>
                            <p>
                                Clone de Linkedin, créé pendant la Build Week en équipe avec mes
                                collègues
                            </p>
                            <Button
                                href="https://github.com/francescocaccia/Build-Week-3-Linkedin-Clone-"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    flip
                                    size="xl"
                                    style={{ color: "#000000" }}
                                />{" "}
                                Voir sur GitHub
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={work2} alt="Work 2" style={{ height: "500px" }} />
                        <Carousel.Caption>
                            <h3>App&tito</h3>
                            <p>L'application pour trouver les meilleurs restaurants en Italie</p>
                            <Button
                                href="https://github.com/francescocaccia/FrontEnd-Epicode-Final-Project"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    flip
                                    size="xl"
                                    style={{ color: "#000000" }}
                                />{" "}
                                Voir sur GitHub
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div id="contacts" className="contatti-section">
                    <h2>Contacts</h2>
                </div>
                <div className="container mb-5 mt-5">
                    <div className="row mx-0">
                        <div className="col-12 col-md-6 mx-0 d-flex justify-content-center align-items-center">
                            <button className="button px-3">
                                <FontAwesomeIcon icon={faPhone} size='xl' style={{ color: "#ffffff" }} />
                                <span>+39 3207010150</span>
                            </button>
                        </div>
                        <div className="col-12 col-md-6 mx-0 d-flex justify-content-center align-items-center">
                            <a href="mailto:cacciapuotifrancesco3@gmail.com"
                                rel="noopener noreferrer" target="_blank" className="bottoneMail button  text-decoration-none px-3">
                                <p className='m-0 text-truncate'><FontAwesomeIcon icon={faEnvelope} size='xl' style={{ color: "#ffff" }} /> cacciapuotifrancesco3@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </>
    );
};

export default HomePageFr;
