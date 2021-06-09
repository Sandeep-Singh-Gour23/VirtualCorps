

import React , { useState } from 'react';
import hrc from './images/hrc.png';
import assign from './images/hra.jpg';
import member from './images/member.jpg';
import team from './images/team.jpg';
import hr from './images/hr.png';
import {Modal,Button,Row,Col,DropdownButton,Dropdown} from 'react-bootstrap';
import './Hrd.css';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import { Link } from 'react-router-dom';
import MiniDrawer from './MiniDrawer';

const Hrd = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
  <>
  <div className = "header shadow-sm p-3 mb-5 rounded" >
  
  
  <Row>
      <Col lg ={11} xm ={11} sm={11}>
      <h2 >  <img src = {hr} alt = "logo" height = "150px" width = "250px"/> Human Resources </h2>
  </Col>
  <Col lg ={1} xm ={1} sm={1}>
    <br/>
  <Link to="/"><button type="button" class="btn btn-light " style={{borderRadius:'90%'}}><ExitToAppTwoToneIcon/> Logout </button></Link>
  </Col>
  </Row>
  </div>

  <center> <h5>Welcome Human Resources</h5> </center>    
   <br/>
  <div class="card-deck">
  
    
     <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top"  height = "230px" src={hrc} alt="Card image cap"/>
    <div class="card-body">
      <p class="card-text"><center>
        <Link to="/hr/createtask">
        <button type="button" class="btn btn-dark" >Create Project</button>
        </Link>
        </center></p>
    </div>

  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src={assign}  height = "230px" alt="Card image cap"/>
    <div class="card-body">
    {/* <a href ="https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button">
        <Link to="/www.google.com">
     <button type="button">
          Click Me!
     </button>
      </Link>
      </a> */}
    <p class="card-text"><center>
    <Link to='/hr/assignproject'>
      <button type="button" class="btn btn-dark">Assign Project </button>
      </Link>
      </center></p>
     
    </div>

  </div>

  <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src= {team} height = "230px" alt="Card image cap"/>
    <div class="card-body">
    <p class="card-text"><center>
      <Link to='/hr/createteam'>
      <button type="button" class="btn btn-dark" >Create Team</button>
   
 </Link>
      </center></p>
    </div>
    </div>

    <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src={member} height = "230px" alt="Card image cap"/>
    <div class="card-body">
      <p class="card-text"><center>
      <Link to='/hr/createmember'>
      <button type="button" class="btn btn-dark">Create Member</button>
 </Link>
       </center></p>
    </div>



  </div>

 
 

</div>

      


 </>
    );
  }
  
  export default Hrd;