import React from 'react';

const Navbar: React.FC = () => {
  return(
    <nav>
      {<li><a href="/">Main</a></li>
      <li><a href="/about">App</a></li>
      <li><a href="/services">Login</a></li>
      }
    </nav>
  );
};

export default Navbar;
