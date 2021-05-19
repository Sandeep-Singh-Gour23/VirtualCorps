
//  Team Details Model 

   const { Model } = require('objection');

class TeamDetails extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'teamDetails';
  }


  static get relationMappings(){

    const Employee=require("./employeeModel");
    const Task=require("./taskModel");
    const Meeting=require("./meetingSchedule");
    const TeamMembers=require("./teamMembersModel");

    return{

      BelongingProjectManager:{
        relation:Model.BelongsToOneRelation,
        modelClass:Employee,
        join:{
            from:"teamDetails.projectManagerId",
            to:"employee.empId"
        }

    },

    CreateTask:{
      relation:Model.HasManyRelation,
      modelClass:Task,
      join:{
          from:"teamDetails.teamId",
          to:"task.assignedTo"
      }



  },

  Meeting:{
    relation:Model.HasManyRelation,
    modelClass:Meeting,
    join:{
        from:"teamDetails.teamId",
        to:"meetingSchedule.scheduleFor"
    }



},

TeamMembers:{
  relation:Model.HasOneRelation,
  modelClass:TeamMembers,
  join:{
      from:"teamDetails.teamId",
      to:"teamMembers.teamId"
  }



}



 
    }  
    
      
  }

}

module.exports = TeamDetails;