import React from "react";
import Navbar from "../Navbar/Navbar";
import Projects from "../Pages/Projects";
import Footer from "../Pages/Footer";

function Homepage() {
    return (
        <>
        <Navbar />
            <div className="container homePageFooter">
                <div className="about-me">
                    <section className="me">
                        <img className="my-img"
                            src="Profile_Picture.jpg"
                            alt="Robert McGrew" />
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
            </div>
            <Projects />
            <Footer />
        </>
    );
}
export default Homepage;