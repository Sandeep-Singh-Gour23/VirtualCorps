import React,{useState, useEffect} from 'react'
import Select from "react-select";
import "../../styles/form.css"
import CreateProj from './CreateProj';
import validate from './ValidateCreateProject.js'
import Modal from "react-modal";

const CpFormSubmit = ({submitForm2}) => {
  const { handleChange, handleSubmit2, values, errors, handleClick } = CreateProj(
      submitForm2,
      validate
    );

    const [ProjName, setProjName] = useState([])
    // const [DropPName, setDropPName] = useState();

    // const getProjectName = async () =>{ 
    //   try {
    //     const response = await fetch('/getAllProjects',{
    //       method : "GET",
    //       headers:{
    //         "Content-Type":"application/json",
    //         "authorization":"bearer "+localStorage.getItem("jwt")
    //       },
    //     })
    //     const data = await response.json();
    //    // console.log("Project Name: ", data.data.NotAssignedProject);   
    //     setProjName(data.data.NotAssignedProject)
    //     } catch (error) {
    //       console.log("Error in get project manager: ", error);
    //     }  
    // }
    const [modalIsOpen, setModalIsOpen] = useState(false)
    

    const TeamLeader = [
      {
          value:1,
          label:"Anshika"
      },
      {
          value:2,
          label:"Saurav"
      },
      {
          value:3,
          label:"Mansha"
      },
      {
          value:4,
          label:"Vinay"
      },
      ];

      const TeamMember = [
        {
            value:1,
            label:"Anshika"
        },
        {
            value:2,
            label:"Saurav"
        },
        {
            value:3,
            label:"Mansha"
        },
        {
            value:4,
            label:"Vinay"
        },
        ];

    const ProjectType = [
      {
          value:1,
          label:"UI/UX design"
      },
      {
          value:2,
          label:"Data Modelling"
      },
      {
          value:3,
          label:"Front-end"
      },
      {
          value:4,
          label:"Back-end"
      },
      ];

  //get project manager
  // const [ProjManager, setProjManager] = useState([])
  // const [dropPM, setDropPM] = useState();

  // const getProjectManager = async () =>{ 
  //     try {
  //       const response = await fetch('/getAllProjectManager',{
  //         method : "GET",
  //         headers:{
  //           "Content-Type":"application/json",
  //           "authorization":"bearer "+localStorage.getItem("jwt")
  //         },
  //       })
  //       const data = await response.json();
  //     //   console.log("Project Manager: ", data.data);   
  //       setProjManager(data.data)
  //       } catch (error) {
  //         console.log("Error in get project manager: ", error);
  //       }  
  //   }   

  // get team leader
  const [TeamL, setTeamLead] = useState()
  // const [DropTL, setDropTL] = useState()
  // const getTeamLeader = async () =>{ 
  //     try {
  //       const response = await fetch('/getAllTLsTMs',{
  //         method : "GET",
  //         headers:{
  //           "Content-Type":"application/json",
  //           "authorization":"bearer "+localStorage.getItem("jwt")
  //         },
  //       })
  //       const data = await response.json();
  //     //   console.log("Team Leader: ", data.data);   
  //       setTeamLead(data.data.allTeamLeaders)
  //       } catch (error) {
  //         console.log("Error in get Team Leader: ", error);
  //       }  
  //   }
 // get team members
   // const [drop, setDrop] = useState()
    const [TeamM, setTeamM] = useState()

//  const getTeamMember = async () =>{ 
//   try {
//     const response = await fetch('/getAllTLsTMs',{
//       method : "GET",
//       headers:{
//         "Content-Type":"application/json",
//         "authorization":"bearer "+localStorage.getItem("jwt")
//       },
//     })
//     const data = await response.json();
//   //   console.log("Team Member: ", data.data.allTeamMembers);   
//     setTeamM(data.data.allTeamMembers)
//     } catch (error) {
//       console.log("Error in get team member: ", error);
//     }  
// }

// useEffect(() => {
//     getTeamMember();
//     getTeamLeader();
//     getProjectManager();
//     getProjectName();
// }, [])

  return (
      <>
        <div className="form-content-right">
          <form onSubmit={handleSubmit2} className='form' noValidate>
          {/* <p>Select Project Name: </p>
              <select 
                  className="drop-down"
                  name="ProjValue"
                  value={DropPName}
                  style={{backgroundColor:"white"}}
                  onChange = {(event) => {
                  setDropPName(event.target.value);
               }}
              >
              {
                  ProjName.map((values,index)=> {
                  return <option key = {index}
                  id={values.projectName} value={values.id}>{values.projectName}</option>
                  })
                  }
              </select>
                   {errors.teamName && <p>{errors.teamName}</p>} */}
                   <br/>
              <p>Select Team Type:</p>
              <Select
                  placeholder="Select Team Type"
                  className="drop-down"
                  name="projectValue"
                  value={values.setProjectValue}
                  style={{backgroundColor:"white"}}
                  options={ProjectType}
                  onClick={(setProjectValue) => handleClick('tType', values)}  
              /> 
              {errors.projectValue && <p>{errors.projectValue}</p>}
               <br />
               {/* <p>Select Project Manager: </p>
              <select 
                  placeholder="Select Project Manager"
                  className="drop-down"
                  name="managerValue"
                  value={dropPM}
                  style={{backgroundColor:"white"}}
                  onChange = {(event) => {
                  setDropPM(event.target.value);
               }}
              >
              {
                      ProjManager.map((values,index)=> {
                      return <option key = {index}
                      id={values.fullName} value={values.id}>{values.fullName} (Id-{values.empId})</option>
                  })
                  }
              </select> 
              {errors.managerValue && <p>{errors.managerValue}</p>} */}
                  <br />
                  <p>Select Team Leader: </p>
                  <Select
                  placeholder="Select Team Leader"
                  className="drop-down"
                  name="projectManager"
                  value={values.setProjManager}
                  style={{backgroundColor:"white"}}
                  options={TeamLeader}
                  onClick={(setTeamLead) => handleClick('teamL', values)}  
              /> 
              {/* <p>Select Team Leader:</p>    
              <select 
                  placeholder="Select Team Leader"
                  className="drop-down"
                  style={{backgroundColor:"white"}}
                  name="teamLeader"
                  value={DropTL}
                  onChange = {(event) => {
                  setDropTL(event.target.value);
                  }}
                >
                  {
                      TeamL.map((values,index)=> {
                      return <option key = {index}
                      id={values.fullName} value={values.id}>{values.fullName} (Id-{values.empId})</option>
                  })
                  }
              </select> 

              {errors.leaderValue && <p>{errors.leaderValue}</p>} */}
              <br />

              {/* <p>Select Team Member:</p>    
              <select 
                  placeholder="Select Team Member"
                  style={{backgroundColor:"white"}}
                  className="drop-down"
                  name="teamMember"
                  isMulti={true}
                  value={drop}
                  onChange = {(event) => {
                  setDrop(event.target.value);
                  }}
               >
                 {
                      TeamM.map((values,index)=> {
                      return <option key = {index}
                      id={values.fullName} value={values.id}>{values.fullName} (Id-{values.empId})</option>
                  })
                  }
               </select>
              {errors.memberValue && <p>{errors.memberValue}</p>}
               */}
               <p>Select Team Member</p>
               <Select
                  placeholder="Select Team Member"
                  className="drop-down"
                  name="teamMember"
                  isMulti={true}
                  value={values.setTeamM}
                  style={{backgroundColor:"white"}}
                  options={TeamLeader}
                  onClick={(setTeamM) => handleClick('teamM', values)}  
              /> 
               {/* <button type="submit" className="form-input-btn">Submit</button> */}
               <br/>
               <button type="submit" className="form-input-btn" onClick={()=>setModalIsOpen(true)}>Submit</button>

                    <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} 
                    shouldCloseOnOverlayClick={true}
                    style={{overlay:{backgroundColor:'#fff',position:'absolute',overflow:'hidden',top:'20%',left:'35%',height:'25rem', width:'35rem',}}} 
                    ariaHideApp={false} >
                    <div className="submit-modal">
                    <button className="closeBtn" style={{textAlign:'left', position:'absolute',left:'25rem', top:'3rem'}} onClick={() => setModalIsOpen(false)}>X</button>
                    <br />
                    <br />
                    <br />
                    <h2 style={{width:'30rem'}}>Team created Successfully!!</h2>
                    </div>
                    </Modal>
          </form>
        </div>   
      </>
  )
}

export default CpFormSubmit
