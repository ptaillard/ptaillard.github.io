/* global _ */
(function() {
    'use strict'

    angular.module('newsFeeds')
        .service('CountPublications', CountPublications);

    function CountPublications(NewsFeedsConstant) {

        this.count = count;

        function count(newsFeeds) {
            if (!_.isUndefined(newsFeeds)) {
                return _.reduce(newsFeeds, function(memo, item) {
                        if (item.type === NewsFeedsConstant.publication) {
                            return memo + 1;
                        }
                        return memo;
                    }, 0);
            }
            return 0;
        };
    };
})();
