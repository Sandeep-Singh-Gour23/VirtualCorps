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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        <input type="date" id="birthday" name="birthday"></input>
        <br/>
        <br/>
        Select Time:
        <br/>
        <input type="time" id="appt" name="appt"></input>
        <br/>
        <br/>
        Select Team:
        <br/>
        <select name="cars" id="cars" style={{backgroundColor:"white"}}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

    </Col>
  </Row>
          {/* </Typography> */}
        </DialogContent>
        <DialogActions>
         
          <button type="button" class="btn btn-dark"  onClick={handleClose}> Schedule</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
