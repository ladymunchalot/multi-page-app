import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <>
    <div className="Home">
      Home Component
    </div>
    <ul>
      <li><Link to="/about">Go to about page</Link></li>
      <li><Link to="/about/asdf">Go to about page with some asdf fun</Link></li>
      <li><Link to="/about/jklö">Go to about page with some jklö philosophy</Link></li>
    </ul>
  </>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
