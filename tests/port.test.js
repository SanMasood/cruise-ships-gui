const Port = require('../src/port.js');
const Ship = require('../src/ship.js)

let port, ship, ship2, ship3;

beforeEach(() => {

port = new Port('RAK');
ship = jest.fn();
ship2 = jest.fn();
ship3 = jest.fn();

});

describe ('constructor', () => {

    it('creates instance of object Port', () => {

        expect(new Port()).toBeInstanceOf(Object);

    })

    it ('has a name', () => {
        
        expect(port.portname).toBe('RAK');
    })
})

describe ('addShip & removeShip', () => {

    beforeEach(() => {

        port.addShip(ship);
        port.addShip(ship2);
        port.addShip(ship3);

    })

    it ('adds a ship', () => {
  
        expect (port.totalShips).toEqual([ship, ship2, ship3]);

    })

    it ('has removeShip method', () => {
     
        port.removeShip(ship2);
        expect (port.totalShips).toEqual([ship, ship3]);        
        
    })
})
