const Port = require('../src/ship.js');

let port;

beforeEach(() => {

port = new Port();
});

describe ('constructor', () => {

    it('creates instance of object Port', () => {

        expect(new Port()).toBeInstanceOf(Object);

    })

    it ('has a name', () => {
        
        port.name = 'Penzance';
        expect(port.name).toBe('Penzance');
    })

})