(function() {
    'use strict'

    angular.module('auth')
        .service('ConfigHeaderUpdater', ConfigHeaderUpdater);

    function ConfigHeaderUpdater(TokenService, $log) {
        var vm = this;

        vm.appendBearerTokenTo = appendBearerTokenTo;

        function appendBearerTokenTo(config) {
            config.headers = config.headers || {};
            config.headers.Authorization = 'Bearer ' + TokenService.getToken();
            return config;
        };
    };
})();
