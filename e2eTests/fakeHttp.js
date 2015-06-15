//https://github.com/angular/protractor/issues/125
//http://cloudspace.com/blog/2014/03/27/backend-less-development-with-angular/#.VWm6S1lViko
exports.httpBackendMock = function () {
    //var fakeKttp = angular.module('fakeKttp', ['myApp', 'ngMockE2E']);
    var fakeKttp = angular.module('fakeKttp', ['starter', 'ngMockE2E']);
 //httpBackendMock
    //    fakeKttp.config(['$provide',
    //    function ($provide) {
    //            $provide.decorator('$httpBackend', ng.mock.e2e.$httpBackendDecorator);
    //    }])

    fakeKttp.run(function ($httpBackend) {
        
        var pokedex = {
            pokemon: [
                {
                    name: 'Raphamon'
                }, {
                    name: 'Colonesemon'
                }
            ]
        };

        // returns the pokedex
 $httpBackend.whenGET('http://pokeapi.co/api/v1/pokedex/1/').respond(pokedex);

        // Catch-all pass through for all other requests
        $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenDELETE(/.*/).passThrough();
        $httpBackend.whenPUT(/.*/).passThrough();
    });

}