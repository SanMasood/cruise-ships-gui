
(function exportPort() {

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

};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());

//module.exports = Port;