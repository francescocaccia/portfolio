import React, { useEffect } from 'react';
import fotoMia from '../fotoMia.jpeg';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faSass, faJava, faGitAlt, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import CurriculumIT from "../Cacciapuoti Francesco IT-1.png"
import { Carousel } from 'react-bootstrap';
import work1 from '../Linkedin project.png';
import work2 from '../App&tito.png';
import MyFooter from './MyFooter';
import Contacts from './Contacts';



const HomePage = () => {


    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <>
            <div id="home" className="homeContainer">
                <div className="hero d-flex justify-content-center align-items-center p-5">
                    <div className="d-flex flex-column flex-md-row align-items-center ">
                        <div className="d-flex flex-column align-items-center me-md-5">
                            <h1 className="heroTitle">Francesco Cacciapuoti</h1>
                            <h2 className="heroSubtitle fw-semibold">JUNIOR FULL STACK DEVELOPER</h2>
                            <p className='fs-0 text-center'>"Mi sono avvicinato al mondo della programmazione per la curiosità e l’opportunità di trovare un lavoro. Sono rimasto affascinato dalla grafica, dalla tecnica e dal modo in cui la programmazione mi permette di esprimere la mia creatività in 100.000 modi tutti diversi"</p>
                            <a href="#contacts">
                                <button className="button px-4">Contact me</button>
                            </a>
                        </div>
                        <div className="profilePic " data-aos="zoom-in">
                            <img src={fotoMia} alt="Profile pic" />
                        </div>
                    </div>
                </div>
                <div className="skills-section">
                    <h2>Skills</h2>
                </div>

                <Container className='mt-5'>
                    <div id="skills" className="skillsContainer">
                        <div className="sectionBody">
                            {/* icone */}
                            <Row className="g-5 mt-5 row-gap-5">
                                <Col>
                                    <FontAwesomeIcon icon={faHtml5} bounce className="large-icon" style={{ color: "#e55f06" }} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faCss3} bounce className="large-icon" style={{ color: "#3585ed" }} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faJs} bounce className="large-icon" style={{ color: "#ecf005" }} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faReact} bounce className="large-icon" style={{ color: "#089bf7" }} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faBootstrap} bounce className="large-icon" style={{ color: "#9738d6" }} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faSass} bounce className="large-icon" style={{ color: "#f226e1" }} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faJava} bounce className="large-icon" style={{ color: "#e60a2b" }} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faGitAlt} bounce className="large-icon" style={{ color: "#ec9027" }} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faStackOverflow} bounce className="large-icon" style={{ color: "#e9994e" }} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
                <Row className='mt-5'>
                    <Col className='mt-5 mb-5 text-center'>
                        <a href={CurriculumIT} target="_blank" rel="noreferrer">
                            <Button className="custom-button me-3">CURRICULUM VITAE</Button>
                        </a>
                        <a href={CurriculumIT} target="_blank" rel="noreferrer">
                            <Button className="custom-button">TEST ATTITUDINALE</Button>
                        </a>
                    </Col>
                </Row>

                <div className="portfolio-section">
                    <h2>Portfolio</h2>
                    {/* ... */}
                </div>
                <h5 className='text-center mt-5'>I miei progetti durante il corso di epicode</h5>
                <Carousel className='mt-5'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={work1}
                            alt="Work 1"
                        />
                        <Carousel.Caption>
                            <h3>Linkedin</h3>
                            <p>Linkedin Clone, realizzato durante la Build Week in team con i miei compagni</p>
                            <Button href="https://github.com/francescocaccia/Build-Week-3-Linkedin-Clone-" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} flip size='xl' style={{ color: "#000000" }} /> View on GitHub
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={work2}
                            alt="Work 2"
                        />
                        <Carousel.Caption>
                            <h3>App&tito</h3>
                            <p>L'app per trovare i migliori ristoranti in italia</p>
                            <Button href="https://github.com/francescocaccia/FrontEnd-Epicode-Final-Project" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} flip size='xl' style={{ color: "#000000" }} /> View on GitHub
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div >
            <Contacts />
            <MyFooter />
        </>
    );
};

export default HomePage;

