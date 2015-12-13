(function() {
    'use strict'

    angular.module('auth')
        .factory('BearerAppenderInterceptor', function($q, ServiceAuth, TokenService, ConfigHeaderUpdater, AuthUrl) {

            var bearerAppenderInterceptor = {
                request: function(config) {
                    if (AuthUrl.isUrlAuth(config.url)) {
                        var deferred = $q.defer();
                        if (TokenService.hasToken()) {
                            deferred.resolve(ConfigHeaderUpdater.appendBearerTokenTo(config));
                        } else {
                            ServiceAuth.authentification().then(function(data) {
                                TokenService.setToken(data['access-token']);
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
