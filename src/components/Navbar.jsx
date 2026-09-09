import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="wrap">
        <nav>
          <a href="#home" className="logo">
            <div className="logo-mark">VO</div>
            Victoria Olumide
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
          </div>

          <a
            href="mailto:olumideronke@gmail.com"
            className="nav-cta"
          >
            Say hello
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;