
import React from 'react'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { ButtonToolbar, Notification, Button } from 'rsuite'
import {Col, Row } from 'react-bootstrap'

const Profile = () => {

    function open(funcName) {
        Notification[funcName]({
          title: funcName,
          description: <p style={{ width: 320 }} rows={3}>You have a Notification </p>
        });
      }
      
    return (
        <>
          <Row>
            <Col xs={2} sm={2} md={2} lg={2}>
                   <h2><AccountCircleRoundedIcon style={{fontSize:'3rem'}} />Profile</h2>
                   <br />
                   <div className="list-group" role="tablist">
                    <p className="list-group-item" data-toggle="list" role="tab"><PermIdentityRoundedIcon/> Name</p>
                    <p className="list-group-item" data-toggle="list" role="tab"><PhoneAndroidOutlinedIcon/> Contact</p>
                    <p className="list-group-item" data-toggle="list" role="tab"><AlternateEmailOutlinedIcon/> Email</p>
                    <p className="list-group-item" data-toggle="list" role="tab"><HomeOutlinedIcon/> Address</p>
                   </div>
                   <div className="list-group icon-group">
                        <a href="list-home" className="chat" >Chat <QuestionAnswerIcon style={{fontSize:'2rem'}}/></a>
                        <ButtonToolbar>
                            <Button className="notice" onClick={() => open('info')}> Notification<NotificationsIcon style={{fontSize:'2rem'}}/> </Button>
                        </ButtonToolbar>
                    </div>
            </Col>

            <Col xs={6} sm={6} md={6} lg={6}>
            <center className="mt-2"><h2>Projects</h2></center>
                <div className="card-deck">
                <center>
                    <div class="card shadow p-3 mt-5 mr-3 bg-white rounded project-card">
                        <div class="card-body">
                            <center>
                                <h5 class="card-title" >Project 1</h5>
                            </center>
                        </div>
                    </div>

                    <div class="card shadow p-3 mt-5 bg-white rounded project-card">
                        <div class="card-body">
                            <center>
                                <h5 class="card-title" >Project 2</h5>
                            </center>
                        </div>
                    </div>
                </center>
                </div>
            </Col>
          </Row>  
        </>
    )
}

export default Profile;

