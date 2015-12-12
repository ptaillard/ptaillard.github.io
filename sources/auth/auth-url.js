(function() {
    angular.module('auth')
        .service('AuthUrl', function($q, $log, ServiceAuth, TokenService, ConfigHeaderUpdater) {
            var authUrl = 'https://api.wizbii.com/v1/account/validate'

            this.url = url;
            this.isUrlAuth = isUrlAuth;

            function url() {
                return authUrl;
            };

            function isUrlAuth(checkedUrl) {
                return checkedUrl !== authUrl;
            };
        });
})();
