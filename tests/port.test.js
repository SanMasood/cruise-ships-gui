const Port = require('../src/port.js');
const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinerary.js')

let port, ship, ship2, ship3;

beforeEach(() => {

port = new Port('RAK');
ship = ship2 = ship3 = {};

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
  
        expect (port.totalShips).toContain(ship);

    })

    it ('has removeShip method', () => {
     
        port.removeShip(ship2);
        expect (port.totalShips).toEqual([ship, ship2]);        
        
    })
})
