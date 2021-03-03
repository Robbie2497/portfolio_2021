import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import Projects from '../Pages/Projects';
import NewProjects from '../NewProjects';
import NewFooter from './NewFooter';

export default function NewHomepage() {
    return (
        <>
            <Navbar />
            <Container style={{marginBottom: "158px", marginTop: "120px"}}>
                <Row>
                    <Col sm={9} style={{ marginTop: "75px", backgroundColor: "background-color: rgb(250, 243, 233);" }}><p>Full-Stack web developer passionate about approaching challenges from different angles and collaborating with others to create meaningful web applications. Recently earned a certificate in Full Stack Development from the University of Utah and developed skills in HTML5, CSS3, Javascript, JQuery, React.js, React Native, Bootstrap, Node.Js, MySQL, MongoDB, Express, Handlebars JS, GIT, Github, Media Queries, APIs, JSON, REST, AJAX, Command Line, and Testing. Known as an innovative problem-solver with an ambition for developing complex applications. Excited to leverage skills learned as part of a fast-paced, quality-driven team in order to build better experiences on the web. With a strong desire for learning and a lot to learn, I am looking for an opportunity to expand my skill set and give my best effort to bring what I have to offer to the company.</p>
                    </Col>
                    <Col sm={3}>
                        <Image src="Profile_Picture.jpg" thumbnail className="my-img" />
                    </Col>
                </Row>
            </Container>
            <NewProjects />
            {/* <Projects /> */}
            <NewFooter />
        </>
    )
}
