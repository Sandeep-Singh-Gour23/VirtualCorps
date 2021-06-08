import React,{ useCallback, useState } from 'react'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import Coding from '../Image/undraw_Coding_re_iv62.svg'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Row, Col, Button ,Icon, Drawer } from 'rsuite'
import TaskStatus from './TaskStatus';
import './profile.style.css'

const Profile = () => {

    function useModalState(defaultValue= false){

        const [isOpen, setIsOpen] = useState(defaultValue)
     
        const open = useCallback(() => setIsOpen(true),[]);
        const close = useCallback(() => setIsOpen(false), []);
     
        return { isOpen, open, close}
     }

    const { isOpen, close, open } = useModalState();

      
    return (
        <>
          <Row>
            <Col xs={5} sm={5} md={5} lg={5} className="mem-profile">
                  <h1><AccountCircleRoundedIcon style={{fontSize:'3rem', marginBottom:'1%'}}/>Profile</h1>
                  <p><PermIdentityRoundedIcon style={{fontSize:'2rem'}}/>Name </p>
                  <p><PhoneAndroidOutlinedIcon style={{fontSize:'2rem'}}/>Contact</p>
                  <p><AlternateEmailOutlinedIcon style={{fontSize:'2rem'}}/>Email</p>
                  <p><HomeOutlinedIcon style={{fontSize:'2rem'}}/>Address</p>

                  <div className="working-image">
                    {/* <a href="#home" ><QuestionAnswerIcon style={{fontSize:'4rem'}}/>Chat</a> */}
                    <img src = {Coding} alt="working" /> 
                  </div>
            </Col>

            

            <Col xs={8} sm={8} md={8} lg={8}>
            <center className="mt-2"><h2>Projects</h2></center>
                <div className="ongoing-project">

                <button block color="blue" onClick={open} className="mem-project"> 
                     Project 1
                 </button>  
                    <br/>
                 <button block color="blue" onClick={open} className="mem-project"> 
                     Project 2
                 </button>  

                <Drawer full show={isOpen} onHide={close} placement="right" keyboard={true} >
                    <TaskStatus />
                </Drawer>
                </div>
            </Col>
          </Row>  
        </>
    )
}

export default Profile;

