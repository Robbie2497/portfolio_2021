import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import Homepage from './components/Pages/Homepage';
import Feedback from './components/Pages/Feedback';
import ViewFeedback from './components/Pages/ViewFeedback';
// import Footer from './components/Footer';
import NewProjects from './components/Pages/NewProjects';





function App() {
  return (
    <Router>
        <Switch>
      {/* <div className="page-container"> */}
        {/* <div className="content-wrap"> */}
        <Route exact path='/' component={Homepage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/newprojects' component={NewProjects} />
        <Route exact path='/feedback' component={Feedback} />
        <Route exact path='/viewfeedback' component={ViewFeedback} />
        {/* <div className="footer"> */}
        {/* <Footer /> */}
        {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      </Switch>
    </Router>
  );
}

export default App;
