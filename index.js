const express = require('express');
const app = express();
const part = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/index',(req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', (req, res) =>{
  res.sendFile(__dirname + '/contact.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});
app.listen(part, () => {
  console.log(`Example app listening at http://localhost:${part}`);
});
