/* global expect */
/* global it */
/* global inject */
/* global describe */
/* global beforeEach */
'use strict';

describe('The TypesRetriever service', function () {

    beforeEach(function() {
        module('newsFeeds');
    });

    it('should return "all" type when there is no publication', inject(function (TypesRetriever) {
        var newsFeeds = [];
        var types = TypesRetriever.retrieve(newsFeeds);

        expect(types).toEqual(['ALL']);
    }));

    it('should retrieve all types of publication', inject(function (TypesRetriever) {
        var newsFeeds = [
            {
                'type' : 'publication',
                'publication': {
                    type: 'myfirsttype'
                }
            },
            {
                'type' : 'publication',
                'publication': {
                    type: 'mysecondtype'
                }
            },
            {
                'type' : 'publication',
                'publication': {
                    type: 'myfirsttype'
                }
            }

        ];
        var types = TypesRetriever.retrieve(newsFeeds);

        expect(types).toEqual(['ALL', 'myfirsttype', 'mysecondtype']);
    }));
});
