const express = require("express");
const katakeetControllers = require("../controllers/katakeetControllers");
// Mini Express App
const router = express.Router();

router.post("/", katakeetControllers.katakeetCreate);

router.get("/", katakeetControllers.katakeetList);

router.get("/:katkootId", katakeetControllers.katakeetDetail);

module.exports = router;
