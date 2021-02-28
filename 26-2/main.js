const storm = { 
    // add code here
    superPower: 'flaying',
    printPower: printSuperPower,
    

};



function printSuperPower() {
console.log("my superpower is " + this.superPower); 
};

storm.printPower();