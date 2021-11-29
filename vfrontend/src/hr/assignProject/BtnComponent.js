import React,{useState,useEffect} from "react"
import Modal from "react-modal"
import Select from "react-select"
import './BtnComponents.style.css'


function Button(props){
   const [modalIsOpen, setModalIsOpen] = useState(false)
  //  const status =["assigned","pending","unassigned"];
   const[projectManager, setProjectManager] = useState([])

  //fetching
    const getProjectManager = async () =>{ 
      try {
        const response = await fetch('/unassignedProjectManager',{
          method : "GET",
          headers:{
            "Content-Type":"application/json",
            "authorization":"bearer "+localStorage.getItem("jwt")
          },
        })
        const data = await response.json();
        console.log("Project Manager: ", data);      
        } catch (error) {
          console.log("Error in get project manager: ", error);
        }  
    }
  
    //posting project

    // const assignProject = () => {
    //   fetch('/assignProject')
    // }

    useEffect(() => {
      getProjectManager()
    }, [])
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
         
         <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} shouldCloseOnOverlayClick={true} ariaHideApp={false} style={{overlay:{backgroundColor:'#868686'}}} >
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
            name="proejctManager"
            options={projectManager.map((data) => {
              return (
                <option value="data.value">{data.setProjectManager}</option>
              ) 
            })}
            />
            <button className="button-1">Submit</button>
         </div>
          </Modal> 
        </div>
    </>
    )
}

export default Button;