
//  Project Model 

const { Model } = require('objection');

class Project extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'project';
  }

  static get relationMappings(){

    const Employee=require("./employeeModel");

    return{

        AssignedProject:{
          relation:Model.BelongsToOneRelation,
          modelClass:Employee,
          join:{
              from:"project.assignedTo",
              to:"employee.empId"
          }

      }
  

   
      }  
      
  }

}

module.exports = Project;