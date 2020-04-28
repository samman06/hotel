let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
const app = require('../index');
describe("testing on table module", () => {

    describe("GET /", () => {
        it("should get all rooms", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.body.should.be.a('Object');
                    done();
                });
        });
    });

    describe("GET /sort/:name", () => {
        it("should get all sorted rooms by name", (done) => {
            chai.request(app)
                .get('/sort/name')
                .end((err, res) => {
                    res.body.should.be.a('Object');
                    res.body.rooms.should.be.a('Array');
                    done();
                });
        });
    });

    describe("GET /sort/:price", () => {
        it("should get all sorted rooms by price", (done) => {
            chai.request(app)
                .get('/sort/price')
                .end((err, res) => {
                    res.body.should.be.a('Object');
                    done();
                });
        });
    });

    describe("GET /city/:city", () => {
        it("should get all rooms in a city", (done) => {
            chai.request(app)
                .get('/city/Kshlerinbury')
                .end((err, res) => {
                    res.body.should.be.a('Object');
                    res.body.rooms[0].should.be.a('Object');
                    done();
                });
        });
    });

    describe("GET /price/:min/:max", () => {
        it("should get error in max price", (done) => {
            chai.request(app)
                .get('/price/100/1d')
                .end((err, res) => {
                    res.body.errors.should.be.a('Object');
                    done();
                });
        });
    });
    describe("GET /price/:min/:max", () => {
        it("should get all rooms in price range", (done) => {
            chai.request(app)
                .get('/price/100/200')
                .end((err, res) => {
                    res.body.rooms.should.be.a('Array');
                    done();
                });
        });
    });

});
