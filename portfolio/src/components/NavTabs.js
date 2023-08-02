import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs header">
      <li className="nav-item header">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link header'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item header">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link header'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item header">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link header'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item header">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link header'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;