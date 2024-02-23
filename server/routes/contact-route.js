const express = require("express");
const contactAction = require("../controllers/contact-controller");
const router = express.Router();

router.post("/contact", contactAction )


module.exports = router;