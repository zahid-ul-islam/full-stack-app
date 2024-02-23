const express = require("express");
const router = express.Router();
const {getUser, createUser, login} = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signupSchema } = require("../validators/auth-validation");

router.get("/user", getUser);
router.post("/register", validate(signupSchema), createUser)
router.post("/login", login)


module.exports = router;