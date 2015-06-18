//***********************************************
//*                Pré-Requisitos               *
//***********************************************
//declare aqui dependências de módulos adicionais

//-----------------------------------------------

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
        
        done();
        
    });
    
    it('O nome do primero pokemon deve ser Raphamon', function(done){
        //No expect não tem que tratar respostas assincronas, logo não precisa usar a injeção do "done"
        expect('Raphamon').toEqual(element.all(by.css('.pokemon')).get(0).getText());
        
        //A injeção do "done" é necessária quando por algum motivo se deseja capturar dados
        //ou enviar dados para interface que não serão diretamente usados por um expect
        element.all(by.css('.pokemon')).get(0).getText().then(function (pokemonName) {
            console.log('Nome do primeiro pokemon = ' + pokemonName);
            done();
        });
    });
    
    it('O nome do segundo pokemon deve ser Colonesemon', function(done){
        expect('Colonesemon').toEqual(element.all(by.css('.pokemon')).get(1).getText());
        
        element.all(by.css('.pokemon')).get(1).getText().then(function (pokemonName) {
            console.log('Nome do segundo pokemon = ' + pokemonName);
            done();
        });
    });

    it('fim', function (done) {
        console.log('FIM');
        done();
    });
});