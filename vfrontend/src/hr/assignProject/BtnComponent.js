import React,{useState} from "react"
import Modal from "react-modal"
import Select from "react-select"
import './BtnComponents.style.css'


function Button(props){
   const [modalIsOpen, setModalIsOpen] = useState(false)
   const status =["assigned","pending","unassigned"];

  //fetching
    
    return(
    <>
    <div className="body-bg">
        <div className="wrapper">
          <div class="btn">
           <p onClick={()=>setModalIsOpen(true)}>{props.title}</p>
            {/* <p className="status">Status: {status[Math.floor(Math.random() * status.length)]}</p> */}
            <p className="status">{props.projectStatus}</p>
            <span className="BorderTopBottom"></span>
            <span className="BorderLeftRight"></span>
          </div>
      </div>
         
         <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} shouldCloseOnOverlayClick={true} style={{overlay:{backgroundColor:'#868686'}}} >
        <div className="box">
        <button className="closeBtn" onClick={() => setModalIsOpen(false)}>X</button>
            <h2 className="box-title">{props.title}</h2>

            <p className="des-title">Description-</p>
            <h3 className="description head3">{props.description}</h3><br/>

            <p className="des-title">Sub-description</p>
            <h3 className="sub-description head3">{props.subDescription}</h3>
             
            {/* <Select 
              placeholder="Select Employee Id"
              className="drop-down2"
            /> */}
            <Select
            className="drop-down2"
            placeholder="Select Project Manager" 
            />
            <button className="button-1">Submit</button>
         </div>
          </Modal> 
        </div>
    </>
    )
}

export default Button;