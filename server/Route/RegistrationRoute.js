const express = require("express");

const router = express.Router();

const registrationControler = require("../Controler/RegistrationControler");

router.post("/", registrationControler.registerEmployee);
router.get("/view", registrationControler.ViewRegistration);
router.put("/edit/:id", registrationControler.EditRegistration);
router.delete("/delete/:id", registrationControler.RemoveRegistration);

module.exports = router;
