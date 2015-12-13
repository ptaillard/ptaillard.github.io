(function() {
    'use strict'

    angular.module('auth')
        .service('TokenService', TokenService);

    function TokenService($log) {
        var token = null;
        this.hasToken = hasToken;
        this.getToken = getToken;
        this.setToken = setToken;

        function hasToken() {
            return token !== null;
        };

        function getToken() {
            return token;
        };

        function setToken(newToken) {
            token = newToken;
        };
    };
})();
