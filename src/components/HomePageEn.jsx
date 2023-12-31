import React, { useEffect } from "react";
import fotoMia from "../fotoMia.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
  faSass,
  faJava,
  faGitAlt,
  faStackOverflow,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CurriculumEN from "../Cacciapuoti Francesco EN-1.pdf";
import { Carousel } from "react-bootstrap";
import work1 from "../Linkedin project.png";
import work2 from "../App&tito.png";
import work3 from "../meteoApp.png";
import MyFooter from "./MyFooter";
import work4 from "../musiXplosion.png";
import work5 from "../VentoCortese.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import DescriptionEn from "./DescriptionEn";
import TestAttitudine from "../talentoday-francesco-cacciapuoti.pdf";
import certificatoEpicode from "../certificatoEpicode.png";
const HomePageEn = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="home" className="homeContainer">
        <div className="hero d-flex justify-content-center align-items-center p-5 gap-5">
          <div className="d-flex flex-column flex-md-row align-items-center ">
            <div className="d-flex flex-column text-md-end text-center me-md-5">
              <h1 className="heroTitle text-md-end text-center">
                Francesco Cacciapuoti
              </h1>
              <h2 className="heroSubtitle fw-semibold text-md-end text-center text-light mb-4">
                FULL STACK DEVELOPER
              </h2>
              <p className="text text-md-end text-center text-light fs-4 fw-bold">
                "My passion for programming was born out of curiosity and the
                desire to explore new job opportunities and personal
                fulfillment. I was fascinated by the graphics, the technique,
                and the way programming allows me to express my creativity in
                100,000 different ways. I am constantly learning and growing in
                this field, and I am excited to see where it will take me."
              </p>
              <a href="#contacts">
                <button className="button px-4 text-end mt-5">
                  Contact me
                </button>
              </a>
            </div>
            <img className="profilePic " src={fotoMia} alt="profilePic" />
          </div>
        </div>
        <DescriptionEn />
        <div className="skills-section">
          <h2>Skills</h2>
        </div>
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
          <a href={CurriculumEN} target="_blank" rel="noreferrer">
            <Button className="custom-button">CURRICULUM VITAE</Button>
          </a>
          <a href={TestAttitudine} target="_blank" rel="noreferrer">
            <Button className="custom-button">APTITUDE TEST</Button>
          </a>
          <a href={certificatoEpicode} target="_blank" rel="noreferrer">
            <Button className="custom-button">CERTIFICATE</Button>
          </a>
        </Col>
      </Row>
      <div className="portfolio-section">
        <h2>Portfolio</h2>
        {/* ... */}
      </div>
      <h5 className="text-center titleProject mt-5">
        My projects during the Epicode course
      </h5>
      <Carousel className="mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={work1}
            alt="Work 1"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>Linkedin</h3>
            <p>
              Linkedin Clone, created during the Build Week in a team with my
              classmates
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
              View on GitHub
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={work2}
            alt="Work 2"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>App&tito</h3>
            <p>The app to find the best restaurants in Italy</p>
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
              View on GitHub
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={work3}
            alt="Work 3"
          />
          <Carousel.Caption>
            <h3>Francesco's Weather</h3>
            <p>The app to check the weather forecast</p>
            <Button
              href="https://github.com/francescocaccia/u3-d10-compito"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                flip
                size="xl"
                style={{ color: "#000000" }}
              />{" "}
              View on GitHub
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={work4}
            alt="Work 4"
          />
          <Carousel.Caption>
            <h3>musiXplosion</h3>
            <p>The app for listening to music previews</p>
            <Button
              href="https://github.com/francescocaccia/musiXplosion"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                flip
                size="xl"
                style={{ color: "#000000" }}
              />{" "}
              View on GitHub and try it
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "500px" }}
            src={work5}
            alt="Work 5"
          />
          <Carousel.Caption>
            <h3>VentoCortese</h3>
            <p>My website to book my holidays in Marche region</p>
            <Button
              href="https://github.com/francescocaccia/VentoCortese.git"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                flip
                size="xl"
                style={{ color: "#000000" }}
              />{" "}
              View on GitHub and try it
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
            <button
              className="btnText button"
              onClick={() => window.open("https://wa.me/393207010150")}
            >
              <FontAwesomeIcon
                icon={faPhone}
                size="xl"
                style={{ color: "#ffffff" }}
              />
              <span>+39 320 70 10 150</span>
            </button>
          </div>
          <div className="col-12 col-md-6 mx-0 d-flex justify-content-center align-items-center">
            <a
              href="mailto:cacciapuotifrancesco3@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="bottoneMail button  text-decoration-none px-3"
            >
              <p className="m-0 text-truncate">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  style={{ color: "#ffff" }}
                />{" "}
                cacciapuotifrancesco3@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default HomePageEn;
