const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js')

let ship, port, itn, port2, itn2, ship2;

beforeEach(() => {

    port = new Port ('RAK');
    itn = new Itinerary([port]);
    ship = new Ship(itn);

    port2 = new Port ('SAR');
    itn2 = new Itinerary([port, port2]);
    ship2 = new Ship(itn2);

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
      
        ship2.setSail();
      
        expect(ship2.currentPort).toBeFalsy();
        expect(ship2.previousPort).toBe(port);

        expect(port.totalShips).not.toContain(ship2);

    })
    
})

describe ('dock', () => {

    it('docks at a given port', () => {
      
        ship.dock(port);
        expect (ship.currentPort).toBe(port);    

    })

    it ('can dock at a different port', () => {
        
        ship2.setSail();
        ship2.dock();

        expect(ship2.currentPort).toBe(port2);     
        expect(port2.totalShips).toContain(ship2);  

    })
   
    it('can\'t sail further than its itinerary', () => {
          
        ship2.setSail();
        ship2.dock();
      
        expect(() => ship2.setSail()).toThrowError('End of itinerary reached');
    });

    
    it ('ship gets added to totalShips of port when ship docks', () => {  
      
        ship.dock();

        expect (port.totalShips).toContain(ship);

    })

})

/*NEW STUFF: Destructuring assignment. E.g: ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
*/