import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Feedback from './components/Feedback';
import ViewFeedback from './components/ViewFeedback';
import Footer from './components/Footer';
import NewProjects from './components/NewProjects';





function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
        <Navbar />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/newprojects' component={NewProjects} />
        <Route exact path='/feedback' component={Feedback} />
        <Route exact path='/viewfeedback' component={ViewFeedback} />
        <div className="footer">
        <Footer />
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
