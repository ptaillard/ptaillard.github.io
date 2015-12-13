(function() {
    'use strict'

    angular.module('auth')
        .service('ServiceAuth', ServiceAuth);

    function ServiceAuth($injector, AuthUrl, $q) {
        this.token = '';
        this.authentification = authentification;

        function hasToken() {
            return this.token != '';
        };

        function token() {
            return this.token;
        };

        function authentification() {
            var $http = $injector.get('$http');

            var dataConnexion = {
                username:'decouverte@wizbii.com',
                password:'decouvertewizbii',
                client_id:'test',
                grant_type:'password'
	        };

            var deferred = $q.defer();
            $http({
	            method: 'POST',
	            url: AuthUrl.url(),
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	            transformRequest: function(obj) {
	                var str = [];
	                for(var p in obj)
	                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	                return str.join("&");
	            },
	            data: dataConnexion
	        }).success(function (data, status, headers, config) {
                deferred.resolve(data);
	        }).error(function (data, status, headers, config) {
	           deferred.reject(data);
	        });
            return deferred.promise;
        };
    };

})();
