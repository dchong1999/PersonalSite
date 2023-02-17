import React from 'react';
import Navbar from '../Navbar.jsx';
import Footer from '../components/Footer.jsx';
import spc from '../components/images/spc.png';
import recipes from '../components/images/Recipes.png';
import qNa from '../components/images/q&a.png';

const Projects = () => {
  return(
    <div className='center'>
      <div className='bar'>
        <h1 className='name'>Diana Chong</h1>
        <Navbar />
      </div>
      <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-4">
              {/* SPC - mention customer + competitor feecback*/}
              <div className='card mx-auto'>
                <img src={spc} className='card-img-top cardpic' />
                <div className='card-body'>
                  <h5 className='card-title'>Customer Live Queue</h5>
                  <p className='card-text'>
                    <ul>
                      <li>Developed an app to display a real-time customer queue for popular TikTok streamer (@scotts.pc)'s livestream audience</li>
                      <li>Accessing and reprocessing Shopify store information via Shopify API resulted in a 70% increase in sales and improved audience retention</li>
                      <li>Competitiors have inquired about acquiring the product and customers have provided positive feedback</li>
                    </ul>
                  </p>
                  <a href='https://github.com/dchong1999/Shopify-Live-Queue/blob/main/README.md' target='_blank' className='btn'>READ ME</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              {/* Recipes */}
              <div className='card mx-auto'>
                <img src={recipes} className='card-img-top cardpic' />
                <div className='card-body'>
                  <h5 className='card-title'>Recipe Finder & Pantry Tracker</h5>
                  <p className='card-text'>
                    <ul>
                      <li>Designed an app to reduce food waste by keeping track of a user's pantry ingredients and only recommending recipes that utilizes ingredients within the pantry</li>
                      <li>Utilized a third party data set from ClickHouse (2.2M recipes) to populate a PostgreSQL database and construct an API from scratch</li>
                      <li>Reduced query latency from 20s to 100ms via aggregate functions and gist indexing</li>
                    </ul>
                  </p>
                  <a href='https://github.com/Blue-ocean-HR/Blue-ocean-backend/blob/main/README.md' target='_blank' className='btn'>READ ME</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              {/* Atelier */}
              <div className='card mx-auto'>
                <img src={qNa} className='card-img-top cardpic' />
                <div className='card-body'>
                  <h5 className='card-title'>E-Commerce Microservice & Load Balancing</h5>
                  <p className='card-text'>
                    <ul>
                      <li>Implemented a Q&A microservice for e-commerce product pages to facilitate customer-seller communication</li>
                      <li>Scaled microservice to handle 2000 RPS with 45M records of user data via EC2 instances and nginx load balancer</li>
                      <li>Identified performance bottlenecks with Loader.io and K65 and used foreign key indexing and aggregate functions to reduce latency to 17ms</li>
                    </ul>
                  </p>
                  <a href='https://github.com/RFCE2209-Velaryon/rfe2209-fec/blob/main/README.md' target='_blank' className='btn'>READ ME</a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className='footerbar'>
        <Footer />
      </div>
    </div>
  )
}

export default Projects;