/* global _ */
(function() {
    'use strict'

    angular.module('newsFeeds')
        .service('NewsFeedsConstant', NewsFeedsConstant);

    function NewsFeedsConstant() {
        this.allTypes = 'ALL';
        this.publication = 'publication';
    };
})();
