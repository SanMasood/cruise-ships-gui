function Ship(currentPort){
    this.cruisename;
    
    this.currentPort = currentPort;
    this.previousPort = null;

}

Ship.prototype = {

    setSail(){

        //this.sailString =`Cruise ${this.cruisename} has set sail from ${this.startingport}.`;
        //console.log (this.sailString);
        this.previousPort = this.currentPort;
        this.currentPort = null;

    },

    dock(portObj2){
        
        this.currentPort = portObj2; //HERE
        //return this.currentport;
    },        
    
} 

module.exports = Ship;