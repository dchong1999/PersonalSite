import React from 'react';
import Navbar from '../Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Projects = () => {
  return(
    <div className='center'>
      <div className='bar'>
        <Navbar />
      </div>
      {/* card, collapse, or jumbotron */}
      <Footer />
    </div>
  )
}

export default Projects;