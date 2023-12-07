const express = require('express')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const port = 8000

dotenv.config()

const db = process.env.CONNECTION_STRING
mongoose
  .connect(db)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.json({'message': 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})