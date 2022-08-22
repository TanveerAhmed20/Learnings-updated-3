const fetch = require('node-fetch')
const swapi = require( './script2')

it('calls swapi to get people',(done)=>{
    expect.assertions(1);
     swapi.getPeople(fetch).then(data=>{
        expect(data.count ).toEqual(87)
        done();
    })
})

it('calls swapi to get people with a promise',(done)=>{
   swapi.getPeoplePromise(fetch).then(data=>{
        expect(data.count ).toEqual(87)
        done();
    })
})


it('getPeople returns count and results',(done)=>{
    const mockFetch  = jest.fn()
    .mockReturnValue(Promise.resolve({
        json:  () => Promise.resolve({
            count:87,
            results:[0,1,2,3,4,5]
        })
    }));
    //with ascynchronous test always check with expect.assertions()

    expect.assertions(6);
    swapi.getPeoplePromise(mockFetch)
    .then((data)=>{
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people')
        expect(data.count ).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
        expect(data.results).toEqual([0,1,2,3,4,5]);
        expect(data.results).toEqual(expect.arrayContaining([2,0,1,3,4,5]));
        done();
    })
    // console.log(results)

})