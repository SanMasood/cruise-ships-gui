function Ship(itn){
    this.cruisename = 'Diamond Princess';

    this.itn = itn;
    this.currentPort = itn.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
    //this.currentPort.removeShip(this); //previousPort?

}

Ship.prototype = {

    setSail(){
        console.log (`Ship ${this.cruisename} has left port ${this.currentPort}`);
       
        const currentPortIndex = this.itn.ports.indexOf(this.currentPort);
        if (currentPortIndex === this.itn.ports.length-1)
        throw new Error('End of itinerary reached');



        this.previousPort = this.currentPort;
        this.currentPort = null;

        this.previousPort.removeShip(this);

    },

    dock(){

        //const itinerary = this.itn; OR you could do as in WT
        const previousPortIndex = this.itn.ports.indexOf(this.previousPort);
      
        this.currentPort = this.itn.ports[previousPortIndex + 1];

        this.currentPort.addShip(this);
        
        //this.currentPort = portObj2; //HERE  


    },        
    
} 

module.exports = Ship;