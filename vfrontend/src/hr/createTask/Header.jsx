import React from 'react';
import logo from './images/cn.jpg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import MiniDrawer from '../MiniDrawer';
const  Header = () => {
  return (
<>
<div className = "header shadow-sm p-3 mb-5 rounded" >
{/* <MiniDrawer/> */}
<h1 >  <img className="cni" src = {logo} alt = "logo" height = "90px" width = "100px" /> Create New Project</h1>
    
</div>
</>
  );
}

export default Header;