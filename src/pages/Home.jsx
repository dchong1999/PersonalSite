import React from 'react';
import { WindupChildren, Pause, Pace } from 'windups';
import Navbar from '../Navbar.jsx';
import Footer from '../components/Footer.jsx';
import me from '../components/images/me.jpeg';
import background from '../components/images/green-top.png';
import background2 from '../components/images/green-bottom.png';

const Home = () => {
  return(
    <div className='center'>
      <div style={{backgroundSize: 'contain', backgroundRepeat: 'repeat-x', backgroundImage: `url(${background})`}}>
        <img className='me' src={me} />
        <h1 className='name'>Diana Chong</h1>
        <Navbar />
        <h1 className='windup'>
          <WindupChildren>
            <Pace ms={100}>
              {'Today,'}
            </Pace>
            <Pause ms={200} />
            <Pace ms={60}>
              {' I am a '}
              <span style={{color: '#4c9c3b'}}>{'Software Engineer.'}</span>
            </Pace>
          </WindupChildren>
        </h1>
      </div>
      <div style={{backgroundSize: 'contain', backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom', backgroundImage: `url(${background2})`}}>
        <div className='bounded'>
          <div className='skill-section'>
            <h4 className='skillTitle'>Front End</h4>
            <span className='skill'>JavaScript</span>
            <span className='skill'>HTML</span>
            <span className='skill'>CSS</span>
            <span className='skill'>React</span>
          </div>
          <div className='skill-section'>
            <h4 className='skillTitle'>Back End</h4>
            <span className='skill'>Node.JS</span>
            <span className='skill'>Express.JS</span>
            <span className='skill'>SQL</span>
            <span className='skill'>PostgreSQL</span>
            <span className='skill'>MySQL</span>
            <span className='skill'>MongoDB</span>
            <span className='skill'>Mongoose</span>
            <span className='skill'>Restful API Development</span>
          </div>
          <div className='skill-section'>
            <h4 className='skillTitle'>Testing & Deployment</h4>
            <span className='skill'>Jest</span>
            <span className='skill'>Mocha</span>
            <span className='skill'>Chai</span>
            <span className='skill'>AWS EC2</span>
            <span className='skill'>K6</span>
            <span className='skill'>Loader.io</span>
          </div>
          <div className='skill-section'>
            <h4 className='skillTitle'>Developer Tools</h4>
            <span className='skill'>Git</span>
            <span className='skill'>npm</span>
            <span className='skill'>Webpack</span>
            <span className='skill'>Babel</span>
            <span className='skill'>Postman</span>
            <span className='skill'>Agile Methodology</span>
            <span className='skill'>Scrum</span>
            <span className='skill'>JIRA</span>
            <span className='skill'>Test Driven Development (TDD)</span>
          </div>
          <div className='skill-section'>
            <h4 className='skillTitle'>Certifications & Other</h4>
            <span className='skill'>CompTIA Security+</span>
            <span className='skill'>AWS Certified Cloud Practitioner</span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;