import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import  './createNote.css';
import logo from './images/cn.jpg';
import logo1 from './images/cn2.jpg';
import {Row,Col} from 'react-bootstrap';

const  CreateNote = (props) => {

  const [note,setnote] = useState(
   { 
    title : "",
    content : "",
  }
  );
  
  const ip = (e) => {
    const {name,value} = e.target;

      
      setnote( (preval) => {

        return{
            ...preval,
            [name] : value,


        };

      })

    }

    const add = () =>{
      props.passNote(note);
      setnote({
        title : "",
        content : "",
        description:"",
      })

    }
  return (
<>
<center>
<div className = "main_div shadow p-3 mb-5">
    {/* <img src = {logo} alt = "logo" height = "100px" weight = "40px"/>Create New Project */}
    <Row>
    <Col xs={5}>
    <img class="card-img-top" src= {logo1} height = "250px" alt="Card image cap"/>
    </Col>
    <Col xs={7}>
       
   
    <input
     type="text" 
     value={note.title} 
     name= "title" 
     placeholder = "Project Title" 
     className = "in"
     onChange = {ip}
     />
     <br/><br/>
    <textarea  
    value={note.content}
    name= "content" 
    placeholder = "Project Sub Title" 
    className = "in"
    onChange = {ip}
      >
        </textarea>
        <textarea  
    value={note.description}
    name= "description" 
    placeholder = " Project Description" 
    className = "in"
    onChange = {ip}
      >
        </textarea>
        <br/><br/>
    {/* <button className= "add" ><AddIcon/></button> */}
    <button className="add shadow p-3 mb-5" onClick = {add} ><AddIcon /></button>
   
    </Col>
  </Row>
  
  </div>
            
  


</center>
</>
  );
}

export default CreateNote;