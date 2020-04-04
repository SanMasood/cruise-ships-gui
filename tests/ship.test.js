const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js')

let ship, port1, itn, port2;

beforeEach(() => {
    
    const port = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
    
      port1 = {
        ...port,
        portname: 'RAK',
        totalShips: []
      };
    
      port2 = {
        ...port,
        portname: 'SAR',
        totalShips: []
      };

    itn = {
        ports: [port1, port2]

    };

    itn = new Itinerary([port1, port2]);
    ship = new Ship(itn);

});

describe ('constructor', () => {

    it('creates instance of object Ship', () => {

        expect(ship).toBeInstanceOf(Object);

    })
    it ('adds instantiated ship to port\'s totalShips', () => {
     
        expect (port1.addShip).toHaveBeenCalledWith(ship);

    })
    it ('has a name', () => {
    
        ship.cruisename = "DiamondPrincess";
        
        expect (ship.cruisename).toBe("DiamondPrincess");
    })

    it ('has a starting port', () => {
 
        expect (ship.currentPort).toBe(port1);

    })

})
describe ('setSail', () => {

    it ('sets sail from starting port', () => {
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port1);

        expect(port1.removeShip).toHaveBeenCalledWith(ship);
    })
    
})

describe ('dock', () => {
    it ('can dock at a different port', () => {
        
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(port2);     
        expect(port2.addShip).toHaveBeenCalledWith(ship);  

    })
   
    it('can\'t sail further than its itinerary', () => {
          
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    beforeEach(() => {
        ship.dock();
    })

    it('docks at a given port', () => {
      
        expect (ship.currentPort).toBe(port1);    

    })
    
    it ('ship gets added to totalShips of port when ship docks', () => {  
      
        expect (port1.addShip).toHaveBeenCalledWith(ship); //addShip

    })

})

/*NEW STUFF: Destructuring assignment. E.g: ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
*/