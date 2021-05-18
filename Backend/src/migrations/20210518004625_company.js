
exports.up = function(knex) {
    return knex.schema.createTable("companyData",function(table){
        table.string("companyName").notNullable().unique();
        table.string("address");
        table.bigInteger("contactNumber").notNullable();
        table.string("email").notNullable().unique();
        table.string("adminName").notNullable();
        table.string("adminEmail").notNullable().unique();
        table.string("adminPassword").notNullable();
        table.string("CompanyDetails");
        table.string("logo").defaultTo("https://www.securityindustry.org/wp-content/uploads/sites/3/2018/05/noimage.png");
         
        table.timestamps(false, true);
    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTableIfExists("companyData");
};
