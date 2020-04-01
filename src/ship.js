function Ship(portObj){
    this.cruisename;
    this.currentport = portObj;
    this.sailString;
    this.dockingPort;


}

Ship.prototype = {

    setSail(){

        //this.sailString =`Cruise ${this.cruisename} has set sail from ${this.startingport}.`;
        //console.log (this.sailString);
        this.startingport = null;
    },

    dock(portObj2){
        
        this.currentport = portObj2; //HERE
        //return this.currentport;
    },        
    
} 

module.exports = Ship;