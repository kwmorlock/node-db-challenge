const express = require("express");

const db = require("../db-config");
const Project = require('./project-model.js');

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

  router.get("/projects/:id", (req, res) => {
    const { id } = req.params;
  
    db("projects")
      .where({ id })
      .first()
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });

  router.get("/tasks/", (req, res) => {
    // const {  } = req.params;

    // Project.getProjectsById()
    db("tasks") 
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });

  router.get("/taskss/", (req, res) => {
    const {  } = req.params;

    Project.getProjectsById()
    // db("tasks") 
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });

  router.get("/tasks/:id", (req, res) => {
    const { id } = req.params;
  
    db("tasks")
      .where({ id })
      .first()
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

  router.get("/resources/:id", (req, res) => {
    const { id } = req.params;
  
    db("resources")
      .where({ id })
      .first()
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

  router.get("/projects_resources/:id", (req, res) => {
    const { id } = req.params;
  
    db("projects_resources")
      .where({ id })
      .first()
      .then(resource => {
        res.json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve project" });
      });
  });

  router.post("/", (req, res) => {
    const projectData = req.body;
    db("projects")
      .insert(projectData)
      .then(ids => {
        db("projects")
          .where({ id: ids[0] })
          .then(newProjectEntry => {
            res.status(201).json(newProjectEntry);
          });
      })
      .catch(err => {
        console.log("POST error", err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });

  router.post("/tasks", (req, res) => {
    const tasksData = req.body;
    db("tasks")
      .insert(tasksData)
      .then(ids => {
        db("tasks")
          .where({ id: ids[0] })
          .then(newTaskEntry => {
            res.status(201).json(newTaskEntry);
          });
      })
      .catch(err => {
        console.log("POST error", err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });

  router.post("/resources", (req, res) => {
    const resourcesData = req.body;
    db("resources")
      .insert(resourcesData)
      .then(ids => {
        db("resources")
          .where({ id: ids[0] })
          .then(newResourcesEntry => {
            res.status(201).json(newResourcesEntry);
          });
      })
      .catch(err => {
        console.log("POST error", err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });

  module.exports = router;