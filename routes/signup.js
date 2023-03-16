var express = require('express');
var router = express.Router();
const sign = require("../sign.js");
const sessions = require("../controllers/session.controller");

router.post("/", sign.signup);
router.get("/check", async (req, res) => {
    let isSignedUp = await sign.isSignedUp(req, res)
    if (isSignedUp) {
        res.send(JSON.stringify({ isSignedUp: true }))
    } else {
        res.send(JSON.stringify({ isSignedUp: false }))
    }
});

module.exports = router;
