const Port = require('../src/port.js');
const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinerary.js')

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

describe ('addShip', () => {

    it ('adds a ship', () => {
        const port1 = new Port('RAK');
        const ship = {};
        port1.addShip(ship);
        expect (port1.totalShips).toContain(ship);

    })
})

describe ('removeShip', () => {

    it ('has removeShip method', () => {
        const port1 = new Port('RAK');
        const ship1 = ship2 = ship3 = {};

        //port1.totalShips = [ship1, ship2, ship3];
        port1.addShip(ship1);
        port1.addShip(ship2);
        port1.addShip(ship3);


        port1.removeShip(ship2);
        expect (port1.totalShips).toEqual([ship1, ship2]);
        
        
    })
})
