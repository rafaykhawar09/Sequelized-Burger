var db = require("../models");

module.exports = function (app) {

     // Create all our routes and set up logic within those routes where required.
     app.get("/", function (req, res) {
          db.Burger.findAll({ raw: true }).then(function (data) {
               var hbsObject = {
                    burgers: data
               };
               console.log(hbsObject);
               res.render("index", hbsObject);
          });
     });

     app.post("/api/burgers", function (req, res) {
          db.Burger.create({
               name: req.body.name,
               devour: req.body.devour
          }).then(function (result) {
               // Send back the ID of the new quote
               res.json({ id: result.insertId });
          });
     });

     app.put("/api/burgers/:id", function (req, res) {

          db.Burger.update(
               {
                    devour: req.body.devour
               }, 
               {
                    where: {
                         id: req.params.id
                    }
               }).then(function(data) {
                    res.json(data);
               });
     });

     app.delete("/api/burgers/:id", function (req, res) {

          db.Burger.destroy({

               where:{
                    id: req.params.id
               }
          }).then(function(data) {
               res.json(data);
          });
     });
};