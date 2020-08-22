let express = require("express");
let burger = require("../models/burger");

let router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    let hdbrsObj = {
      burgers: data,
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });
})
module.exports = router;