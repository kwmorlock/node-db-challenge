const express = require("express");

const db = require("../db-config");

const router = express.Router();

router.get("/projects", (req, res) => {
    db("projects") 
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });