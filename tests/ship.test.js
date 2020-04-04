const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js')

let ship, port, itn, port2;

beforeEach(() => {

    port = new Port ('RAK');
    port2 = new Port ('SAR');
    itn = new Itinerary([port, port2]);
    ship = new Ship(itn);

});

describe ('constructor', () => {

    it('creates instance of object Ship', () => {

        expect(ship).toBeInstanceOf(Object);

    })
    it ('adds instantiated ship to port\'s totalShips', () => {
     
        expect (port.totalShips).toContain(ship);

    })
    it ('has a name', () => {
    
        ship.cruisename = "DiamondPrincess";
        expect (ship.cruisename).toBe("DiamondPrincess");
    })

    it ('has a starting port', () => {
 
        expect (ship.currentPort).toBe(port);

    })

})
describe ('setSail', () => {

    it ('sets sail from starting port', () => {
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);

        expect(port.totalShips).not.toContain(ship);

    })
    
})

describe ('dock', () => {

    it('docks at a given port', () => {
      
        ship.dock();
        expect (ship.currentPort).toBe(port);    

    })

    
    it ('ship gets added to totalShips of port when ship docks', () => {  
      
        ship.dock();

        expect (port.totalShips).toContain(ship);

    })

    it ('can dock at a different port', () => {
        
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(port2);     
        expect(port2.totalShips).toContain(ship);  

    })
   
    it('can\'t sail further than its itinerary', () => {
          
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });


})

/*NEW STUFF: Destructuring assignment. E.g: ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
*/