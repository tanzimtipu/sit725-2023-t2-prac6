const expect = require("chai").expect;
const request = require("request");
let url = 'http://localhost:3000/api/cat'
let cat = {
    title:'',
    subTitle:'',
    description:'',
    path:''
}; 

describe('test GET api', function(){
    it('returns statusCode of 200', function(done){
        request(url, function(error, response, body){
            let bodyObj = JSON.parse(body);
            expect(bodyObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test POST api', function(){
    it('post cat to DB', function(done){
        request.post({url:url, form: cat}, function(error, response, body){
            let bodyObj = JSON.parse(body);
            expect(bodyObj.message).to.equal('success');
            done();
        });
    });
});

describe('test DELETE api', function(){
    it('delete a cat', function(done){
        request.delete({url:url, form: cat}, function(error, response, body){
            
            done();
        });
    });
});
