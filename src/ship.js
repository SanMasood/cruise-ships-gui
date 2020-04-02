function Ship(itn){
    this.cruisename;

    this.itn = itn;
    this.currentPort = itn.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);


}

Ship.prototype = {

    setSail(){

        //this.sailString =`Cruise ${this.cruisename} has set sail from ${this.startingport}.`;
        //console.log (this.sailString);
       
        const currentPortIndex = this.itn.ports.indexOf(this.currentPort);
        if (currentPortIndex === this.itn.ports.length-1)
        throw new Error('End of itinerary reached');

        this.previousPort = this.currentPort;
        this.currentPort = null;

    },

    dock(){

        //const itinerary = this.itn; OR you could do as in WT
        const previousPortIndex = this.itn.ports.indexOf(this.previousPort);
      
        this.currentPort = this.itn.ports[previousPortIndex + 1];
        
        //this.currentPort = portObj2; //HERE

    },        
    
} 

module.exports = Ship;