export default function validateInfo(values) {
    let errors = {};
  
    if(!values.username){
        errors.username="Username required";
    }
    
    if(!values.email){
        errors.email="Email required";
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
   

    if(!values.address){
        errors.address="Address is required";
    }

    if(!values.number){
        errors.number="Contact Number is required";
    }else if((values.number).length !== 10){
        errors.number="Number not valid";
    }

    if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if(values.roleValue === " "){
        errors.roleValue = "Please select role";
    }

    if(values.techValue === " "){
        errors.techValue = "Please select Technology";
    }

  return errors;
  }
