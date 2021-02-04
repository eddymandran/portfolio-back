const express = require('express');
const connection = require('./db');
const port = 5000;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something went wrong');
  }
  console.log(`Server is listening on ${port}`);
});

// get all projects
app.get('/projects', (req, res) => {
  connection.query('SELECT * FROM project INNER JOIN techno ON techno.id = project.techno_id ', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred to display all projects');
    } else {
      console.log('results', results);
      res.status(200).json(results);
    }
  });
});

// get one project
app.get('/project/:id', (req, res) => {
  const projectId = req.params.id;
  console.log(projectId)
  connection.query(
    'SELECT * FROM project INNER JOIN techno ON techno.id = project.techno_id WHERE project.id = ?',
    [projectId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred to display the selected project');
      } else {
        console.log('results', results);
        res.status(200).json(results);
      }
    }
  );
});

// delete one project
app.delete('/project/:id', (req, res) => {
  const projectId = req.params.id;
  connection.query(
    'DELETE FROM project WHERE id = ?',
    [projectId],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred to delete this project');
      } else {
        console.log('results', results);
        res.status(200).json(results);
      }
    }
  );
});


//add a project
app.post('/admin/projects', (req, res) => {
  const { title, description, main_picture, secondary_picture, third_picture, url_github, techno_id } = req.body;
  connection.query(
    'INSERT INTO project (title, description, main_picture, secondary_picture, third_picture, url_github, techno_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [title, description, main_picture, secondary_picture, third_picture, url_github, techno_id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred to add a new project');
      } else {
        res.status(200).json(results);
      }
    }
  );
});