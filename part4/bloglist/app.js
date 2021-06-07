
const config = require("./utils/config")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const blogsRouter = require("./controllers/blogs")
const usersRouter = require("./controllers/users")
const errorHandler = require("./utils/errorhandler")

const app = express()

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.json())
app.use("/api/blogs", blogsRouter)
app.use("/api/users", usersRouter)
app.use(errorHandler)

module.exports = app