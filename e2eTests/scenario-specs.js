describe('my app', function () {

    beforeEach(function () {
        var mockModule = require('./fakeHttp');
        browser.addMockModule('fakeKttp', mockModule.httpBackendMock);
    });

    it('should automatically redirect to /view1 when location hash/fragment is empty', function (done) {

        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/dash");
        //browser.pause();
        done();
    });

    it('devem ter 2 resultados', function (done) {
        var elem = element.all(by.css('.pokemon'));



        expect(elem.count()).toEqual(2);
        //expect(elem.get(0)).toEqual('Raphamon');

        console.log('VAMOS TESTAR');
        console.log('primeiro = ' + elem.get(1).name);
        
//        element.all(by.css('.pokemon')).get(0).then(function (pokemon) {
//            console.log('primeiro = ' + pokemon.name);
//            done();
//        });
        done();
    });

    it('fim', function (done) {
        console.log('FIM');
        done();
    });
});