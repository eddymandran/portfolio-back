const express = require('express');
const connection = require('./db');
var session = require('express-session');

const port = 5000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
];
const corsOptions = {
  origin: (origin, callback) => {
    if (origin === undefined || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to my portfolio!');
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something went wrong');
  }
  console.log('it work');
});

// get all projects
app.get('/projects', (req, res) => {
  const projects = req.body;
  connection.query('SELECT * FROM project', [projects], (err, results) => {
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
app.get('/projects/:id', (req, res) => {
  const projectId = req.params.id;
  connection.query(
    'SELECT * FROM project WHERE id = ?',
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
app.delete('/projects/:id', (req, res) => {
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
app.post('/projects', (req, res) => {
  const { title, description, main_picture, secondary_picture, third_picture, url_github, techno_id } = req.body;
  connection.query(
    'INSERT INTO users (title, description, main_picture, secondary_picture, third_picture, url_github, techno_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
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