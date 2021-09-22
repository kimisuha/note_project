const contact = require("../controllers/contact.controller");
const express = require("express");

module.exports = (app) => {
    var route = express.Router();

    route.post("/", contact.crete);

    route.get("/", contact.findAll);

    route.get("/favorite", contact.findAllFavorite);

    route.get("/:id", contact.findOne);

    route.put("/:id", contact.update);

    route.delete("/:id", contact.delete);

    route.delete("/", contact.deleteAll);

    app.use("/api/contacts", route);
}