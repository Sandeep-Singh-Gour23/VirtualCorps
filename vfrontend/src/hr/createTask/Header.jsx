import React from 'react';
import logo from './images/cn.jpg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const  Header = () => {
  return (
<>
<div className = "header shadow-sm p-3 mb-5 rounded" >
<h1 >  <img src = {logo} alt = "logo" height = "90px" width = "100px" /> Create New Project</h1>
    
</div>
</>
  );
}

export default Header;