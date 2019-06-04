const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!!!');
})

app.get('/api/courses', (req, res) => {
  res.send([1 , 2 , 3 ]);
})


//create an option to listen to env variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}` ));
