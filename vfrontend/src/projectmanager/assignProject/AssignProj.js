import React, { useEffect } from 'react'
import Button from './BtnComponent'
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import taskAssign from '../../Image/undraw_Task_re_wi3v.svg'
import { useState } from 'react';
import BtnComponent from './BtnComponent';
import axios from 'axios'

const AssignProj = (props) => {

    //fetching
  const [ project, setProjects] = useState([])

  useEffect(() => {
    getAllProject();
  },[])

  const getAllProject = async () => {
      try {
        console.log("getting all the projects")
        const response = await fetch("/getPMProjects",{method:'GET',
        headers:{
          "Content-Type":"application/json",
          "authorization":"bearer "+localStorage.getItem("jwt")
        }
      })
        console.log("response:", response )
        const data = await response.json();
        setProjects(data.data)
        console.log(data)
      } catch (error) {
        console.log("Error: ", error)
      }
  }    
    return (
        <>  
             <div className="task-nav">
                <h2 className="headingTask"><img src={taskAssign} alt="logo" className="assign-image"/>Project Assignment</h2>
                <Link to="/projectmanager"><button type="button" class="btn d-icon" className="dash-icon"><DashboardIcon/> Dashboard </button></Link>
            </div>


           <div className="container">
           {
            project.map((value,index) => {
            return(
               <Button props key={index} title={value.projectName} 
               description={value.description} 
               subDescription={value.subDescription}
                projectStatus={value.projectStatus}
               />
            )})}
             </div>
             
     </>        
    )
}
export default AssignProj;