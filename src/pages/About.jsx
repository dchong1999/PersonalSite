import React from 'react';
import { WindupChildren, Pause, Pace } from 'windups';
import Gallery from 'react-photo-gallery';
import Navbar from '../Navbar.jsx';
import Footer from '../components/Footer.jsx';
import me from '../components/images/me.jpeg';
import photos from '../components/Photos.jsx';
import background from '../components/images/green-top.png';
import background2 from '../components/images/green-bottom.png';

const About = () => {
  return(
    <div className='center'>
      <div style={{backgroundSize: 'contain', backgroundRepeat: 'repeat-x', backgroundImage: `url(${background})`}}>
        <img className='me' src={me} />
        <h1 className='name'>Diana Chong</h1>
        <Navbar />
        <h1 className='windup visitor'>
          <WindupChildren>
            <Pace ms={100}>
              {'Hello, '}
            </Pace>
            <Pause ms={200} />
            <Pace ms={60}>
              <span style={{color: '#4c9c3b'}}>{'Visitor!'}</span>
            </Pace>
          </WindupChildren>
        </h1>
      </div>
      <div style={{backgroundSize: 'contain', backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom', backgroundImage: `url(${background2})`}}>
        <div className='bounded2'>
          <p className='about'>
            I completed the <a className='aboutlinks' href='https://www.linkedin.com/school/hack-reactor/' target='_blank'>Hack Reactor Software Immersive Program</a> this past December 2022 and am currently in search of Software Engineering roles.
            I received a B.S. in Cyber Security Engineering from <a className='aboutlinks' href='https://catalog.gmu.edu/colleges-schools/engineering-computing/engineering/cyber-security-engineering/cyber-security-engineering-bs/' target='_blank'>George Mason University</a> and previously worked as a cyber security engineer for <a className='aboutlinks' href='https://www.costar.com/about' target='_blank'>CoStar Group</a> and <a className='aboutlinks' href='https://www.caci.com/' target='_blank'>CACI Inc. </a>
            When I'm not working I enjoy traveling, watching anime, drawing, and hanging out with friends!
          </p>
          <p className='about'>
            My inbox is always open!
            Feel free to contact me through LinkedIn or email if you'd like to chat!
          </p>
          <h5 className='aboutPhoto'>Here are some photos from my life!</h5>
          <Gallery photos={photos} />;
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About;