let chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

const url = "http://localhost:3000"

describe('Obtener todos los cardSets con su respectiva cuenta: ', () => {
    it('Cardsets', (done) => {
        chai.request(url)
            .get('/cardSet')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done()
            });
    });
});
