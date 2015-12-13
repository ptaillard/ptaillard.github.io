/* global angular */
(function() {
    'use strict'

    angular.module('wizbiiApp')
        .controller('WizbiiController', WizbiiController)
        .filter('typeFilter', typeFilter);

    function WizbiiController(NewsFeeds, $log) {
        var vm = this;
        vm.publicationsNumber = publicationsNumber;
        vm.currentType = 'ALL';
        vm.types = types;
        vm.newsFeeds = NewsFeeds.datas;

        function publicationsNumber() {
            if(!_.isUndefined(vm.newsFeeds)) {
                return _.reduce(vm.newsFeeds, function(memo, item) {
                        if(item.type === 'publication') {
                            return memo + 1;
                        }
                        return memo;
                    }, 0);
            }
            return 0;
        };

        function types() {
            var types = ['ALL'];

            if(!_.isUndefined(vm.newsFeeds)) {
                var typesDePublication = _.filter(vm.newsFeeds, function(item) {
                    return item.type == 'publication';
                });
                var uniq = _.uniq(_.map(typesDePublication, function(item) {
                        return item.publication.type;
                    }))
                types = types.concat(uniq);
            }
            return types;
        };
    };

    function typeFilter() {
        return function (newsFeeds, type) {
            if(type === 'ALL') {
                return newsFeeds;
            }

            var filtered = [];
            _.each(newsFeeds, function(news) {
                if(!_.isUndefined(news.publication) && news.publication.type === type) {
                    filtered.push(news);
                }
            });
            return filtered;
        };
    };
})();
