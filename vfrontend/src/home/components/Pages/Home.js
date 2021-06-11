import React from 'react';
import '../../First.css';
import FrontSection from '../FrontSection';
import WCards from '../WCards';
import Footer from '../Footer';
import EndSection from '../EndSection';
import NavBar from '../Navbar';


function Home() {
  return (
  <>
  <NavBar/>
    <FrontSection/> 
    <WCards/> 
    <EndSection/>
    <Footer/>
  </>
  )
}

export default Home;
