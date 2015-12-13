/* global _ */
(function() {
    'use strict'

    angular.module('newsFeeds')
        .service('NewsFeeds', NewsFeeds);

    function NewsFeeds(DashboardResource) {
        var service = this;

        service.datas = {};

        function load() {
            DashboardResource.then(function(data) {
                _.extend(service.datas, data.feed_items.feed_items);
            });
        };
        load();
    };
})();
