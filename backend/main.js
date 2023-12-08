const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require('body-parser')
const app = express()
const port = 8000
dotenv.config()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Connects to database
const db = process.env.CONNECTION_STRING
mongoose
  .connect(db)
  .then(() => {
    console.log("Database connection successful")
  })
  .catch((err) => console.log(err))

// User model 
const User = mongoose.model('User', { 
  username: { type: String }, 
  password: { type: String }
})

// Login route
app.get('/login', async (req, res) => {
  const user = await User.findOne({ username: req.query.username }).exec()
  if (user && user.password === req.query.password) {
    res.json(true)
  } else {
    res.json(false)
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
