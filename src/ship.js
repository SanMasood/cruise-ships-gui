function Ship(){
    this.name;
    this.startingport;
    this.sailString;

}

Ship.prototype = {

    setSail(){

        sailString =`Cruise ${this.name} has set sail from ${this.startingport}.`;

        this.startingport = null;
    }
} 



module.exports = Ship;