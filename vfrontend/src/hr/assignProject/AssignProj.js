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

      const apiGet = () => {
        fetch("http://localhost:8000/virtualcorp/createProject")
        .then((response) => response.json)
        .then((json) => {
            setProjData(json)
        })
    }
    return (
        <>  
             <div className="task-nav">
                <h2 className="headingTask"><img src={taskAssign} alt="logo" className="assign-image"/>Project Assignment</h2>
                <Link to="/hr"><button type="button" class="btn d-icon"><DashboardIcon/> Dashboard </button></Link>
            </div>
            <div className="container">
                <Button props title="Project 1" />  
                <Button props title="Project 2" />
                <Button props title="Project 3" />
                <Button props title="Project 4" />
                <Button props title="Project 5" />
                <Button props title="Project 6" />
                <Button props title="Project 7" />
            </div>   
             <span className="showMore">Show More</span> 
     </>        
    )
}
export default AssignProj;