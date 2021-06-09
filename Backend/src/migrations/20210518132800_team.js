
exports.up = function(knex) {
    return knex.schema.createTable("teamDetails",function(table){
        table.uuid("teamId").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        table.string("teamName").notNullable().unique();
        table.string("teamType").notNullable();
        table.integer("projectManagerId").references("empId").inTable("employee").onDelete("CASCADE");

        table.timestamps(false, true);

    }).createTable("teamMembers",function(table){
        table.uuid("teamId").references("teamId").inTable("teamDetails").onDelete("CASCADE");
        table.integer("teamLeader").references("empId").inTable("employee").onDelete("CASCADE");
        table.string("teamMates").notNullable();
        

        table.timestamps(false,true);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("teamDetails");
};
