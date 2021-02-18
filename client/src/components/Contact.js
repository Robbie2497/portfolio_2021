import React from 'react';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaGitSquare } from 'react-icons/fa';
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
    <Navbar />
    <div className="contact-container">
      <Card style={{ width: "35%" }} className="contact-card">
        <Card.Body>
          <Card.Text>Contact Me</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><h3><FaEnvelope className='email-icons' /> <a href="mailto:robbie2497@gmail.com"><u className="black"> robbie2497@gmail.com</u></a></h3></ListGroupItem>
          <ListGroupItem><h3><FaPhoneAlt className='phone-icon' /> <u>(760) 553-0573</u></h3></ListGroupItem>
          <ListGroupItem><h3><FaFacebook className='facebook-icon' /> <a rel="noopener noreferrer" href="https://www.facebook.com/robert.mcgrew24" target="_blank"><u className="black"> Robert McGrew</u></a></h3></ListGroupItem>
          <ListGroupItem><h3><FaLinkedin className='linkedIn-icon' /> <a rel="noopener noreferrer" href="https://www.linkedin.com/in/robert-mcgrew-b487b2181?trk=people-guest_people_search-card" target="_blank"><u className="black"> Robbie2497</u></a></h3></ListGroupItem>
          <ListGroupItem><h3><FaGitSquare className='github-icons' /> <a rel="noopener noreferrer" href="https://github.com/Robbie2497" target="_blank"><u className="black"> Robbie2497</u></a></h3></ListGroupItem>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </div>
  </>
  );
}

export default Contact;