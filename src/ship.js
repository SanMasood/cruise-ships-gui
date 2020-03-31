function Ship(portObj){
    this.cruisename;
    this.currentport = portObj.portname;
    this.sailString;
    this.dockingPort;


}

Ship.prototype = {

    setSail(){

        sailString =`Cruise ${this.cruisename} has set sail from ${this.startingport}.`;

        this.startingport = null;
    }
/*
    dock(){

        this.dockingPort = this.portName;
    }        
    */
} 

module.exports = Ship;