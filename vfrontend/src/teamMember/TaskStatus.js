import React from 'react'
import Profile from './Profile'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import DuoIcon from '@material-ui/icons/Duo';
import ChatIcon from '@material-ui/icons/Chat';
import Coding from '../Image/undraw_Coding_re_iv62.svg'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Row, Col } from 'rsuite'

const TaskStatus = () => {
    return (
        <div>
             <Row>
            <Col xs={5} sm={5} md={5} lg={5} className="mem-profile">
                  <h1><AccountCircleRoundedIcon style={{fontSize:'3rem', marginBottom:'1%'}}/>Profile</h1>
                  <p><PermIdentityRoundedIcon style={{fontSize:'2rem'}}/>Name </p>
                  <p><PhoneAndroidOutlinedIcon style={{fontSize:'2rem'}}/>Contact</p>
                  <p><AlternateEmailOutlinedIcon style={{fontSize:'2rem'}}/>Email</p>
                  <p><HomeOutlinedIcon style={{fontSize:'2rem'}}/>Address</p>

                  <div className="working-image">
                    {/* <a href="#home" ><QuestionAnswerIcon style={{fontSize:'4rem'}}/></a> */}
                    <img src = {Coding} alt="working" /> 
                  </div>
                </Col>
          
                <Col xs={12} sm={12} md={12} lg={12}>
                    <center className="mt-2"><h2>Projects</h2></center>
                    <Profile props title="Project 1" />  
                    <Profile props title="Project 2" />
                </Col>

                <Col xs={6} md={6} lg={6}>
                    <div className="meet-chat">
                        <div className="meet">
                            <h3 style={{textAlign:'center', color:'#fff'}}><DuoIcon /> Meeting</h3>
                        </div>
                        <br />
                        <div className="chat">
                                <h2 style={{textAlign:'center', color:'#fff', marginTop:'1rem'}}><ChatIcon style={{fontSize:'3rem'}}/></h2>
                                 <h3 style={{textAlign:'center', color:'#fff'}}>Chat</h3>
                                <p style={{textAlign:'center', color:'#fff'}}>Have a doubt ? Let's discuss</p>
                         </div>
                    </div>

                </Col>
            </Row>        
        </div>  
    )
}

export default TaskStatus
