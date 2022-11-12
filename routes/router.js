let express = require('express');
let router = express.Router();
var web_route = require('../controller/index');

module.exports = function(router) {
    //website
    router.get('/', web_route.index);
}
