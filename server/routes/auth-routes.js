const express = require("express");
const router = express.Router();
const {getUser, createUser, login} = require("../controllers/auth-controller");

router.get("/user", getUser);
router.post("/register", createUser)
router.post("/login", login)


module.exports = router;