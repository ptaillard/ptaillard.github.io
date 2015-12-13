/* global angular */
(function() {
    'use strict'

    angular.module('wizbiiApp')
        .controller('WizbiiController', WizbiiController)
        .filter('typeFilter', typeFilter);

    function WizbiiController(NewsFeeds, TypesRetriever, CountPublications, NewsFeedsConstant) {
        var vm = this;
        vm.publicationsNumber = publicationsNumber;
        vm.currentType = NewsFeedsConstant.allTypes;
        vm.types = types;
        vm.newsFeeds = NewsFeeds.datas;

        function publicationsNumber() {
            return CountPublications.count(vm.newsFeeds);
        };

        function types() {
            return TypesRetriever.retrieve(vm.newsFeeds);
        };
    };

    function typeFilter(NewsFeedsConstant) {
        return function (newsFeeds, type) {
            if (type === NewsFeedsConstant.allTypes) {
                return newsFeeds;
            }

            var filtered = [];
            _.each(newsFeeds, function(news) {
                if (!_.isUndefined(news.publication) && news.publication.type === type) {
                    filtered.push(news);
                }
            });
            return filtered;
        };
    };
})();
