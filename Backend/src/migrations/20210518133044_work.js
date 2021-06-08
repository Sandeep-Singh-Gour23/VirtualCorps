
exports.up = function(knex) {
    return knex.schema.createTable("project",function(table){
        table.uuid("projectId").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        table.string("projectName").notNullable().unique();
        table.text("description");
        table.string("subDescription");
        table.string("projectStatus").defaultTo("not assigned");
        table.integer("assignedTo").references("empId").inTable("employee").onDelete("CASCADE");

        table.timestamps(false, true);

        
    }).createTable("task",function(table){
        table.uuid("taskId").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        table.text("taskDescription");
        table.string("taskType").notNullable();
        table.string("status").defaultTo("not assigned"); // alter this field to "Assigned"
        table.integer("createdBy").references("empId").inTable("employee").onDelete("CASCADE");
        table.uuid("assignedTo").references("teamId").inTable("teamDetails").onDelete("CASCADE");

        table.timestamps(false,true);
        
    }).createTable("meetingSchedule",function(table){
        table.uuid("meetId").defaultTo(knex.raw("uuid_generate_v4()")).primary();
        table.string("meetDate").notNullable();
        table.string("meetTime").notNullable();
        table.integer("scheduleBy").references("empId").inTable("employee").onDelete("CASCADE");
        table.uuid("scheduleFor").references("teamId").inTable("teamDetails").onDelete("CASCADE");

        table.timestamps(false,true);
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists("project");
};
