import React from 'react';
import './About.css';
import {
  Link
} from "react-router-dom";
import { useParams } from "react-router-dom";

const About = () => {
  const urlParams = useParams();
  
  return (<div className="About">
    <ol>About:  
      <ul>andrena objects ag</ul>
      <ul>Ganghofer Straße 70</ul>
      <ul>80339 München</ul>
    </ol>
    <Link to="/">Go Home</Link>
    <div>{urlParams.theUrlParam}</div>
  </div>);
};

About.propTypes = {};

About.defaultProps = {};

export default About;
