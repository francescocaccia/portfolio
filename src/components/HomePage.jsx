import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fotoMia from '../fotoMia.jpeg';
import Description from './Description';

const HomePage = () => {
    return (
        <Container fluid className="home-page text-center">
            <Row className="intro align-items-center">
                <Col md={6}>
                    <h1 className="fs-1">Cacciapuoti Francesco</h1>
                    <h3>JUNIOR FULL STACK DEVELOPER</h3>
                </Col>
                <Col md={6}>
                    <img className="mt-5 rounded-img" src={fotoMia} alt="fotoMia" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Description />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;

