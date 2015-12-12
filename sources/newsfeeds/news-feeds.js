(function() {
    'use strict'

    angular.module('newsFeedsApp')
        .service('NewsFeeds', NewsFeeds);

    function NewsFeeds() {
        var service = this;

        service.datas = {};

        function load() {
            service.datas.news = ['john doe'];
        };
        load();
    };
})();
