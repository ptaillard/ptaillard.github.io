(function() {
    'use strict'

    angular.module('newsFeeds')
        .factory('DashboardResource', DashboardResource);

    function DashboardResource($log, TokenService, $q, $http) {

        var deferred = $q.defer();
        //var token = 'Bearer ' + TokenService.getToken();

        $http({
            method: 'GET',
            url: 'dashboard.json'
        }).success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).error(function (data, status, headers, config) {
            deferred.reject(data);
        });
        return deferred.promise;
        /*  var xhr = new XMLHttpRequest();
        xhr.open('POST',
        'https://api.wizbii.com/v2/dashboard/?direction=newest');
        xhr.setRequestHeader('Authorization',
        'Bearer 8edjjh0jsggscgoscokk8ok0gc40ss0');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                $log.debug(xhr.responseText);
            } else {
                $log.debug(xhr.responseText);
            }
        }
        xhr.send();*/
    };

})();
