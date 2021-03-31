var express = require('express');
var router = express.Router();

router.get('/vuln', foo);

async function foo(req, res) {
  res.sendFile(req.query.path);
};
