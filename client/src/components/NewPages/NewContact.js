import React from 'react';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaGitSquare } from 'react-icons/fa';
import Navbar from "../Navbar/Navbar";

function Contact() {
  return (
    <>
    <Navbar />
    <div className="contact-container">
      <Card className="contact-card">
        <Card.Body>
          <Card.Text><h2>Contact Me</h2></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><h3><FaEnvelope className='email-icons' /> <a href="mailto:robbie2497@gmail.com"><u className="contacts"> robbie2497@gmail.com</u></a></h3></ListGroupItem>
          <ListGroupItem><h3><FaFacebook className='facebook-icon' /> <a rel="noopener noreferrer" href="https://www.facebook.com/robert.mcgrew24" target="_blank"><u className="contacts"> Robert McGrew</u></a></h3></ListGroupItem>
          <ListGroupItem><h3><FaLinkedin className='linkedIn-icon' /> <a rel="noopener noreferrer" href="https://www.linkedin.com/in/robert-mcgrew-b487b2181?trk=people-guest_people_search-card" target="_blank"><u className="contacts"> Robbie2497</u></a></h3></ListGroupItem>
          <ListGroupItem><h3><FaGitSquare className='github-icons' /> <a rel="noopener noreferrer" href="https://github.com/Robbie2497" target="_blank"><u className="contacts"> Robbie2497</u></a></h3></ListGroupItem>
          <ListGroupItem><h3><FaPhoneAlt className='phone-icon' /> (760) 553-0573</h3></ListGroupItem>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </div>
  </>
  );
}

export default Contact;