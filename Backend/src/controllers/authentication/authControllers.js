const {
  okResponse,
  badRequestError,
  to,
  unverifiedError,
  loginResponse,
} = require("../../../global_functions");
const Employee = require("../../models/employeeModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const SignUp = async (req, res) => {
  console.log(req.body);
  let { fullName, address, contactNumber, email, password, role, empTech } = req.body;

  //email and password validation before inserting user
  if (!validator.isEmail(email || ""))
    return badRequestError(res, "Enter a valid email address");
  if (password === "") return badRequestError(res, "password can not be empty");
  if (role === "") 
  return unverifiedError(res, "role field is empty");

  let [error, result] = await to(Employee.query().where("email", email).first());
  if (error) console.log(error);
  if (result) {
    console.log(result);
    return badRequestError(res, " email already exists");
  }

  password = await bcrypt.hash(password, 10);     //hashing password on validating email and pass

  //inserting user details
  let [err, user_inserted] = await to(
    Employee.query()
      .insert({ fullName: fullName, address: address, contactNumber: contactNumber, email: email, password: password, role: role, empTech: empTech })
      .returning("*")
  );
  if (err) badRequestError(res, "unable to insert user");

  delete user_inserted.password;
  console.log("User's detail ", user_inserted);
  return okResponse(res, "user inserted successfully");
};




//Login User

const Login = async (req, res) => {
  let access_token;
 // console.log(req.body);
  let { email, password } = req.body;
  if (!validator.isEmail(email || ""))
 return badRequestError(res, "Enter a valid email address ");
  if (password === "")
   return unverifiedError(res, "password field is empty");
  
  let [incorrect, user_returned] = await to(
    Employee.query().findOne("email", email).throwIfNotFound()
  );
  console.log("user_returned  " + user_returned.fullName)
  if (incorrect) return badRequestError(res, "email does not exists");

  //Checking whether email is verified
  if (user_returned.email === email) {
    //checking password
    if (await bcrypt.compare(password, user_returned.password)) {
      //Generating JWT token on correct password for USER type


      access_token = await jwt.sign(
        { email, empId: user_returned.empId, role: user_returned.role },
        process.env.JWT_USER_SECRET,
        {
          expiresIn: "24h",
        }
      );

      res.setHeader("Authorization", access_token);
      res.setHeader("access-control-expose-headers", "authorization");

      delete user_returned.password;
      return okResponse(res, user_returned, "loged in successfully");
    }
    //Error returned when password is invalid
    return unverifiedError(res, "invalid password");
  }

}


// Change user password
const ChangePassword = async (req, res) => {
  let { new_password, old_password, email } = req.body;
  if (!email) return badRequestError(res, "email field is empty");
  if (!new_password || !old_password)
    return badRequestError(res, "password field is empty");

  let [error, user_detail] = await to(
    Employee.query()
      .findOne("email", email)
      .returning("password")
      .throwIfNotFound()
  );
  if (user_detail) {
    //checking old password entered by user
    if (await bcrypt.compare(old_password, user_detail.password)) {
      //if matched then hashing new password
      let new_hashed_password = await bcrypt.hash(new_password, 10);
      let [err, password_updated] = await to(
        Employee.query()
          .where("email", email)
          .update({ password: new_hashed_password })
          .throwIfNotFound()
      );
      if (password_updated)
        return okResponse(res, undefined, "password changed successfully");
    } else {
      return badRequestError(res, "old password did not match");
    }
  }
};

/*

const logOut = async (req, res) => {
  res.clearCookie("jwt");
  return okResponse(res,"logOut successfully");

};
*/
module.exports = {
  SignUp,
  Login,
  ChangePassword,
  //logOut
};
