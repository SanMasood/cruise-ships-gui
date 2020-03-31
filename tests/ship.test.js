const Ship = require('../src/ship.js');
const Port = require('../src/port.js');


let shipObj;

beforeEach(() => {

shipObj = new Ship(new Port()); //pass portObj?

});

describe ('constructor', () => {

    it('creates instance of object Ship', () => {

        expect(new Ship(new Port())).toBeInstanceOf(Object);

    })
    it ('has a name', () => {
        
        shipObj.cruisename = "DiamondPrincess";
        expect (shipObj.cruisename).toBe("DiamondPrincess");
    })

    it ('has a starting port', () => {
        const portObj = new Port('Destination');
        const shipObj2 = new Ship (portObj);

        expect (shipObj2.currentport).toBe(portObj.portname);

    })

})
describe ('setSail', () => {

    it ('sets sail from starting port', () => {
        shipObj.cruisename = 'ABC'
        shipObj.currentport = 'Florence';
        shipObj.setSail();

        expect (shipObj.setSail()).toEqual(shipObj.sailString);
        expect (shipObj.setSail()).toBeFalsy();
        

    })
})

describe ('dock', () => {

    it('docks at a given port', () => {
/*
        let aNewPort = new Port(); 
        shipObj.dockingPort = 'Stopping Here';
        aNewPort.portname = 'Destination'
        shipObj.setSail();

        shipObj.dock();
        expect (shipObj.dockingPort).tobe(aNewPort.portname);*/

    })
})