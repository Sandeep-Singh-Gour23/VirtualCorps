export default function validateCreateProjectInfo(values) {
    let errors = {};

      if(!values.teamName){
          errors.teamName="Team Name required";
      } 
      
      if(values.projectValue === " "){
        errors.projectValue = "Please select Project Type";
    }

    if(values.managerValue === " "){
        errors.managerValue = "Please select Project Manager ";
    }

    if(values.leaderValue === " "){
        errors.leaderValue = "Please select Team LEader";
    }

    if(values.memberValue === " "){
        errors.memberValue = "Please select Team Members";
    }
return errors;
}