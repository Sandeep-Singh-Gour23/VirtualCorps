import React,{useState, useEffect} from "react"
import Modal from "react-modal"
import Select from "react-select"
import './BtnComponents.style.css'

function Button(props){
   const [modalIsOpen, setModalIsOpen] = useState(false)

  // //fetching
   const [ teamLead, setTeamLead ] = useState([])

   useEffect(() => {
    getAllLeader();
   },[])

  const getAllLeader = async () => {
    try {
      console.log("getting all team leader")
      const res = await fetch("/getAllTLsTMs", {method: 'GET',
      headers:{
        "content-type": "application/json",
        "authorization":"bearer "+localStorage.getItem("jwt")
      }
      })
      console.log("response", res)
      const data = await res.json()
      // console.log(data)
      setTeamLead(data.data.allTeamLeaders)
      console.log(data)
    } catch (error) {
      console.log("Error: ", error)
    }
}
    return(
    <>
       <div className="body-bg">
          <div className="wrapper">
              <div class="btn">
                  <p onClick={()=>setModalIsOpen(true)}> {props.title}</p>
                   <p className="status">Not assigned</p>
                      <span className="BorderTopBottom"></span>
                      <span className="BorderLeftRight"></span>
              </div>
          </div>

         
         <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} 
                    shouldCloseOnOverlayClick={true}
                    style={{overlay:{backgroundColor:'#868686'}}} 
                    ariaHideApp={false} >
        <div className="box">
        <button className="closeBtn" onClick={() => setModalIsOpen(false)}>X</button>
            <h2 className="box-title">{props.title}</h2>

            <p className="des-title">Description-</p>
            <h3 className="description head3">{props.description}</h3><br/>

            <p className="des-title">Sub-description-</p>
            <h3 className="sub-description head3">{props.subDescription}
            </h3>
             
            <Select 
              placeholder="select Team Leader"
              className="drop-down2">
              {
                teamLead.map((item) => {
                  <option key={item.empId} value={item.empId}>
                    {item.fullName}
                  </option>
                }
                )}
              </Select>

            <Select
            className="drop-down2"
            placeholder="Select Project Name" 
            />
            <button className="button-1">Assign</button>
         </div>
          </Modal> 
          
        </div>
    </>
    )
}

export default Button;