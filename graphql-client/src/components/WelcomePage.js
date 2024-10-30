import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Application</h1>
      <nav>
        <ul>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/employees">Employees</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default WelcomePage;