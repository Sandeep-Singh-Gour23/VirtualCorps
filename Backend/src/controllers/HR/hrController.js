const {
    okResponse,
    badRequestError,
    to,
    unverifiedError,
  } = require("../../../global_functions");
  const Project = require("../../models/projectModel");
  const Employee = require("../../models/employeeModel");
  const validator = require("validator");
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  require('dotenv').config();



  const CreateProject = async (req, res) => {
    console.log(req.body);
    let { projectName, description, subDescription } = req.body;
   if (projectName === "") return badRequestError(res, "Project Name can not be empty");
  
    //inserting project details
    let [err, project_created] = await to(
      Project.query()
      .insert({ projectName: projectName, description: description, subDescription: subDescription })
      .returning("*")
    
    );
    if (err) badRequestError(res, "unable to insert project data");
  
    console.log("Project's detail ", project_created);
    return okResponse(res, "Project created successfully");
  };
  


  module.exports = {
      CreateProject
  }
