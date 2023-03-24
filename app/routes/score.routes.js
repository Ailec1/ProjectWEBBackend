module.exports = (app) => {
    const score = require("../controllers/score.controller.js");
    const router = require("express").Router();
    
    router.post("/", score.create);
    
    router.get("/", score.findAll);
    
    app.use("/api/score", router);
    }
