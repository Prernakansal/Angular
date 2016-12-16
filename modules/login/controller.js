'use strict';

var login = angular.module('Login');

login.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

        $scope.Login = function (email, password) {
            $http.post("/data/login", {
                'email': email,
                'password': password
            }).success(function (data, status, headers, config) {
                console.log("Data Inserted Successfully");
            });
        }


    }]);
