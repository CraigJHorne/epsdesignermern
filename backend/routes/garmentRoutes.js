const express = require("express");
const { getGarments } = require("../controllers/garmentControllers");
const router = express.Router();

router.route("/").get(getGarments);

module.exports = router;
