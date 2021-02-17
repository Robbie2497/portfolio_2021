import React, { Component } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import axios from 'axios';


class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, description } = this.state;

    axios.post('/feedback', { name, description })
      .then((result) => {
        alert("Thank you for the feedback!")
        this.setState({ name: '', description: '' });
      });
  }

  render() {
    const { name, description } = this.state;
    return (
      <>
        <div className="feedback-text">
          <h5>I am always open to and appreciate feedback to expand my knowledge. If you have any comments, please submit the form below.</h5>
        </div>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 feedback-form">
            <Form onSubmit={this.onSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="name.ControlTextarea1">
                  <Form.Label></Form.Label>
                  <Form.Control type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.onChange} />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Leave a comment</Form.Label>
                <Form.Control as="textarea" rows={3} type="text" name="description"
                  value={description}
                  onChange={this.onChange} />
                <Button variant="primary" type="submit" className="feedback-submit-btn">Submit</Button>
              </Form.Group>
            </Form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </>
    );
  }
}

export default Feedback;
