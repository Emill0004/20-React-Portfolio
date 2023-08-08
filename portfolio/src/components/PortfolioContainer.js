import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { Container, Row, Col } from 'react-bootstrap';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return (
        <div>
            <AboutMe />
            <Footer />
        </div>
      );
    }
    if (currentPage === 'Contact') {
      return (
        <div>
            <Contact />
            <Footer />
        </div>
      );
    }
    if (currentPage === 'Portfolio') {
      return (
        <div>
            <Portfolio />
            <Footer />
        </div>
      );
    }
    if (currentPage === 'Resume') {
        return (
          <div>

              <Resume />
              <Footer />
          </div>
        );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container fluid style={{position: 'relative', background: '#506C64', color: '#BAC7BE'}}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </Container>
  );
}
