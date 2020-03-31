const Port = require('../src/port.js');

let portObj;

beforeEach(() => {

portObj = new Port('Destination');
});

describe ('constructor', () => {

    it('creates instance of object Port', () => {

        expect(new Port()).toBeInstanceOf(Object);

    })

    it ('has a name', () => {
        
        //portObj.portname = 'Penzance';
        expect(portObj.portname).toBe('Destination');
    })


})