
//  Team Members Model 

const { Model } = require('objection');

class TeamMembers extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'teamMembers';
  }

  static get relationMappings(){

    const TeamDetails=require("./teamDetailsModel");

    return{

      BelongingTeam:{
        relation:Model.BelongsToOneRelation,
        modelClass:TeamDetails,
        join:{
            from:"teamMembers.teamId",
            to:"teamDetails.teamId"
        }

    }


 
    }  
    
      
  }

}

module.exports = TeamMembers;