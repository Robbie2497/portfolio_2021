import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";



class Favorites extends Component {
    state = {
        name: '',
        description: '',
        feedback: []
    }

    componentDidMount = () => {
        axios.get('/feedback')
            .then(res => {
                console.log(res);
                this.setState({ feedback: res.data })
                console.log(this.state);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    displayFeedback = (feedback) => {
        if (!feedback.length) return <div>
            <h1>No Feedback has been submitted Yet</h1>
        </div>
        console.log("display feedback works...")

        return feedback.map((feedback, i) => (
            <Card style={{ width: '18rem' }} key={i}>
                <Card.Body>
                    <Card.Title>{feedback.name}</Card.Title>
                    <Card.Text>{feedback.description}</Card.Text>
                </Card.Body>
            </Card>
        ));
    };

    render() {
        return (
            <>
            <Navbar />
            <header>
                <h1 className="feedback-header">Feedback that has been submitted</h1>
                <div className="card-container">
                    {this.displayFeedback(this.state.feedback)}
                </div>
            </header>
            <Footer />
            </>
        )
    }
}

export default Favorites;