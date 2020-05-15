const express = require('express');

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
//line 9 is starting point for site to use in postman

module.exports = server;