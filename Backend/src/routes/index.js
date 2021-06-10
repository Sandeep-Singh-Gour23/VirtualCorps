const express = require("express");
const router  = express.Router();
const UserAuthController=require("../controllers/index").UserAuthController;
const HrController=require("../controllers/index").HrController

const VerifyUserJWT=require("../middleware/jwt").VerifyUserJWT;

//AUTHENTICATION routes
router.post('/signup',UserAuthController.SignUp);
router.post('/login',UserAuthController.Login);
router.post('/changeuserpassword',VerifyUserJWT,UserAuthController.ChangePassword);


// HR Controllers route
router.post('/createProject',HrController.CreateProject);
router.post('/assignProject',VerifyUserJWT,HrController.AssignProject);
//router.post('/createTeam',VerifyUserJWT,HrController.CreateTeam);
router.get('/getAllProjects',HrController.GetAllProjects);
router.get('/unassignedProjectManager',VerifyUserJWT,HrController.UnassignedPM);
router.get('/getAllProjectManager',VerifyUserJWT,HrController.getAllPM);
router.get('/getAllTLsTMs',VerifyUserJWT,HrController.TeamMembersDetails);





//CHECK ROUTES
router.get("/check",VerifyUserJWT,(req,res)=>{
    console.log("Value fetched from token userid, accHash, email")
    console.log(req.user.empId);
    console.log(req.user.role);
    console.log(req.user.email);

res.send("Welcome ! Everything is perfectly setUp")
});

/*router.get("/checkHeroku",(req,res)=>{
    res.send("Welcome ! Heroku deployement is perfectly done")
});*/



module.exports = router;