var express = require('express');
var app = express();
var cities = {cities:["Amsterdam","Berlin","New York","San Francisco","Tokyo"]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});

app.get('/status', (req, res) => res.status(200).json({status: 'ok'}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

var port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
