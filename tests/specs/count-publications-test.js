/* global expect */
/* global it */
/* global inject */
/* global describe */
/* global beforeEach */
'use strict';

describe('The CountPublications service', function () {

    beforeEach(function() {
        module('newsFeeds');
    });

    it('should return 0 si no publication found', inject(function (CountPublications) {
        var newsFeeds = [
            {
                'type' : 'john'
            },
            {
                'type' : 'doe'
            }

        ];
        expect(CountPublications.count(newsFeeds)).toEqual(0);
        expect(CountPublications.count([])).toEqual(0);
    }));

    it('should count publications', inject(function (CountPublications) {
        var newsFeeds = [
            {
                'type' : 'publication'
            },
            {
                'type' : 'john'
            },
            {
                'type' : 'publication'
            }

        ];

        expect(CountPublications.count(newsFeeds)).toEqual(2);
    }));
});
