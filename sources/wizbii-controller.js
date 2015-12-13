/* global angular */
(function() {
    'use strict'

    angular.module('wizbiiApp')
        .controller('WizbiiController', WizbiiController)
        .filter('typeFilter', typeFilter);

    function WizbiiController(NewsFeeds, TypesRetriever, NewsFeedsConstant) {
        var vm = this;
        vm.publicationsNumber = publicationsNumber;
        vm.currentType = NewsFeedsConstant.allTypes;
        vm.types = types;
        vm.newsFeeds = NewsFeeds.datas;

        function publicationsNumber() {
            if (!_.isUndefined(vm.newsFeeds)) {
                return _.reduce(vm.newsFeeds, function(memo, item) {
                        if (item.type === NewsFeedsConstant.publication) {
                            return memo + 1;
                        }
                        return memo;
                    }, 0);
            }
            return 0;
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
