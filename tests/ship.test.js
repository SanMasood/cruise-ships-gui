const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js')

/*let shipObj;

beforeEach(() => {

shipObj = new Ship(new Itinerary()); //pass portObj?
create itn & port object here.

});*/

describe ('constructor', () => {

    it('creates instance of object Ship', () => {

        const port = new Port ('RAK');
        const itn = new Itinerary([port]);
        const shipObj = new Ship(itn);

        expect(shipObj).toBeInstanceOf(Object);

    })
    it ('adds instantiated ship to port\'s totalShips', () => {
        const port = new Port ('RAK');
        const itn = new Itinerary([port]);
        const shipObj = new Ship (itn);
        //port.addShip(shipObj);

        expect (port.totalShips).toContain(shipObj);


    })
    it ('has a name', () => {
        const port = new Port ('SAR');
        const itn = new Itinerary([port]);
        const shipObj = new Ship(itn);

        shipObj.cruisename = "DiamondPrincess";
        expect (shipObj.cruisename).toBe("DiamondPrincess");
    })

    it ('has a starting port', () => {
        const portObj = new Port('Destination');
        const itn1 = new Itinerary([portObj]);
        const shipObj2 = new Ship (itn1);


        expect (shipObj2.currentPort).toBe(portObj);

    })

})
describe ('setSail', () => {

    it ('sets sail from starting port', () => {

        const port1 = new Port('RAK');
        const port2 = new Port ('SAR');
        const itn = new Itinerary([port1, port2]);
        const ship = new Ship(itn);
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port1);
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
        const port = new Port('Darfur');
        const itn = new Itinerary([port]);    

        const ship = new Ship (itn);        
      
        ship.dock(port);
        expect (ship.currentPort).toBe(port);    

    })

    it ('can dock at a different port', () => {
        const port1 = new Port ('RAK');
        const port2 = new Port ('SAR');
        const itnObj = new Itinerary ([port1, port2]);
        const ship = new Ship (itnObj); 
        
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(port2);       

        /*
        ship3.dock ();
        ship3.currentport = ports[1];//next port in itnObj2

        expect(ship3.currentport).toBe()
        expect ()*/
    })

    it('can\'t sail further than its itinerary', () => {
        const port1 = new Port('RAK');
        const port2 = new Port('SAR');
        const itn = new Itinerary([port1, port2]);
        const ship = new Ship(itn);
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });


})