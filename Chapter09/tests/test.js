// const expect = require('chai').expect; 
// describe('The code', ()=>{ 
//     beforeEach(()=>{         
//         // optional preparation for each test 
//     }); 
//     afterEach(()=>{ 
//         // optional cleanup after each test 
//     }); 

//     it('should test something', ()=>{ 
//         const something = 1; 
//         // here we "expect" some condition to declare our test 
//         // in this case, we expect the variable to exist 
//         // more on the assertion syntax a little later 
//         expect(something).to.exist; 
//     }); 
//     it('should test something_else', ()=>{ 
//         const something_else = false; 
//         // now we test a different variable against its value 
//         // and expect that value to equal false 
//         expect(something_else).to.equal(false); 
//     }); 
// });

const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

let sum = (a, b) => {
    return a + b;
}
let doWork = () => {
    console.log("asdasd")
    const x = 1,
        y = 2;
    console.log(sum(x, y));
}


const log = sinon.spy(),
    requestStub = sinon.stub().callsArgWith(1, null, null, 'google.com'),
    google = proxyquire('../google', { 'request': requestStub });

describe('google module', function() {
    beforeEach(function() {
        google();
    });
    it('should request google.com', function() {
        expect(reqstub).to.be.called();
    });
    it('should log google body', function() {
        expect(callback).to.be.calledWith(null, null,
            'google.com');
    });
});