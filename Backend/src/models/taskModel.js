
//  Task Model 

const { Model } = require('objection');

class Project extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'task';
  }

  static get relationMappings(){

    const Employee=require("./employeeModel");
    const TeamDetails=require("./teamDetailsModel");

    return{

      AssignedTask:{
        relation:Model.BelongsToOneRelation,
        modelClass:Employee,
        join:{
            from:"task.createdBy",
            to:"employee.empId"
        }

    },

    AssignedTeam:{
      relation:Model.BelongsToOneRelation,
      modelClass:TeamDetails,
      join:{
          from:"task.assignedTo",
          to:"teamDetails.teamId"
      }

  }



 
    }  
    
      
  }

}

module.exports = Project;