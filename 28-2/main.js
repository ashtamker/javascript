const person = {
    name: 'or',

print: function () {
    console.log(this.name);
    
},

printDelayed: function() {
    setTimeout((function() {
        console.log(this.name)}).bind(this), 1000);
    
}
};

person.printDelayed();