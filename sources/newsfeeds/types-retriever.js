/* global _ */
(function() {
    'use strict'

    angular.module('newsFeeds')
        .service('TypesRetriever', TypesRetriever);

    function TypesRetriever(NewsFeedsConstant) {

        this.retrieve = retrieve;

        function retrieve(newsFeeds) {
            var types = ['ALL'];

            if (!_.isUndefined(newsFeeds)) {
                var typesDePublication = _.filter(newsFeeds, function(item) {
                    return item.type == NewsFeedsConstant.publication;
                });
                var uniq = _.uniq(_.map(typesDePublication, function(item) {
                        return item.publication.type;
                    }))
                types = types.concat(uniq);
            }
            return types;
        };
    };
})();
