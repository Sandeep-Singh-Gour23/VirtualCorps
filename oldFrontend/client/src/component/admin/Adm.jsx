
import React , { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import DuoIcon from '@material-ui/icons/Duo';
import ChatIcon from '@material-ui/icons/Chat';
import BarChartIcon from '@material-ui/icons/BarChart';
import HistoryIcon from '@material-ui/icons/History';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueueIcon from '@material-ui/icons/Queue';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideocamIcon from '@material-ui/icons/Videocam';
import BuildIcon from '@material-ui/icons/Build';
import adm from './images/adm.jpg';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Modal,Button,Row,Col,DropdownButton,Dropdown} from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import './Adm.css';

const Adm = () => {

    return (
  <>
  
  <Row>
    <Col xs={3} sm={3} md={3} lg={3} className="AdminNav shadow p-3 mb-5  rounded" >
    <center>  <h1>ADMIN  <BuildIcon style={{  fontSize: 50  }} /> <SettingsIcon style={{  fontSize: 50  }}/> </h1></center>
  <br/>
 
    <div class="list-group  " id="list-tab" role="tablist">
      <a class="Adm list-group-item list-group-item-action " id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"> <HomeIcon /> Home</a>
      <a class="Adm list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"><AccountCircleIcon/> Profile</a>
      <a class="Adm list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages"><PeopleAltIcon/> Team</a>
      <a class="Adm list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings"><PersonIcon/> Project Manager</a>
    </div>
    <br/>
    <center>
    <img src = {adm} alt = "logo" /></center>
    </Col>
    <Col xs={9} sm={9} md={9} lg={9}>
      <br/>
    <div class="card-deck">
    <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-body">
    <center>
      <h5 class="card-title">PROGRESS</h5>
     <BarChartIcon style={{ color: '##00d084', fontSize: 50  }}/>
     </center>
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-body">
      <center>
      <h5 class="card-title" >CHAT</h5>
     <ChatIcon style={{ color: '#00d084', fontSize: 50  }}/>
     </center>
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-body">
      <center>
      <h5 class="card-title">MEET</h5>
      <DuoIcon  style={{ color: '##00d084', fontSize: 50  }}/>
      </center>
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-body">
    <center>
      <h5 class="card-title">MEET HISTORY</h5>
      < HistoryIcon style={{ color: '#00d084', fontSize: 50  }}/>
      </center>
    </div>
  </div>
  </div>
      {/* <br/> */}
  <div class="card-deck">
    <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
     <center> <h3 class="card-title">HR ROLE</h3>
      <div class="card-deck">
    <div class="card shadow p-3 mb-5  rounded " style={{ backgroundColor: '#ff7800'  }} xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
    <QueueIcon style={{ color: 'white', fontSize: 30  }} />
      <h6 class="card-title" style={{ color: 'white'  }} >Create Project</h6>
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
    <PeopleAltIcon  style={{  fontSize: 30  }}/>
      <h6 class="card-title">Assign Project</h6>
    </div>
  </div>
  </div>
  <div class="card-deck">
  <div class="card shadow p-3 mb-5  rounded " style={{ backgroundColor: '#ff7800'  }} xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
    <PersonPinIcon style={{ color: 'white', fontSize: 30  }} />
      <h6 class="card-title" style={{ color: 'white'  }} >New Member</h6>
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
    <GroupAddIcon  style={{  fontSize: 30  }}/>
      <h6 class="card-title">Create Team</h6>
    </div>
  </div>
  </div>
  </center>
    </div>
  </div>

  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
    <center>  <h3 class="card-title">PROJECT MANAGER</h3>
      <div class="card-deck">
      <div class="card shadow p-3 mb-5  rounded " style={{ backgroundColor: '#ff7800'  }} xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <FindInPageIcon style={{ color: 'white', fontSize: 30  }} />
      <h6 class="card-title" style={{ color: 'white'  }} >Project Detail</h6>
    
    
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
    <PeopleAltIcon  style={{  fontSize: 30  }}/>
      <h6 class="card-title">Assign Project</h6>
      
    </div>
  </div>
  </div>

  <div class="card-deck">
  <div class="card shadow p-3 mb-5  rounded " style={{ backgroundColor: '#ff7800'  }} xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
    <FindInPageIcon style={{ color: 'white', fontSize: 30  }} />
      <h6 class="card-title" style={{ color: 'white'  }} >Schedule Meet</h6>
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
    <VideocamIcon  style={{  fontSize: 30  }}/>
      <h6 class="card-title">Start Meet</h6>
    </div>
  </div>
  </div>
  </center>
    </div>
  </div>
  </div>

   
    
  
    </Col>
  </Row>
 

 </>
    );
  }
  
  export default Adm;