import React from "react";
import Navbar from "../Navbar/Navbar";
import Projects from "../Pages/Projects";
import Footer from "../Pages/Footer";
import Image from 'react-bootstrap/Image';
import { Container, Row, Col} from 'react-bootstrap';

function Homepage() {
    return (
        <>
        <Navbar />
            {/* <div className="container">
                <div className="row">
                <div className="col-sm-8">
                    <section className="me">
                    <p>Full-Stack web developer passionate about approaching challenges from different angles and collaborating with
                        others to create meaningful web applications. Recently earned a certificate in Full Stack Development from the
                        University of Utah and developed skills in HTML5, CSS3, Javascript, JQuery, React.js, React Native, Bootstrap, Node.Js, MySQL, MongoDB, 
                        Express, Handlebars JS, GIT, Github, Media Queries, APIs, JSON, REST, AJAX, Command Line, and Testing. Known as an innovative problem-solver with an ambition for developing complex applications.
                        Excited to leverage skills learned
                        as part of a fast-paced, quality-driven team in order to build better experiences on the web. With a
                        strong desire for learning and a lot to learn, I am looking for an opportunity to expand my skill set and give my 
                        best effort to bring what I have to offer to the company.</p>
                    </section>
                </div>
                    <div className="col-sm-4">
                <div className="about-me">
                        <img className="img-responsive"
                            src="Profile_Picture.jpg"
                            alt="Robert McGrew" />
                </div>
                </div>
                </div>
            </div> */}
            <>

            <Container style={{marginTop: "100px", marginBottom: "50px"}}>
            <Row>
    <Col xs={6} sm={6} md={4}>
    <Image src="Profile_Picture.jpg" thumbnail className="my-img" />
    </Col>
    <Col xs={12} sm={6} md={8}>
    <p>Full-Stack web developer passionate about approaching challenges from different angles and collaborating with
                        others to create meaningful web applications. Recently earned a certificate in Full Stack Development from the
                        University of Utah and developed skills in HTML5, CSS3, Javascript, JQuery, React.js, React Native, Bootstrap, Node.Js, MySQL, MongoDB, 
                        Express, Handlebars JS, GIT, Github, Media Queries, APIs, JSON, REST, AJAX, Command Line, and Testing. Known as an innovative problem-solver with an ambition for developing complex applications.
                        Excited to leverage skills learned
                        as part of a fast-paced, quality-driven team in order to build better experiences on the web. With a
                        strong desire for learning and a lot to learn, I am looking for an opportunity to expand my skill set and give my 
                        best effort to bring what I have to offer to the company.</p>
    </Col>
  </Row>
</Container>



</>

            <Projects />
            <Footer />
        </>
    );
}
export default Homepage;