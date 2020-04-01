function Ship(itnObj){
    this.cruisename;
    
    this.currentport = itnObj;
    this.previousPort = null;

}

Ship.prototype = {

    setSail(){

        //this.sailString =`Cruise ${this.cruisename} has set sail from ${this.startingport}.`;
        //console.log (this.sailString);
        this.startingport = null;
        this.previousPort = this.currentport;
    },

    dock(portObj2){
        
        this.currentport = portObj2; //HERE
        //return this.currentport;
    },        
    
} 

module.exports = Ship;