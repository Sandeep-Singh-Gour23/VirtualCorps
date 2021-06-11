import React ,{useState,useEffect}from 'react';
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
import {Route ,useHistory} from 'react-router-dom';
import Hrd from '../../hr/Hrd'


// import './SignModal.css';

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

export default function SignModal() {
  const history=useHistory();
  const [open, setOpen] = React.useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


const signInUuser=async(e)=>{
  e.preventDefault();
// history.push("/hr");
console.warn(email,password);
// let item={email,password};
// console.log(item.email);
fetch("/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        
        if (data.error) {
          // M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        
else{
setOpen(false);


          localStorage.setItem("jwt", data.data.message)
        //   localStorage.setItem("user", JSON.stringify(data.data.user.userId))
        //   localStorage.setItem("userName", JSON.stringify(data.data.user.userName))
        //   notify();
        // console.log(data.data.role);
          if(data.data.role=='HR'){
  history.push("/hr")
 
}

// if(data.data.role=='Admin'){
//   console.log('admin');
//   history.push("/admin")
// }

// if(data.data.role=='Team Leader'){
//   history.push("/member")
// }

// if(data.data.role=='Team Member'){
//   history.push("/member")
// }

// if(data.data.role=='Project Manager'){
//   history.push("/projectmanager")


// }



        }
      }).catch(err => {
        console.log(err)
      })

// let data= await fetch("/login",{
//   method:'POST',
//   header:{
//     // "Content-Type":"application.json"
//   },
//   body: JSON.stringify({ "email": email,
//    "password": password,
//    })


// });
// data= await data.json();
// localStorage.setItem('JWT',JSON.stringify(data))
// if(data.role=='HR'){
//   history.push("/hr")
// }

// if(data.role=='admin'){
//   history.push("/adm")
// }

// if(data.role=='Team Leader'){
//   history.push("/member")
// }

// if(data.role=='Team Member'){
//   history.push("/member")
// }

// if(data.role=='Project Manager'){
//   history.push("/projectmanager")


// }


}



  return (
    <>
    <div>
      
      <Button style={{color:'white' , border:'1px solid white'}} onClick={handleClickOpen}>
        {/* <Button style={{color:'white' ,fontSize:'20px',position:'aboslute',}} onClick={handleClickOpen}></Button> */}Sign In
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Sign In Here-
        </DialogTitle>
        <DialogContent dividers>
          <Row>
    <Col xs={7}>
    <img  src='images/login-modal.png' height ="230px" alt="Card image cap"/>
    </Col>
    <Col xs={5}>
        Enter Email:
        <input type="text" palceholder='email'
        onChange={(e)=>setEmail(e.target.value)}
      />
        <br/>
        <br/>
        Enter Password:
        <br/>
        <input type="password" palceholder="password" 
        onChange={(e)=>setPassword(e.target.value)}></input>
        <br/>
        <br/>


    </Col>
    </Row>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={signInUuser} >
          Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}
