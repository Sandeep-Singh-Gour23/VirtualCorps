import React from 'react';
import '../First.css';
import { Button } from './Button';
import './FrontSection.css';
//import {Link} from 'react-router-dom';
import SignModal from './SignModal';
import {Link} from 'react-router-dom'

function FrontSection() {
  return (
    <div className='front-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>Dive Virtually!</h1>
      <p>Start Your Own Virtual Office</p>
      <div className='Front-btns'>
        
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <Link to="/hr" style={{textDecoration:'none' , color:'black'}}>
        Our Aims
          </Link>
        </Button>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          GET STARTED <i className='fas fa-sign-in-alt' />
        </Button>
      </div>
    </div>
  );
}
export default FrontSection;