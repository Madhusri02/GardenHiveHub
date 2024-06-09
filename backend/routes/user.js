const express = require("express")
const router = express.Router()
const {userSignup} = require('../controller/userController.js')


router.get("/signup" , userSignup)

module.exports = router