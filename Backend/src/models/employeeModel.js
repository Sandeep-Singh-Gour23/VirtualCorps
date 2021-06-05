
// Employee Model 

const { Model } = require('objection');

class Employee extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'employee';
  }
 
  static get relationMappings(){
    const Project=require("./projectModel");
    const Task=require("./taskModel");
    const TeamDetails=require("./teamDetailsModel");
    const Meeting=require("./meetingSchedule");
    
    return{
      Project:{
        relation:Model.HasManyRelation,
        modelClass:Project,
        join:{
          from:"employee.empId",
          to:"project.assignedTo"
        }
      },

      Task:{
        relation:Model.HasManyRelation,
        modelClass:Task,
        join:{
          from:"employee.empId",
          to:"task.createdBy"
        }
      },

      CreateTeam:{
        relation:Model.HasManyRelation,
        modelClass:TeamDetails,
        join:{
          from:"employee.empId",
          to:"teamDetails.projectManagerId"
        }
      },

      MeetingSchedule:{
        relation:Model.HasManyRelation,
        modelClass:Meeting,
        join:{
          from:"employee.empId",
          to:"meetingSchedule.scheduleBy"
        }
      },

     


    }

    

}
}
  
    
  

module.exports = Employee;