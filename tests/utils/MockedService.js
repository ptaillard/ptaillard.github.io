/* global jasmine */
'use strict';

var Mocker = {

    mock: function($provide, service, methods) {
        var mockObj = jasmine.createSpyObj(service, methods);
        $provide.value(service, mockObj);
        return mockObj;
    }
};
