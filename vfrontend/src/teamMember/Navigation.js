import React, { useState,useEffect } from 'react'
import './memberStyle.css'
import WorkTime from '../../src/Image/undraw_Work_time_re_hdyv.svg'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import DuoOutlinedIcon from '@material-ui/icons/DuoOutlined';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Col } from 'rsuite'



const Navigation = () => {

    const getData = async () => {
        try {
            const res = await fetch('/')
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getData();
    }, [])
        return(
        <>
         <div className="top-nav">
            <h2 className="work-head"><img src={WorkTime} alt="work-time" className="work-img" />Let's get back to the work!!</h2>
            <div className="two-icon">
                <p style={{marginTop:'0.5rem'}}><ForumOutlinedIcon style={{marginTop:'0.5rem'}}/>Chat</p>
                <p><DuoOutlinedIcon/>Meeting</p>
            </div>
         </div>
           <Col xs={5} md={5} lg={5}>
            <div className="mem-navbar">
                <div className="profile-sec">
                    <AccountCircleRoundedIcon className="profile-icon" style={{fontSize:'10rem', color:'#fff'}}/>
                    <p className="profile-p">Profile</p>
                </div>
                <ul className="mem-ul">
                    <li><PermIdentityRoundedIcon style={{fontSize:'2rem'}}/>Name</li>
                    <li><PhoneAndroidOutlinedIcon style={{fontSize:'2rem'}}/>Contact</li>
                    <li><AlternateEmailOutlinedIcon style={{fontSize:'2rem'}}/>Email</li>
                    <li><HomeOutlinedIcon style={{fontSize:'2rem'}}/>Address</li>
                    <li><WorkOutlineOutlinedIcon style={{fontSize:'2rem'}}/>Technology</li>
                </ul>
                <div className="tm-logout">
                    <p><ExitToAppOutlinedIcon />Logout</p>
                 </div>
            </div>
           </Col> 
        </>
    )
}

export default Navigation
