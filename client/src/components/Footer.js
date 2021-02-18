import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedin, FaGitSquare } from 'react-icons/fa';


const Footer = () => {

const submitFeedback = () => {
  window.location="/viewfeedback";
}

  return (
    
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="footer">
              <MDBCol md="5"></MDBCol>
              <MDBCol md="3" className="contactInfo">
            <h6 className="title">Created by: Robert McGrew</h6>
            <ul>
              <li className="list-unstyled">
              <FaEnvelope className='email-icon' /> <a href="mailto:robbie2497@gmail.com"><u className="contacts"> robbie2497@gmail.com</u></a>
              </li>
              <li className="list-unstyled">
              <FaPhoneAlt className='phone-icon' /> <u className="contacts">(760) 553-0573</u>
              </li>
              <li className="list-unstyled">
              <FaFacebook className='facebook-icon' /> <a rel="noopener noreferrer" href="https://www.facebook.com/robert.mcgrew24" target="_blank"><u className="contacts"> Robert McGrew</u></a>
              </li>
              <li className="list-unstyled">
          <FaLinkedin className='linkedIn-icon' /> <a rel="noopener noreferrer" href="https://www.linkedin.com/in/robert-mcgrew-b487b2181?trk=people-guest_people_search-card" target="_blank"><u className="contacts"> Robbie2497</u></a>
              </li>
              <li className="list-unstyled">
              <FaGitSquare className='github-icon' /> <a rel="noopener noreferrer" href="https://github.com/Robbie2497" target="_blank"><u className="contacts"> Robbie2497</u></a>
              </li>
            </ul>
            </MDBCol>
            <MDBCol md="4">
              <button className="feedback" onClick={submitFeedback}>Feedback</button>
            </MDBCol>
            </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 copy-right-footer">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Robert McGrew
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;