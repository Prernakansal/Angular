var connection = require("./../config/db.js");

var SHA256 = require("crypto-js/sha256");

exports.registerUser = function (req, res) {

    var post = {first_name: req.body.first_name, last_name: req.body.last_name, username: req.body.email, password: SHA256(req.body.password)};
    connection.query('INSERT INTO st_user SET ?', post, function (err, result) {
        if (err) {
            connection.rollback(function () {
                logError(err, res);
            });
        }
        if (result.insertId > 0) {
            res.send({success: true, message: 'successfully created', data: result});
        } else {
            res.send({success: false, message: 'sorry, unable to register', data: result});
        }
    });


};

