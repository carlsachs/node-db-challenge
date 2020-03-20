const express = require("express");

const helmet = require("helmet");
const CORS = require("cors");

const projectRouter = require("../projects/projectRouter.js");

const server = express();

server.use(helmet());
server.use(CORS());
server.use(express.json());