/* global angular */
(function() {
    'use strict'

    angular.module('newsFeedsApp')
        .controller('WizbiiController', WizbiiController);

    function WizbiiController(NewsFeeds) {
        var vm = this;

        vm.newsFeeds = NewsFeeds.datas;
    };

})();
