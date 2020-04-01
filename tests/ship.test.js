const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js')

let shipObj;

beforeEach(() => {

shipObj = new Ship(new Itinerary()); //pass portObj?

});

describe ('constructor', () => {

    it('creates instance of object Ship', () => {

        expect(new Ship(new Itinerary())).toBeInstanceOf(Object);

    })
    it ('has a name', () => {
        
        shipObj.cruisename = "DiamondPrincess";
        expect (shipObj.cruisename).toBe("DiamondPrincess");
    })

    it ('has a starting port', () => {
        const portObj = new Port('Destination');
        const shipObj2 = new Ship (portObj);

        expect (shipObj2.currentPort).toBe(portObj);

    })

})
describe ('setSail', () => {

    it ('sets sail from starting port', () => {

        const port = new Port('Dover');
        const ship = new Ship(port);
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);
       /* const portObj = new Port('Destination');

        shipObj.currentPort = 'Florence';
        shipObj.setSail();
        expect (shipObj.setSail()).toBeFalsy();*/


        //expect (shipObj.setSail()).toEqual(shipObj.sailString);
        //shipObj.previousPort = 'RAK' //HERE 
        //expect(shipObj.previousPort).toBe(portObj);

        

    })
})

describe ('dock', () => {

    it('docks at a given port', () => {
        const port2 = new Port('Darfur');
        const ship2 = new Ship (port2);        
        const port3 = new Port('Abu Dhabi');    
      
        ship2.dock(port3);
        expect (ship2.currentPort).toBe(port3);    

    })

    it ('can dock at a different port', () => {
        const port1 = new Port ('RAK');
        const port2 = new Port ('SAR');
        const itnObj = new Itinerary ([port1, port2]);
        const ship3 = new Ship (itnObj);        

        /*
        ship3.dock ();
        ship3.currentport = ports[1];//next port in itnObj2

        expect(ship3.currentport).toBe()
        expect ()*/


    })
})