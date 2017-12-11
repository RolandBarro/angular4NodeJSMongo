var express = require('express');
var app = express();
var port = 3000;

const users = [
  {id: 0, username: 'test1@test.com', password: 'default', userType: '5'},
  {id: 1, username: 'user1', password: 'default', userType: '5'},
  {id: 2, username: 'testuser', password: 'default', userType: '5'},
  {id: 3, username: 'tempUser', password: 'default', userType: '5'},
  {id: 4, username: 'Angular', password: 'default', userType: '5'},
  {id: 5, username: 'ready', password: 'default', userType: '5'},  
];

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port);

console.log(`Server is running on port ${port}.`);
