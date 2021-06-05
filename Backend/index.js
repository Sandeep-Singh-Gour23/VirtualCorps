const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

//const cors = require("cors");
//const path = require("path");
const moment = require('moment');

// Express Router Initialize
const router = express.Router();

// Knex and Objection dependencies.
const knexConfig = require("./knexfile");
const Knex = require("knex");
const { Model } = require("objection");


// Initialize knex.
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(knex);

const app = express()
  .use(bodyParser.json())
  .use(router)

/*.use(cors({
  credentials: true,
  origin: (origin, callback) => callback(null, true),
}))*/

// Import API Routes.
const userRoutes = require("./src/routes/index");

// Add routes as middleware.
app.use("/virtualcorp", userRoutes);

// Port for Server
const port = process.env.PORT || 8000;
console.log("moment object : - ", moment());

// Express Server 
app.listen(port, () => {
  console.log(`Server is running on\n base URL: http://localhost:${port}/virtualcorp`);
});
