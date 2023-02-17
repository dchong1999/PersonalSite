import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Resume from './components/DianaChongResume.pdf';

const Navbar = () => {
  return(
    <nav>
      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/About'>About</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/Projects'>Projects</Link>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href={Resume} target='_blank'>Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;