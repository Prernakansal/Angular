'use strict';

var login = angular.module('Login');

login.controller('LoginController', ['$scope', function ($scope) {
        //$scope.U_EMAIL = "PRERNA@KANSAL.COM";
        $scope.Login = function Login(email, password) {
            console.log(email);
            console.log(password);
        };
    }]);
