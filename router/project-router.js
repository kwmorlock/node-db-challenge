const express = require("express");

const db = require("../db-config");

const router = express.Router();

router.get("/", (req, res) => {
    db("projects") 
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });

  router.get("/tasks", (req, res) => {
    db("tasks") 
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });

  router.get("/resources", (req, res) => {
    db("resources") 
      .then(resource => {
        res.json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });

  router.get("/projects_resources", (req, res) => {
    db("projects_resources") 
      .then(resource => {
        res.json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });

  module.exports = router;