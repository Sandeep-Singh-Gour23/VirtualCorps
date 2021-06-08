import React from 'react'
import Select from "react-select";
import "../../styles/form.css"
import CreateProj from './CreateProj';
import validate from './ValidateCreateProject.js'

const cpFormSubmit = ({submitForm2}) => {
    const { handleChange, handleSubmit, values, errors, handleClick } = CreateProj(
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
            label:"ABCDEF 121"
        },
        {
            value:2,
            label:"SDFGTE 152"
        },
        {
            value:3,
            label:"CFHSFGH 178"
        } ];
    const  TeamLeader = [
        {
            value:1,
            label:"lkxcn 254"
        },
        {
            value:2,
            label:"dnfhgb 145"
        },
        {
            value:3,
            label:"cnnfn 785"
        },
        {
            value:4,
            label:"dnfhg 524"
        },
        {
            value:5,
            label:"mdkef 654"
        }
    ];
    const TeamMember = [
        {
            value:1,
            label:"absf"
        },
        {
            value:2,
            label:"dsnvns"
        },
        {
            value:3,
            label:"sncns"
        },
        {
            value:4,
            label:"cnxms"
        },
        {
            value:5,
            label:"cncns"
        }
    ]
    return (
        <>
          <div className="form-content-right">
            <form onSubmit={handleSubmit} className='form' noValidate>
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
