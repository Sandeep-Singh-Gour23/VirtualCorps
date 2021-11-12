import React,{useState, useEffect} from "react"
import Modal from "react-modal"
import Select from "react-select"
import './BtnComponents.style.css'

function Button(props){
   const [modalIsOpen, setModalIsOpen] = useState(false)

  // //fetching
  // const [ project, setProjects] = useState([])

  //   useEffect(() => {
  //     getAllProject()
  //   },[])

  //   const getAllProject = async () => {
  //       try {
  //         console.log("getting all the projects")
  //         const response = await fetch("/getAllProjects",{method:'GET'})
  //         console.log("response:", response )
  //         const data = await response.json();
  //         setProjects(data.data.NotAssignedProject)
  //         console.log(data.data.NotAssignedProject)
  //       } catch (error) {
  //         console.log("Error: ", error)
  //       }
  //   }
    return(
    <>
       <div className="body-bg">
  
          
          {/* {
            project.map((value,index) => {
            return( */}
              <div className="wrapper">
              <div class="btn">
                  <p onClick={()=>setModalIsOpen(true)}> {props.title}</p>
                   <p className="status">Let it be</p>
                       <span className="BorderTopBottom"></span>
                       <span className="BorderLeftRight"></span>
                </div>
              </div>
              {/* )
             }
            )}   */}
         
         <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} 
                    shouldCloseOnOverlayClick={true}
                    style={{overlay:{backgroundColor:'#868686'}}} 
                    ariaHideApp={false} >
        <div className="box">
        <button className="closeBtn" onClick={() => setModalIsOpen(false)}>X</button>
            <h2 className="box-title">{props.title}</h2>

            <p className="des-title">Description-</p>
            <h3 className="description head3">{props.value.description}</h3><br/>

            <p className="des-title">Sub-description-</p>
            <h3 className="sub-description head3">{props.subDescription}
            </h3>
             
            <Select 
              placeholder="Select Employee Id"
              className="drop-down2"
            />
            <Select
            className="drop-down2"
            placeholder="Select Project Name" 
            />
            <button className="button-1">Submit</button>
         </div>
          </Modal> 
          
        </div>
    </>
    )
}

export default Button;