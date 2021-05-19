// Company Model

const { Model } = require('objection');

class Company extends Model {

  // Table name is the only required property.
  static get tableName() {
    return 'companyData';
  }

  static get relationMappings(){
      
  }

}

module.exports = Company;