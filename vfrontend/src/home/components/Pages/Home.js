import React from 'react';
import '../../First.css';
import FrontSection from '../FrontSection';
import WCards from '../WCards';
import Footer from '../Footer';
import EndSection from '../EndSection';


function Home() {
  return (
  <>
    <FrontSection/> 
    <WCards/> 
    <EndSection/>
    <Footer/>
  </>
  )
}

export default Home;
