const Itinerary = require('../src/itinerary.js')

let port, port2, itn;

beforeEach(() => {
    port = port2 = jest.fn();
    itn = new Itinerary([port, port2]);

})


describe ('constructor', () => {

    it('creates instance of object Itinerary', () => {
       
        expect(new Itinerary()).toBeInstanceOf(Object);

    })

    it ('has a ports property', () => {

        itn.ports = 'LA';

        expect(itn.ports).toBe('LA');

    })

    it('can have different ports', () => {
     
        expect(itn.ports).toEqual([port, port2]);

    })
})