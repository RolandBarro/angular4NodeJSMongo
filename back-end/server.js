var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res) => {
	res.send('Hello Angular 4+');
});

app.listen(port);

console.log(`Server is running on port ${port}.`);
