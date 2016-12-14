var connection = require("./../config/db.js");
console.log(connection);
var SHA256 = require("crypto-js/sha256");

exports.login = function (req, res) {

    console.log(1111);
    connection.query("select * from angular.st_user limit 1", function (error, result) {
        console.log(result);
        console.log(error);


    });

};

//module.exports = connection;

