const express = require('express');
const app = express();
const courses = [
  {id: 1, name: 'murder 101'},
  {id: 2, name: 'murder 201'},
  {id: 3, name: 'murder 301'},

]

app.get('/', (req, res) => {
  res.send('Hello World!!!');
})

app.get('/api/courses', (req, res) => {
  res.send([1 , 2 , 3 ]);
})


// route parameters practice with one parameter
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
    // 404
  if (!course) res.status(404).send('This course was not found');
  res.send(course);
})

// using multiple paramaters in a get
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params)
})

app.get('/api/posts', (req, res) => {
  res.send(req.query)
})


//create an option to listen to env variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}` ));
