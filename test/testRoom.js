let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
const app = require('../index');
describe("testing on room module", async () => {
    // this.timeout(5000);
    await describe("GET /", () => {
        it("should get all rooms", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.body.should.be.a('Array');
                    done();
                });
        });
    });

    await describe("GET /sort/:name", () => {
        it("should get all sorted rooms by name", (done) => {
            chai.request(app)
                .get('/sort/name')
                .end((err, res) => {
                    res.body.should.be.a('Array');
                    done();
                });
        });
    });

    await describe("GET /sort/:price", () => {
        it("should get all sorted rooms by price", (done) => {
            chai.request(app)
                .get('/sort/price')
                .end((err, res) => {
                    res.body.should.be.a('Array');
                    res.body[0].city.should.be.a('String');
                    done();
                });
        });
    });
    await describe("GET /city/:city", () => {
        it("should get all rooms in a city", (done) => {
            chai.request(app)
                .get('/city/Dedricktown')
                .end((err, res) => {
                    res.body.should.be.a('Array');
                    done();
                });
        });
    });
    await describe("GET /price/:min/:max", () => {
        it("should get error in max price", (done) => {
            chai.request(app)
                .get('/price/100/1d')
                .end((err, res) => {
                    res.body.errors.should.be.a('Object');
                    res.body.errors.max.should.be.a("String");
                    done();
                });
        });
    });
    await describe("GET /price/:min/:max", () => {
        it("should get all rooms in price range", (done) => {
            chai.request(app)
                .get('/price/100/200')
                .end((err, res) => {
                    res.body.should.be.a('Array');
                    res.body[0].should.be.a('Object');
                    done();
                });
        });
    });

});
