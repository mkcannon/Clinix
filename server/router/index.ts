"use strict";

const express = require("express"); // require express

const router = express.Router(); // instantiate the router (needs capital R)

const patients = require("../controllers/patients");

console.log("Line 9");

router.get("/test", () => {
  console.log("WE GOT A GET");
});

router.post("/", patients.postPatient);

export default router;