var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", async (req, res) => {
  var data = await burger.all();
  var hbsObject = {
    title: "Gourmet Burger Shack",
    burger: data
  };

  res.render("index", hbsObject);
});

router.post("/api/burgers/:burgerName", async (req, res) => {
  var result = await burger.insert("burger_name", req.params.burgerName);
  
  res.json({id: result.insertId});
});

router.put("/api/burgers/:id", async (req, res) => {
  var result = await burger.update("devoured", true, "id", req.params.id);
    if (result.changedRows == 0) {
        return res.status(404).end();
    } 
    else {
        res.status(200).end();
    }
});

module.exports = router;