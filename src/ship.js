function Ship(){
    this.cruisename;
    this.startingport;
    this.sailString;

}
function Port (){

    this.name = portname;
}

Ship.prototype = {

    setSail(){

        sailString =`Cruise ${this.cruisename} has set sail from ${this.startingport}.`;

        this.startingport = null;
    }

    //dock(){

    
} 



module.exports = Ship, Port;