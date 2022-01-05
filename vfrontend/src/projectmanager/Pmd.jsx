import React , { useState } from 'react';
import logo from './images/pm.png';
import assign from './images/pma.png';
import shedule from './images/pms.jpg';
import meet from './images/pmm.jpg';
import pdetail from './images/pmd.png';
import {Button,Row,Col,DropdownButton,Dropdown} from 'react-bootstrap';
import './Pmd.css';
import M from "./SimpleModal"
import CustomizedDialogs from './CustomizedDialogs';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import {Link} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';


// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));


const Pmd = () => {


    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
  //   const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const classes = useStyles();
  // // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const body = (
  //   <div style={modalStyle} className={classes.paper}>
  //     <h2 id="simple-modal-title">Text in a modal</h2>
  //     <p id="simple-modal-description">
  //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //     </p>
  //     <SimpleModal />
  //   </div>
  // );


//     const m= () =>
// {
//   document.getElementById('exampleModalLong').Modal('show');
// }  

    return (
  <>
  <div className = "header shadow-sm p-3 mb-5 rounded" >
    <Row>
      <Col lg ={11} xm ={11} sm={11}>
  <h2 >  <img src = {logo} alt = "logo" height = "100px" width = "90px"/>  PROJECT MANAGER </h2>
  </Col>
  <Col lg ={1} xm ={1} sm={1}>
    <br/>
  <Link to="/"><button type="button" class="btn btn-light " style={{borderRadius:'90%'}}><ExitToAppTwoToneIcon/> Logout </button></Link>
  </Col>
  </Row>
  </div>

  <center> <h5>Welcome Project Manager </h5> </center>    
   <br/>
  <div class="card-deck">
  
    
     {/* <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src={pdetail} alt="Card image cap"/>
    <div class="card-body">
      <p class="card-text"><center><button type="button" class="btn btn-dark">View Project Detail</button></center></p>
    </div>

  </div> */}
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
      <Link to='/projectmanager/assignProject'>
        <p class="card-text"><center><button type="button" class="btn btn-dark">Assign Project </button></center></p>
      </Link>
    </div>

  </div>

  <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src= {shedule} height = "230px" alt="Card image cap"/>
    <div class="card-body">
    <p class="card-text"><center><CustomizedDialogs/></center></p>
    </div>
    </div>

    <div class="card shadow p-3 mb-5 bg-white rounded">
    <img class="card-img-top" src={meet} height = "230px" alt="Card image cap"/>
    <div class="card-body">
    {/* <a href="https://react-chatapp-frontend.herokuapp.com/">  <p class="card-text"><center><button type="button" class="btn btn-dark">Start Meet</button></center></p></a> */}
    <a href="https://meet.google.com/">  <p class="card-text"><center><button type="button" class="btn btn-dark">Start Meet</button></center></p></a>
   
    </div>



  </div>

 
 

</div>

      {/* <Modal show={show} onHide={handleClose}>
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

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onClick={m}>
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
{/*         
        <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div> */}

{/* <M/> */}


 </>

    );
  }
  
  export default Pmd;