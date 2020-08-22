var express = require('express');
let UserModel = require('../models/user');
var router = express.Router();

router.post('./signup', async(req,res) => {
    const { id, name, password, email } = req.body;
    User.push({id, name, password, email});
    res.status(200).send(User); //status code 200, json 형식으로 response body 에 입력
});

module.exports = router;