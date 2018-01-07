var express = require('express');
var app = express();
 
var messages = [{text: 'Placeholder content', owner: "Tim"}, {text: 'More Placeholder content', owner: "Joe"} ];

 
app.get('/messages', (req, res) => {
	res.json(messages);
})



app.listen(1234);
