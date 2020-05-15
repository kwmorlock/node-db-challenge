const express = require('express');

const server = express();

const projectRouter = require('./router/project-router.js');

const helmet = require("helmet");


server.use(helmet());



server.use(express.json());
server.use('/api/projects', projectRouter);
//line 9 is starting point for site to use in postman

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some functioning stuff for this sprint!</h2>`);
  });

module.exports = server;