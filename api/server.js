const express = require("express");

const helmet = require("helmet");
const CORS = require("cors");

const projectRouter = require("../projects/projectRouter.js");
const resourcesRouter = require("../projects/resourcesRouter.js");
const taskRouter = require("../projects/taskRouter.js");

const server = express();

server.use(helmet());
server.use(CORS());
server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (req, res) => {
    res.send(`<h1>Server is successful Carlos</h1>`)
})

module.exports = server;