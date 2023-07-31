import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return (
        <div>
            <Header />
            <AboutMe />
            <Footer />
        </div>
      );
    }
    if (currentPage === 'Contact') {
      return (
        <div>
            <Header />
            <Contact />
            <Footer />
        </div>
      );
    }
    if (currentPage === 'Portfolio') {
      return (
        <div>
            <Header />
            <Portfolio />
            <Footer />
        </div>
      );
    }
    if (currentPage === 'Resume') {
        return (
          <div>
              <Header />
              <Resume />
              <Footer />
          </div>
        );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
