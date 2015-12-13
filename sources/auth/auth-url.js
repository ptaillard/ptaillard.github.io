(function() {
    'use strict'

    angular.module('auth')
        .service('AuthUrl', function() {
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
