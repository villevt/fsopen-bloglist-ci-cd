require("express-async-errors")
const bcrypt = require("bcryptjs")
const usersRouter = require("express").Router()
const User = require("../models/user")

usersRouter.post("/", async (request, response) => {
  const body = request.body
  
  const passwordHash = await bcrypt.hash(body.password, 10)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash  
  })
  
  const result = await user.save()
  response.json(result)
})

module.exports = usersRouter