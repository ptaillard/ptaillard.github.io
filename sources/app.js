/* global angular */
(function() {
    'use strict';

    angular.module('auth', ['ngResource']);
    angular.module('newsFeeds', ['ngResource', 'ngAria', 'ngAnimate', 'ngMaterial']);
    angular.module('wizbiiApp', ['newsFeeds', 'auth']);

    angular.module('wizbiiApp')
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('light-blue')
                .accentPalette('teal');
        });
})();
