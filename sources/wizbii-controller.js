/* global angular */
(function() {
    'use strict'

    angular.module('wizbiiApp')
        .controller('WizbiiController', WizbiiController);

    function WizbiiController(NewsFeeds) {
        var vm = this;

        vm.newsFeeds = NewsFeeds.datas;
    };

})();
