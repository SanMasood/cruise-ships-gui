function Port(portname){

    this.portname = portname;
    this.totalShips = [];
}

Port.prototype = {

    addShip(ship) {
        this.totalShips.push(ship);
        
    },

    removeShip(ship) {
        const shipIndex = this.totalShips.indexOf(ship)
        this.totalShips.splice(shipIndex, 1);
    },

}
module.exports = Port;