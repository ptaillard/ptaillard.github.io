/* global angular */
(function() {
    'use strict';

    angular.module('vendors', ['ngResource', 'ngAria', 'ngAnimate', 'ngMaterial']);
    angular.module('newsFeedsApp', ['vendors']);

    angular.module('newsFeedsApp')
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('light-blue')
                .accentPalette('teal');
        });
})();
