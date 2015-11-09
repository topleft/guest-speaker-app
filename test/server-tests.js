var chai = require('chai');
var mocha = require('mocha');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');
var should = chai.should();
chai.use(chaiHttp);

describe('server routes', function(){
    
    it('/ should hit route', function(done){
        chai.request(server)
        .get('/')
        .end(function(err, res){
            res.should.have.status(200);
            done();
        });
    });
});