const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!!!');
})

app.get('/api/courses', (req, res) => {
  res.send([1 , 2 , 3 ]);
})


// route parameters practice with one parameter
app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id)
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
