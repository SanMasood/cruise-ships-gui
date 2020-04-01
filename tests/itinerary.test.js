const Itinerary = require('../src/itinerary.js')
const Port = require('../src/port.js');


describe ('constructor', () => {

    it('creates instance of object Itinerary', () => {
        const it1 = new Itinerary();

        expect(new Itinerary()).toBeInstanceOf(Object);

    })

    it ('has a ports property', () => {
        const it1 = new Itinerary();
        it1.ports = 'LA';

        expect(it1.ports).toBe('LA');

    })

    it('can have different ports', () => {
        const port1 = new Port ('RAK');
        const port2 = new Port ('SAR');
        const itnObj = new Itinerary ([port1, port2]);

        expect(itnObj.ports).toEqual([port1, port2]);

    })
})