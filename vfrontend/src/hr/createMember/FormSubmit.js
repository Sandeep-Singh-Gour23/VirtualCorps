import React,{  useState } from 'react';
// import ReactDOM from "react-dom";
import "../../styles/form.css"
import useCreateMemForm from './useCreateMemForm';
import validate from './ValidateInfo'
import axios from 'axios'


const FormSubmit = ({submitForm}) => {

    const [role, setRole] = useState("");
    const [empTech, setTechValue] = useState("");

    const {handleChange, handleSubmit, values, errors} = useCreateMemForm(
        submitForm,
        validate, 
      );
   
      const PostData = async (e) => {
        e.preventDefault();
    
        const { fullName, address, contactNumber, email, password } = values;

        if(!values.fullName){
          window.alert("Name is required!!");
        }else if(!values.address){
            window.alert("Address is required!!")
        }else if(!values.contactNumber && values.contactNumber.length !== 10){
            window.alert("Contact number required or invalid!!")
        }else if(!values.email){
            window.alert("Email is required!!")
        }else if(!values.password || values.password.length <= 5){
          window.alert("password is required or too short!!")
        }else{
          const res = await fetch("/signup", {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              fullName, address, contactNumber, email, password, role, empTech
            }),
          });
      
          const data = await res.json();
          console.log(data);
  
          if(!data.success){
            window.alert(data.message);
          }
          else {
            window.alert("Registration Successful!!");         
          }
        }
      };

    console.log(role)
    console.log(values.fullName)
    console.log(empTech)
    return(
        <> 
          <div className="form-content-right">
              <form className='form' method="POST" noValidate>
                <input type="text"
                      placeholder="Enter Your Full Name"
                      className="form-input"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <p>{errors.fullName}</p>}
                    <br />

                    <input type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="form-input"
                    value={values.email}
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

                <input type="tel"
                   placeholder="Enter Your Contact Number"
                   name="contactNumber"  
                   className="form-input"
                   value={values.contactNumber}
                    onChange={handleChange}
                />
                {errors.contactNumber && <p>{errors.contactNumber}</p>}
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

                <label Htmlfor="role">Choose a Role:</label>
                <select name="role"
                    value ={role}
                    onChange = {(event)=>{
                       setRole(event.target.value);
                        }}
                    className="drop-down"
                    style={{backgroundColor:"white"}}>
                    <option value="Project Manager">Project Manager</option>
                   <option value="Team Leader">Team Leader</option>
                   <option value="Team Member">Team Member</option>
                </select>
                 {errors.role && <p>{errors.role}</p>}
                 <br />

                <label Htmlfor="empTech">Choose a Technology:</label>
                <select name="empTech"
                    className="drop-down"
                    value ={empTech}
                    onChange = {(event)=>{
                        setTechValue(event.target.value);
                        }}
                    style={{backgroundColor:"white"}}>
                     <option value="Front-End">Front-End</option>
                    <option value="Back-end">Back-end</option>
                    <option value="UI/UX design">UI/UX design</option>
                    <option value="Data Modelling">Data Modelling</option>
                    <option value="Full Stack">Full Stack</option>
                </select>
        
                {errors.empTech && <p>{errors.empTech}</p>}
                <br />
                <button type="submit" className="form-input-btn" onClick={PostData}>
                    Submit
                </button>
                </form>
         </div>

        </>
    );
}

export default FormSubmit;