import React,{ useState } from 'react'
import { Row, Col } from 'rsuite'
import Modal from "react-modal"
import Select from 'react-select'
import './profile.style.css'

const Profile = (props) => {

     const [modalIsOpen, setModalIsOpen] = useState(false)

      
    return (
        <>
          {/* <Row>
            <Col xs={5} sm={5} md={5} lg={5} className="mem-profile">
                  <h1><AccountCircleRoundedIcon style={{fontSize:'3rem', marginBottom:'1%'}}/>Profile</h1>
                  <p><PermIdentityRoundedIcon style={{fontSize:'2rem'}}/>Name </p>
                  <p><PhoneAndroidOutlinedIcon style={{fontSize:'2rem'}}/>Contact</p>
                  <p><AlternateEmailOutlinedIcon style={{fontSize:'2rem'}}/>Email</p>
                  <p><HomeOutlinedIcon style={{fontSize:'2rem'}}/>Address</p>

                  <div className="working-image">
                    <img src = {Coding} alt="working" /> 
                  </div>
            </Col> */}

          
                <div className="ongoing-project">
                  <button block color="blue" className="mem-project"> 
                     <p onClick={()=>setModalIsOpen(true)}> {props.title}</p> 
                  </button>  
                      <br/>
                 </div>


                 <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} shouldCloseOnOverlayClick={true} style={{overlay:{backgroundColor:'#0000001A'}}} className="status-modal">
                <div className="project-modal">
                  <button className="closeBtn" onClick={() => setModalIsOpen(false)}>X</button>
                    <h2 className="box-title">{props.title}</h2>

                <p className="des-title">Description-</p>
                <h3 className="description head3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3><br/>

                <p className="des-title">Sub-description</p>
                <h3 className="sub-description  head3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut, fugiat sequi esse ducimus dignissimos, dolor quis hic cum ea accusamus quaerat, accusantium incidunt.
                Maxime repellendus incidunt neque minus dicta aperiam!</h3>
                
                <Select 
                  placeholder="Set Status"
                  className="drop-down2"
                />
                <button className="button-modal">Submit</button>
            </div>
              </Modal> 
              
            {/* </Col> */}
          {/* </Row>   */}
        </>
    )
}

export default Profile;

