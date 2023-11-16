const express = require("express");

const config = require("./pkg/config");
require("./pkg/db");

const {getAll} = require("./handlers/getAll");
const {getOne} = require("./handlers/getOne");
const {create} = require("./handlers/create");
const {update} = require("./handlers/update");
const {remove} = require("./handlers/delete");

const api = express();

api.use(express.json());

api.get("/api/v1/course", getAll);
api.get("/api/v1/course/:id", getOne);
api.post("/api/v1/course", create);
api.put("/api/v1/course/:id", update);
api.delete("/api/v1/course/:id", remove);

api.listen(config.getSection("development").port, (err) => {
    err
        ? console.error(err)
        : console.log(
            `Server started on port ${config.getSection("development").port}`
        );
});