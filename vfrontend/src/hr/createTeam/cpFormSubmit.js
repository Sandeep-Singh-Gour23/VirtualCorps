import React from 'react'
import Select from "react-select";
import "../../styles/form.css"
import CreateProj from './CreateProj';
import validate from './ValidateCreateProject.js'

const cpFormSubmit = ({submitForm2}) => {
    const { handleChange, handleSubmit2, values, errors, handleClick } = CreateProj(
        submitForm2,
        validate
      );

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

    const ProjectManager = [
        {   value:1,
            label:"Nishi Patodi"
        },
        {
            value:2,
            label:"Deshna Shrivastav"
        },
        {
            value:3,
            label:"Rohit Sharma"
        } ];
    const  TeamLeader = [
        {
            value:1,
            label:"Anshika Sethiya"
        },
        {
            value:2,
            label:"Hardik Yadav"
        },
        {
            value:3,
            label:"Amisha Singh"
        },
        {
            value:4,
            label:"Ayush Gupta"
        },
        {
            value:5,
            label:"Hritik Jain"
        }
    ];
    const TeamMember = [
        {
            value:1,
            label:"Bhawna Sharma"
        },
        {
            value:2,
            label:"Muskan Rathod"
        },
        {
            value:3,
            label:"Aisha Panwar"
        },
        {
            value:4,
            label:"Samarth "
        },
        {
            value:5,
            label:"Darsh Patel"
        }
    ]
    return (
        <>
          <div className="form-content-right">
            <form onSubmit={handleSubmit2} className='form' noValidate>
                <input type="text"
                        placeholder="Enter Team Name"
                        className="form-input"
                        name="teamName"
                        value={values.teamName}
                        onChange={handleChange}
                />
                     {errors.teamName && <p>{errors.teamName}</p>}
                     <br/>
            
                <Select
                    placeholder="Select Team Type"
                    className="drop-down"
                    name="projectValue"
                    value={values.setProjectValue}
                    options={ProjectType}
                    onClick={(setProjectValue) => handleClick('tType', values)}  
                /> 
                {errors.projectValue && <p>{errors.projectValue}</p>}
                 <br />
                <Select 
                    placeholder="Select Project Manager"
                    className="drop-down"
                    name="managerValue"
                    value={values.setManagerValue}
                    options={ProjectManager}
                    onChange={()=>handleClick('projectM', values)}
                /> 
                {errors.managerValue && <p>{errors.managerValue}</p>}
                    <br />
                <Select 
                    placeholder="Select Team Leader"
                    className="drop-down"
                    name="leaderValue"
                    value={values.setLeaderValue}
                    options={TeamLeader}
                    onClick={() => handleClick('teamL', values)}
                /> 
                {errors.leaderValue && <p>{errors.leaderValue}</p>}
                    <br />
                <Select 
                    placeholder="Select Team Member"
                    className="drop-down"
                    name="memberValue"
                    isMulti={true}
                    value={values.setMemberValue}
                    options={TeamMember}
                    onClick={(setMemberValue) => handleClick('teamM',values)}
                /> 
                {errors.memberValue && <p>{errors.memberValue}</p>}
                
                 <button type="submit" className="form-input-btn">Submit</button>
            </form>
          </div>   
        </>
    )
}

export default cpFormSubmit
