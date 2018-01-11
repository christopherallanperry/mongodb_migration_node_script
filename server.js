const express = require("express");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const mongodb= require("mongodb")
const bodyParser = require("body-parser")

const url = "mongodb://localhost:27017/edx-migration-db"
let app = express()
app.use(logger("dev"))
app.use(bodyParser.json())

mongodb.MongoClient.connect(url, (error, database) => {
  if (error) return process.exit(1)
  console.log('Connection is okay');

  const db = database.db("edx-migration-db");


  app.listen(3000)
})
