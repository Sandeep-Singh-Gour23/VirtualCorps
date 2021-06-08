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
    let { projectName, description, subDescription, projectStatus, assignedTo } = req.body;
   if (projectName === "") return badRequestError(res, "Project Name can not be empty");
  
    //inserting project details
    let [err, project_created] = await to(
      Project.query()
      .insert({ projectName: projectName, description: description, subDescription: subDescription, projectStatus: projectStatus, assignedTo: assignedTo })
      .returning("*")
    
    );
    if (err) badRequestError(res, "unable to insert project data");
  
    console.log("Project's detail ", project_created);
    return okResponse(res, "Project created successfully");
  };
  

  // Get All Projects

  const GetAllProjects=  async (req, res) => {
    //let userId= req.user.id;
    const [error, NotAssignedProject] = await to(
      Project.query().select( "projectName","description","subDescription" ).where("projectStatus","not assigned")
         )

         const [error2, AssignedProject] = await to(
          Project.query().select( "projectName","description","subDescription","assignedTo" ).where("projectStatus","assigned")
             )

             const [error3, CompletedProject] = await to(
              Project.query().select( "projectName","description","subDescription","assignedTo" ).where("projectStatus","completed")
                 )
  

    let GetAllProject={
      NotAssignedProject: NotAssignedProject,
      AssignedProject: AssignedProject,
      CompletedProject:  CompletedProject
    }

     console.log("ERROR IS "+error2);
     if (error) return badRequestError(res, "unable to fetch");
     else{
        return okResponse(res, GetAllProject, "All projects details");
 
     }
   };

   // Get All Unassigned Project Managers

  const UnassignedPM = async (req, res) => {
  
    let [err, unassignedPM] = await to(

      Employee.query()
      .select( "empId","fullName" ).where("role","Project Manager").andWhere("isAssigned","false")
      );
    if (err) badRequestError(res, "unable to fetch data");

    console.log("Fetched Data ", unassignedPM);
    return okResponse(res,unassignedPM, "Data fatched successfully");
  };


   // Assigning Project to Project Manager

   const AssignProject = async (req, res) => {
    console.log(req.body);
    let { empId, fullName, projectName } = req.body;
    if (empId === "") return badRequestError(res, "empId can not be null");
    if (fullName === "") return badRequestError(res, "Name can not be empty");
   if (projectName === "") return badRequestError(res, "Project Name can not be empty");

   let [error, result] = await to(Employee.query().select("isAssigned").where("empId", empId).first());
  if (error) console.log(error);
  console.log(result);
  if (result.isAssigned === true) {
    return badRequestError(res, "This Project Manager is already Assigned");
  }
  let [error2, result2] = await to(Project.query().select("projectStatus").where("projectName", projectName).first());
  if (error2) console.log(error2);
  console.log(result2);
  if (result2.projectStatus === "assigned") {
    return badRequestError(res, "This Project is already Assigned");
  }
  
    //inserting Assigned Project Manager into Project table
    let [err, assign_project] = await to(
      Project.query()
      .patch({ assignedTo: empId })
      .where("projectName", projectName)
      .returning("*")
    
    );
    if (err) badRequestError(res, "Failed in Assigning project to Project Manager");
  
    console.log("Updated ", assign_project);

    //updating Project Manager's Profile
    let [err2, update_PM_Profile] = await to(
      Employee.query()
      .patch({ isAssigned: "true" })
      .where("empId", assign_project[0].assignedTo)
      .returning("*")
    
    );
    
    console.log("ERROR IS "+err2);

    let AssignProject={
      assign_project:assign_project,
      update_PM_Profile:update_PM_Profile
    }
     
    console.log(AssignProject);


    return okResponse(res, "Project Assigned successfully to Project Manager");
  };
 
  // Get All Project Managers

  const getAllPM = async (req, res) => {
  
    let [err, allPM] = await to(

      Employee.query()
      .select( "empId","fullName" ).where("role","Project Manager")
      );
    if (err) badRequestError(res, "unable to fetch data");

    console.log("Fetched Data ", allPM);
    return okResponse(res,allPM, "Data fatched successfully");
  };

// Get Team Members

  const TeamMembersDetails = async (req, res) => {
  
    let [err, allTeamLeaders] = await to(

      Employee.query()
      .select( "empId","fullName" ).where("role","Team Leader").andWhere("isAssigned","false")
      );
    if (err) badRequestError(res, "unable to get Team Leaders");

    let [err2, allTeamMembers] = await to(

      Employee.query()
      .select( "empId","fullName" ).where("role","Team Member").andWhere("isAssigned","false")
      
         )
      
         if (err2) badRequestError(res, "unable to get Team Members");

         let Team_Members_details={
          allTeamLeaders: allTeamLeaders,
          allTeamMembers: allTeamMembers
        }
      
    console.log("Fetched Data ", Team_Members_details);
    return okResponse(res,Team_Members_details, "Data fatched successfully");
  };







  module.exports = {
      CreateProject,
      GetAllProjects,
      UnassignedPM,
      AssignProject,
      getAllPM,
      TeamMembersDetails
  }
