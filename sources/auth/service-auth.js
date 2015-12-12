(function() {
    'use strict'

    angular.module('auth')
        .service('ServiceAuth', ServiceAuth);

    function ServiceAuth($injector, AuthUrl) {
        this.token = '';
        this.authentification = authentification;

        function hasToken() {
            return this.token != '';
        };

        function token() {
            return this.token;
        };

        function authentification() {
            var $resource = $injector.get('$resource');
            return $resource(AuthUrl.url(), {}, {
                    post: {
                        method: 'POST',
                        params:{
                            username:'decouverte%40wizbii.com',
                            password:'decouvertewizbii',
                            client_id:'test',
                            grant_type:'password'
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }
                })
                .post().$promise;
        };
    };

})();
