import React,{useState,useEffect} from "react"
import Modal from "react-modal"
import './BtnComponents.style.css'

function Button(props){
   const [modalIsOpen, setModalIsOpen] = useState(false)

  //fetching
  
  const [drop, setDrop] = useState()
  const [projectManager, setProjectManager] = useState([])

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
        // console.log("Project Manager: ", data.data);   
        setProjectManager(data.data)
        } catch (error) {
          console.log("Error in get project manager: ", error);
        }  
    }
  
    // posting project
     const AssignProj = async(e) => {
       e.preventDefault();
       try {
        console.log("assign proj called")
        const res = await fetch('/assignProject',{
         method : "POST",
         headers:{
           "Content-Type":"application/json",
           "authorization":"bearer "+localStorage.getItem("jwt")
         },
         body: JSON.stringify({
           "projectM_id":projectManager.empId,
           "projectManager":projectManager.fullName,  
           "title":props.title,       
         })
        })
          const data = await res.json();
        //  console.log(data)
          if(!data){
            window.alert("nothing happened");
          }else{
            window.alert("project assigned");
          }
       } catch (error) {
         console.log("assigning project error: ", error)
       }
     }

    useEffect(() => {
      getProjectManager()
    }, [])
    // console.log("project title selected:",props.description);
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
         
         <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} shouldCloseOnOverlayClick={true} ariaHideApp={false} style={{overlay:{backgroundColor:'none'}}} >
        <div className="box">
        <button className="closeBtn" onClick={() => setModalIsOpen(false)}>X</button>
            <h2 className="box-title">{props.title}</h2>

            <p className="des-title">Description-</p>
            <h3 className="description head3">{props.description}</h3><br/>

            <p className="des-title">Sub-description</p>
            <h3 className="sub-description head3">{props.subDescription}</h3>
            <br />
             
            <p className="select-pm">Select Project Manager:</p>
            <select
            className="drop-down2"
            name="proejctManager"
            value={drop}
            id="projectManager"
            onChange = {(event) => {
              setDrop(event.target.value);
            }}
            style={{backgroundColor:"white"}}
            >
            {   
              projectManager.map((value,index)=> {
                return <option key = {index}
                 id={value.fullName} value={value.id}>{value.fullName} (Id-{value.empId})</option>
              }) }
            </select>
            <br />
            <button type="submit" className="button-1" onClick={AssignProj}>Assign</button>
         </div>
          </Modal> 
        </div>
    </>
    )
}

export default Button;