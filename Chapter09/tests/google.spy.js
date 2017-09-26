const sinon = require("sinon"),
proxyquire = require('proxyquire'),
log = sinon.spy(), 
requestStub = sinon.stub().callsArgWith(1, null, null, 'google.com'), 
google = proxyquire('./google', { 'request': requestStub }); 
 
describe('google module', ()=>{ 
    beforeEach(()=>{ 
        google(); 
    }); 
    it('should request google.com', ()=>{ 
        expect(reqstub).to.be.called(); 
    }); 
    it('should log google body', ()=>{ 
        expect(callback).to.be.calledWith(null, null, 'google.com'); 
    }); 
});