export default function validateInfo(values) {
    let errors = {};
  
    if(!values.fullName){
        errors.fullName="Username required";
    }
    
    if(!values.email){
        errors.email="Email required";
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
   

    if(!values.address){
        errors.address="Address is required";
    }

    if(!values.contactNumber){
        errors.contactNumber="Contact Number is required";
    }else if((values.contactNumber).length !== 10){
        errors.contactNumber="Number not valid";
    }

    if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if(values.role === " "){
        errors.role = "Please select role";
    }

    if(values.empTech === " "){
        errors.empTech = "Please select Technology";
    }

  return errors;
  }
