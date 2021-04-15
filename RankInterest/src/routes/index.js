const express = require("express");
const router  = express.Router();
const UserAuthController=require("../controllers/index").UserAuthController;

const VerifyUserJWT=require("../middleware/jwt").VerifyUserJWT;

//CHECK ROUTES
router.get("/check",VerifyUserJWT,(req,res)=>{
    console.log("Value fetched from token userid, accHash, email")
    console.log(req.user.id);
    console.log(req.user.accHash);
    console.log(req.user.email);

res.send("Welcome ! Everything is perfectly setUp")
});

router.get("/checkHeroku",(req,res)=>{
    res.send("Welcome ! Heroku deployement is perfectly done")
});


//AUTHENTICATION routes
router.post('/signup',UserAuthController.SignUp);
router.post('/login',UserAuthController.Login);
router.post('/changeuserpassword',VerifyUserJWT,UserAuthController.ChangePassword);


module.exports = router;