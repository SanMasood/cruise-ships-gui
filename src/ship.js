function Ship(itn){
    this.cruisename;

    this.itn = itn;
    this.currentPort = itn.ports[0];
    this.previousPort = null;


}

Ship.prototype = {

    setSail(){

        //this.sailString =`Cruise ${this.cruisename} has set sail from ${this.startingport}.`;
        //console.log (this.sailString);
        this.previousPort = this.currentPort;
        this.currentPort = null;

    },

    dock(){

        const itinerary = this.itn;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        
        //this.currentPort = portObj2; //HERE

    },        
    
} 

module.exports = Ship;