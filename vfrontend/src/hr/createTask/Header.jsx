import React from 'react';
import logo from './images/cn.jpg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import {Row,Col,DropdownButton,Dropdown} from 'react-bootstrap';
import MiniDrawer from '../MiniDrawer';
import {Link} from 'react-router-dom';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';


const  Header = () => {
  return (
<>
<div className = "header shadow-sm p-3 mb-5 rounded" >
{/* <MiniDrawer/> */}

<Row>
      <Col lg ={11} xm ={11} sm={11}>
      <h1 >  <img className="cni" src = {logo} alt = "logo" height = "90px" width = "100px" /> Create New Project</h1>
  </Col>
  <Col lg ={1} xm ={1} sm={1}>
    <br/>
  <Link to="/hr"><button type="button" class="btn btn-light " style={{borderRadius:'90%'}}><ExitToAppTwoToneIcon/> Home</button></Link>
  </Col>
  </Row>
</div>
</>
  );
}

export default Header;