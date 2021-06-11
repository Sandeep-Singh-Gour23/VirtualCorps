import React , { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Row,Col,DropdownButton,Dropdown} from 'react-bootstrap';
import shedule from './images/pms.jpg';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {

  const [date,setDate]= useState();
  const [time,setTime]= useState();
  const [drop,setDrop]= useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const schedule =  async(e)  => {

    e.preventDefault();
    console.log(date);
    const res = await fetch("/scheduleMeet" ,{
      method : "POST",
      headers:{
        "Content-Type":"application/json",
        // "authorization":"bearer "+localStorage.getItem("JWT")
      },
      body: JSON.stringify({
        "meetDate": date,
   "meetTime": time,
   "teamName": drop
      
       
      })
     
 });

 const data = await res.json();
 console.log(data);
 if(!data)
 {
   window.alert("Invailid project creation");
  
 }
 else{
   window.alert("Schedule Meeting Successfully");
   console.log(data);
   setOpen(false);
 
 }
 
    
  };

  return (
    <div>
      {/* <Button  color="">
    
      </Button> */}
      <button type="button" class="btn btn-dark"  onClick={handleClickOpen}>  Schedule Meeting</button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Schedule Meeting
        </DialogTitle>
        <DialogContent dividers>
        <Row>
    <Col xs={7}>
    <img class="card-img-top" src= {shedule} height ="230px" alt="Card image cap"/>
    </Col>
    <Col xs={5}>
        Select Date:
        <input type="date" id="birthday" name="birthday"
         value ={date}
         onChange = {(event)=>{
           setDate(event.target.value);
         }}
        ></input>
        <br/>
        <br/>
        Select Time:
        <br/>
        <input type="time" id="appt" name="appt"
         value ={time}
         onChange = {(event)=>{
           setTime(event.target.value);
         }}
        
        ></input>
        <br/>
        <br/>
        Select Team:
        <br/>
        <select name="cars" id="cars"
        value ={drop}
        onChange = {(event)=>{
          setDrop(event.target.value);
        }}
        style={{backgroundColor:"white"}}>
  <option value="Team A">Team A</option>
  <option value="Team B">Team B</option>
  <option value="Team C">Team C</option>
  <option value="Team D">Team D</option>
</select>

    </Col>
  </Row>
          {/* </Typography> */}
        </DialogContent>
        <DialogActions>
         
          <button type="button" class="btn btn-dark"  onClick={schedule}> Schedule</button>

          <button type="button" class="btn btn-danger"  onClick={handleClose}> Close</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
