import React from 'react';
import email from './images/email.png';
import github from './images/git.png';
import linkedin from './images/linkedin.png';

const Footer = () => {
  return(
    <footer className='footer'>
      <div>
        <a href='mailto:dchong@gmail.com' target='_blank'>
          <img className='socials' src={email} alt='email'/>
        </a>
        <a href='https://www.github.com/dchong1999' target='_blank'>
          <img className='socials' src={github} alt='github'/>
        </a>
        <a href='https://www.linkedin.com/in/dchong1999' target='_blank'>
          <img className='socials' src={linkedin} alt='linkedin'/>
        </a>
      </div>
      <p className='copyright'>Copyright @ 2023 || Built by Diana Chong || Last Updated: February 16, 2023</p>
    </footer>
  )
};

export default Footer;