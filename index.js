const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'highest_points.html'));
});

const port = 8978; //port number was determined by representing each letter of "high" as a number
app.listen(port, () => {
  console.log('server is running at locahost:' + port);
});
