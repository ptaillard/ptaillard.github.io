(function() {
    'use strict'

    angular.module('auth')
        .factory('BearerAppenderInterceptor', function($q, $log, ServiceAuth, TokenService, ConfigHeaderUpdater, AuthUrl) {

            var bearerAppenderInterceptor = {
                request: function(config) {
                    if (!AuthUrl.isUrlAuth(config.url)) {
                        var deferred = $q.defer();
                        if (TokenService.hasToken()) {
                            deferred.resolve(ConfigHeaderUpdater.appendBearerTokenTo(config));
                        } else {
                            ServiceAuth.authentification().then(function(data) {
                                TokenService.setToken(data['access-token']);
                                $log.info('Token for authorization: ' + TokenService.getToken());
                                deferred.resolve(ConfigHeaderUpdater.appendBearerTokenTo(config));
                            }, function() {
                                deferred.reject(config);
                            });
                        }
                        return deferred.promise;
                    }
                    return config;
                }
            };

            return bearerAppenderInterceptor;
        });
})();
