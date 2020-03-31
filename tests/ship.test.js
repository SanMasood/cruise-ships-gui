const Ship = require('../src/ship');

let cruise = new Ship(name);

describe ('constructor', () => {

    it('creates instance of object ship', () => {

        expect(cruise).toBeInstanceOf(Object);

    })
    it ('has a name', () => {
        
        cruise.name = "DiamondPrincess";
        expect (cruise.name).toBe("DiamondPrincess");
    })

    it ('has a starting port', () => {

        cruise.startingport = 'Cornwall';
        expect (cruise.startingport).toBe('Cornwall');

    })

})
