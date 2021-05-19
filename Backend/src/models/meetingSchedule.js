
//  Meeting Schedule Model 

const { Model } = require('objection');

class Meeting extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'meetingSchedule';
  }

  static get relationMappings(){

     const Employee=require("./employeeModel");
     const TeamDetails=require("./teamDetailsModel");

    return{

      ScheduleBy:{
        relation:Model.BelongsToOneRelation,
        modelClass:Employee,
        join:{
            from:"meetingSchedule.scheduleBy",
            to:"employee.empId"
        }


    },

    ScheduleFor:{
      relation:Model.BelongsToOneRelation,
      modelClass:TeamDetails,
      join:{
          from:"meetingSchedule.scheduleFor",
          to:"teamDetails.teamId"
      }


  }

    }  
  }

}

module.exports = Meeting;