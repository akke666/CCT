const express = require('express');
const app = express();
const part = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/home',(req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/contact', (req, res) =>{
  res.sendFile(__dirname + '/Contact.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});
app.listen(part, () => {
  console.log(`Example app listening at http://localhost:${part}`);
});
