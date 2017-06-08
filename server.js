var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    mongoose = require('mongoose'),
    Task = require('./api/models/mockModel'),
    bodyParser = require('body-parser'),
    cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Mockdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.options('*', cors())
var routes = require('./api/routes/mockRoutes');
routes(app);

app.listen(port);

console.log('Mock RESTful API server started on: ' + port);
