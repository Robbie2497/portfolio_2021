import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (

    <div className="navBarHeader">
      <h4>Hello World!</h4>
      <ul className="nav nav-tabs">
        <li className="nav-item ml-auto">
        <Link
          to="/"
          className="robert-mcgrew"
          ><h1>Robert McGrew</h1></Link>
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            About
        </Link>
        </li>
        <li className="nav-item">
          <a href="/#projects" rel="projects" className={location.pathname === "/newprojects" ? "nav-link active" : "nav-link"}>Projects</a>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/feedback"
            className={location.pathname === "/feedback" ? "nav-link active" : "nav-link"}
          >
            Feedback
        </Link>
        </li>
      </ul>
      <img className={location.pathname === "/" ? "header-picture" : "header-picture-hidden"}
        src="coding_2.jpg"
        alt="Wallpaper" />
        <h1 className="homepage-heading">Full-Stack Web Developer</h1>
      
    </div>
  );
}

export default NavTabs;
