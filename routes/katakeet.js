const express = require("express");
const passport = require("passport");
const katakeetControllers = require("../controllers/katakeetControllers");
// Mini Express App
const router = express.Router();

router.param("katkootId", async (req, res, next, katkootId) => {
  const foundKatkoot = await katakeetControllers.fetchKatkoot(katkootId, next);
  if (foundKatkoot) {
    req.katkoot = foundKatkoot;
  } else {
    next({ message: "Katkoot Not Found", status: 404 });
  }
  next();
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  katakeetControllers.katakeetCreate
);

router.get("/", katakeetControllers.katakeetList);

router.get("/:katkootId", katakeetControllers.katakeetDetail);

router.put("/:katkootId", katakeetControllers.katakeetUpdate);

router.delete(
  "/:katkootId",
  passport.authenticate("jwt", { session: false }),
  katakeetControllers.katakeetDelete
);

module.exports = router;
