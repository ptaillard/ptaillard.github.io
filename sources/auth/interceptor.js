(function() {
    angular.module('newsFeedsApp')
        .factory('BearerAppenderInterceptor', function($q, $log, ServiceAuth, TokenService, ConfigHeaderUpdater, AuthUrl) {

            var bearerAppenderInterceptor = {
                request: function(config) {
                    $log.debug('config.url ' + config.url);
                    if (AuthUrl.isUrlAuth(config.url)) {
                        var deferred = $q.defer();
                        if (TokenService.hasToken()) {
                            deferred.resolve(ConfigHeaderUpdater.appendBearerTokenTo(config));
                        } else {
                            ServiceAuth.authentification().then(function(data) {
                                $log.debug('Set Token ' + data);
                                TokenService.setToken(data.token);
                                deferred.resolve(ConfigHeaderUpdater.appendBearerTokenTo(config));
                            }, function() {
                                deferred.resolve(config);
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
