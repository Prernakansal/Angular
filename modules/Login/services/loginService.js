'use strict';


app.factory('loginService', ['$http', function ($http) {

        var factory = {};
        factory.loginIt = function (user) {
            $http({
                method: 'GET',
                url: '/data/user.php',
                data: {user: 'ss'},
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).success(function (data) {}).error(function (data, response) {});
        };

        return factory;

    }]);