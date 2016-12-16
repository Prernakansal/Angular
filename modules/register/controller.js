'use strict';

var register = angular.module('Register');


register.controller('RegisterController', ['$scope', '$http', function ($scope, $http) {

        $scope.submitForm = function () {

            // check to make sure the form is completely valid
            if ($scope.registerForm.$valid) {
                
                $http.post("/data/registerUser", {first_name: $scope.first_name, last_name: $scope.last_name, email: $scope.email, password: $scope.password
                }).success(function (data, status, headers, config) {
                    console.log("Data Inserted Successfully");
                });
            }

        }
    }]);
