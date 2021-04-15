
// User Model 

const { Model } = require('objection');

class User extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'user';
  }
 
  static get relationMappings(){
    const Requirements=require("../models/needModel");
    const User=require("./userModel");
    
    return{
      Donation:{
        relation:Model.BelongsToOneRelation,
        modelClass:Requirements,
        join:{
          from:"donator.aidId",
          to:"needs.aidId"
        }
      },

      donatorDetails:{
        relation:Model.BelongsToOneRelation,
        modelClass:User,
        join:{
          from:"donator.donatorId",
          to:"user.id"
        }
      },



    }

    

}
}
  
    
  

module.exports = User;