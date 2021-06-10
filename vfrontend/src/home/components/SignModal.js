import React from 'react';
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
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
        <input type="email" id="" name="birthday"></input>
        <br/>
        <br/>
        Enter Password:
        <br/>
        <input type="password" id="" name="appt"></input>
        <br/>
        <br/>


    </Col>
    </Row>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} >
          Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
