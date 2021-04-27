
exports.up = function(knex) {
    return knex.schema.createTable("employee",function(table){
        table.increments("empId").unique();
        table.string("fullName").notNullable();
        table.string("address");
        table.bigInteger("contactNumber");
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
        table.string("role").notNullable();
        table.string("empTech");
        table.boolean("isAssigned").defaultTo(false);
        table.string("image").defaultTo("https://www.securityindustry.org/wp-content/uploads/sites/3/2018/05/noimage.png");
         
        table.timestamps(false, true);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("employee");
};
