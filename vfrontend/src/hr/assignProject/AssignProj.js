import React from 'react'
import Button from './BtnComponent'


const AssignProj = () => {
    return (
        <>
            <h2 className="heading">Project Assignment</h2>
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