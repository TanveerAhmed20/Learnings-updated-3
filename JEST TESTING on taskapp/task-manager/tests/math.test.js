
test('dummy test',()=>{
    const str = "happy";
    expect(str).toContain('happy');
});

const math = require('../src/math');

describe('calculateTip',()=>{
    it('should return tip +total',()=>{
        const total = math.calculateTip(10,.1);
        expect(total).toEqual(11);
        // total = total + total*tippercent
        // = 10 + 10*0.1 = 11$
    });    
})

// test('async test demo',(done)=>{
//     // without this done parameter , 
//     //this function will be tested synchronously \
//     //and the test will pass even though 1!=2

//     setTimeout(()=>{
//         expect(1).toBe(2);
//         done();
//     },2000);
// });

test('should add two number',(done)=>{
    math.add(2,3)
    .then(sum=>{
        expect(sum).toBe(5);
        done();
    });
});


test('should add two numbers async/await',async ()=>{
    // jest.setTimeout(6000);
    const sum = await math.add(2,3);
    expect(sum).toBe(5);
});