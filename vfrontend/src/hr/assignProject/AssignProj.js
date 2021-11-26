import React, { useEffect } from 'react'
import Button from './BtnComponent'
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import taskAssign from '../../Image/undraw_Task_re_wi3v.svg'
import { useState } from 'react';
import axios from 'axios'


const AssignProj = (props) => {

    const [projectData, setProjData] = useState([])

      useEffect(() =>{
        apiGet()
      }, [])

    //   const apiGet = () => {
    //     fetch("http://localhost:8000/virtualcorp/createProject")
    //     .then((response) => response.json)
    //     .then((json) => {
    //         setProjData(json)
    //     })
    // }

    const apiGet = async () => {
        try {
            console.log("getting all the projects")
        const response = await fetch("/getAllProjects",{method:'GET',
        headers:{
          "Content-Type":"application/json",
          "authorization":"bearer "+localStorage.getItem("jwt")
        }
        })
        const data = await response.json();
        setProjData(data.data.NotAssignedProject)
       }catch (error) {
            console.log("error: ", error);
        }
    }
    return (
        <>  
             <div className="task-nav">
                <h2 className="headingTask"><img src={taskAssign} alt="logo" className="assign-image"/>Project Assignment</h2>
                <Link to="/hr"><button type="button" class="btn d-icon"><DashboardIcon/> Dashboard </button></Link>
            </div>
            <div className="container">
            {
            projectData.map((value,index) => {
            return(
               <Button props key={index} title={value.projectName} 
               description={value.description} 
               subDescription={value.subDescription}
                projectStatus={value.projectStatus}
               />
            )})}
            </div>   
             <span className="showMore">Show More</span> 
     </>        
    )
}
export default AssignProj;