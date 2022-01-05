import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './note.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import {Row,Col} from 'react-bootstrap';


const Note = (props) => {
  const del = () =>{
    props.deleteItem(props.id);
  }
    return (
  <>
 
    <div className = "note_div shadow p-3 mb-5 col-sm-3  " >
        <h1 className = "text-center title" style ={{color:'#4D5EAE'}}> {props.title}</h1><br/>
        <p> {props.content}</p>
        <br/>
        <Row>
          <Col lg={5} sm={5} sm={5} xs={5}>
        <p> <FiberManualRecordIcon  color="secondary"/>{props.status} </p>    
        </Col>
        <Col  lg={5} sm={5} sm={5} xs={5}>
        {/* <Button variant="contained" color="dark" style ={{backgroundColor:'#4D5EAE',color:'white'}} size="small">Detail</Button> */}
        </Col>
        {/* <button className = "text-right"  onClick={del}>< DeleteOutlineIcon/></button> */}
        <Col lg={2} sm={2} sm={2} xs={2}>
        <IconButton color="secondary" ><DeleteIcon /></IconButton>
        </Col>
        </Row>
    </div>
    
  </>
    );
  }
  
  export default Note;