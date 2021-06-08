

import React , { useState } from 'react';
import logo from './images/pm.png';
import assign from './images/pma.png';
import shedule from './images/pms.jpg';
import meet from './images/pmm.jpg';
import pdetail from './images/pmd.png';
import {Modal,Button,Row,Col,DropdownButton,Dropdown} from 'react-bootstrap';
import './Pmd.css';

const Pmd = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
  <>
  <div className = "header shadow-sm p-3 mb-5 rounded" >
  <h2 >  <img src = {logo} alt = "logo" height = "100px" width = "90px"/>  PROJECT MANAGER </h2>
  </div>

  <center> <h5>Welcome Project Manager </h5> </center>    
   <br/>
  <div class="card-deck">
  
    
     <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src={pdetail} alt="Card image cap"/>
    <div class="card-body">
      <p class="card-text"><center><button type="button" class="btn btn-dark">View Project Detail</button></center></p>
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
    <p class="card-text"><center><button type="button" class="btn btn-dark">Assign Project </button></center></p>
    </div>

  </div>

  <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src= {shedule} height = "230px" alt="Card image cap"/>
    <div class="card-body">
    <p class="card-text"><center><button type="button" class="btn btn-dark" onClick={handleShow}>Schedule Meeting</button></center></p>
    </div>
    </div>

    <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src={meet} height = "230px" alt="Card image cap"/>
    <div class="card-body">
      <p class="card-text"><center><button type="button" class="btn btn-dark">Start Meet</button></center></p>
    </div>



  </div>

 
 

</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
  <Row>
    <Col xs={7}>
    <img class="card-img-top" src= {shedule} height ="230px" alt="Card image cap"/>
    </Col>
    <Col xs={5}>
        Select Date:
        <input type="date" id="birthday" name="birthday"></input>
        <br/>
        <br/>
        Select Time:
        <br/>
        <input type="time" id="appt" name="appt"></input>
        <br/>
        <br/>
        Select Team:

<DropdownButton id=" Info" class="btn btn-dark" title="Select Team">
  <Dropdown.Item as="button">Team A</Dropdown.Item>
  <Dropdown.Item as="button">Team B</Dropdown.Item>
  <Dropdown.Item as="button">Team C</Dropdown.Item>
  <Dropdown.Item >Team D</Dropdown.Item>
 </DropdownButton>

    </Col>
  </Row>
  

            

        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



 </>
    );
  }
  
  export default Pmd;