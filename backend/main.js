const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require('body-parser')
const app = express()
const port = 8000
dotenv.config()

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Note schema
const noteSchema = new mongoose.Schema({
  author: { type: String },
  title: { type: String },
  content: { type: String }
  },
  { timestamps: true }
)

// Note model
const Note = mongoose.model('Note', noteSchema)

// Login route
app.get('/login', async (req, res) => {
  const user = await User.findOne({ username: req.query.username }).exec()
  if (user && user.password === req.query.password) {
    res.json(true)
  } else {
    res.json(false)
  }
})

// New note route
app.post('/new_note', async (req, res) => {
  await Note.create({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content
  })
  res.json(true)
})

// Get notes route
app.get('/notes', async (req, res) => {
  const notes = await Note.find({ "author": req.query.author }).exec()
  res.json(notes)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
