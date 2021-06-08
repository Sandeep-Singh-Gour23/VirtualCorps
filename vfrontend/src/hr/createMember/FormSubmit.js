import React from 'react';
// import ReactDOM from "react-dom";
import Select from "react-select";
import "../../styles/form.css"
import useCreateMemForm from './useCreateMemForm';
import validate from './ValidateInfo'


const FormSubmit = ({submitForm}) => {
    const {handleChange, handleSubmit, values, errors, handleClick} = useCreateMemForm(
        submitForm,
        validate, 
      );
    // validation for role dropdown
    //   const [roleValue, setRoleValue] = useState('')

    //   const handleClick = (field, value) => {
    //     switch (field) {
    //       case 'roles':
    //         setRoleValue(value)
    //         console.log(roleValue)
    //         break
    
    //       default:
    //         break
    //     }
    //   }

    //   const checkV = () => {
    //       if(roleValue === ""){
    //           alert("Please select a option");
    //       }
    //   }
   
    const Roleoptions = [
        {   value:1,
            label:"Project Manager"
        },
        {
            value:2,
            label:"Team Leader"
        },
        {
            value:3,
            label:"Team Member"
        } ];
    const TechOption = [
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
        {
            value:5,
            label:"Full Stack"
        }
    ]  

    return(
        <> 
             <div className="form-content-right">
                 <form onSubmit={handleSubmit} className='form' noValidate>
                    <input type="text"
                        placeholder="Enter Your Full Name"
                        className="form-input"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                    <br />

                    <input type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="form-input"
                    value={values.mail}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    <br/>

                <input type="address"
                    placeholder="Enter Your Address"
                    required="true"
                    name="address"
                    className="form-input"
                    value={values.address}
                    onChange={handleChange}
                />
                {errors.address && <p>{errors.address}</p>}
                <br />

                <input type="number"
                   placeholder="Enter Your Contact Number"
                   name="number"  
                   className="form-input"
                   value={values.number}
                    onChange={handleChange}
                />
                {errors.number && <p>{errors.number}</p>}
                 <br />

                <input type="password"
                   placeholder="Enter Your Password" 
                   name="password"
                   className="form-input"
                   value={values.password}
                   onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}   
                <br />

                <Select 
                    value={values.setRoleValue} 
                    className="drop-down" 
                    name="roleValue"
                    onClick={(setRoleValue) => handleClick('roles', values)}
                    placeholder="Select a Role" 
                    options={Roleoptions}
                />
                 {errors.roleValue && <p>{errors.roleValue}</p>}
                 <br />
                <Select 
                    placeholder="Your Interested Technology"
                    className="drop-down"
                    name="technology"
                    value={values.setTechValue}
                    options={TechOption}
                    onClick={(setTechValue) => handleClick('tech', values)}
                /> 
                {errors.techValue && <p>{errors.techValue}</p>}
                <br />
                <button type="submit" className="form-input-btn">
                    Submit
                </button>
                </form>
         </div>

        </>
    );
}

export default FormSubmit;