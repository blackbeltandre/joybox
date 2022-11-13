var express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
var app = express();
var csrf = require('csurf')
var all_route = require('./routes/router');
var xss = require("xss");
var csrf = require('csurf')

//.ENV Variable
require('dotenv').config();
const port = process.env.PORT;
const fs = require('fs')
const path = require('path')

//Body Parser
var csrfProtection = csrf({ cookie: false })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.use('/',router);
all_route(router);


app.listen(port);
console.log(`Server is running on port ${port}`);