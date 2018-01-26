'use strict'
let express = require('express');
let router = express.Router();
let query = require('../util/query');


const read = async function (sql) {
    return await query(sql);

}

read('select * from movies').then(data => {
    console.log(data);
}).catch(err => console.log(err));


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
