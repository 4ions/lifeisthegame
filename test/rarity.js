let chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

const url = "http://localhost:3000"

describe('Obtener todos los items: ', () => {
    it('Mostrar todos los items', (done) => {
        chai.request(url)
            .get('/rarity')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done()
            });
    });
});

describe('Obtener items por rareza: ', () => {
    it('mostrar los items por rareza: Legendarios ', (done) => {
        chai.request(url)
            .get('/rarity/Legendary')
            .end(function (err, res) {
                expect(res.body.cards[0]).to.have.property('rarity').to.be.equal("Legendary");;
                expect(res).to.have.status(200);
                done()
            });
    });
});

