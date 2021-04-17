
exports.up = function(knex) {
    return knex.schema.createTable("project",function(table){
        table.uuid("projectId").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        table.string("projectName");
        table.text("description");
        table.string("subDescription");
        table.string("projectStatus").defaultTo("not assigned");
        table.integer("assignedTo").references("empId").inTable("employee").onDelete("CASCADE");

        table.timestamps(false, true);

    })
};

exports.down = function(knex) {
  
};
