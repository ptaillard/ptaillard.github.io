(function() {
    'use strict'

    angular.module('auth')
        .service('ConfigHeaderUpdater', ConfigHeaderUpdater);

    function ConfigHeaderUpdater(TokenService, $log) {
        var vm = this;

        vm.appendBearerTokenTo = appendBearerTokenTo;

        function appendBearerTokenTo(config) {
            $log.debug('Append Bearer token to config ' + TokenService.getToken());
            config.headers = config.headers || {};
            config.headers.Authorization = 'Bearer ' + TokenService.getToken();
            return config;
        };
    };
})();
