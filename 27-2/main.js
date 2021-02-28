function Pokemon(pokemonName, pokemonType, pokemonAttackList){ 
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function(x) {
    console.log(`${this.name} used ${this.attackList[x]}`);
}



const bulbasaur = new Pokemon('bulbasaur', 'grass', ['grassAttak1', 'grassAttak2', 'grassAttak3']);
const charmander = new Pokemon('Charmander', 'fire', ['fireAttak1', 'fireAttak2', 'fireAttak3']);
const squirtle = new Pokemon('Squirtle', 'water', ['waterAttak1', 'waterttak2', 'waterAttak3']);


bulbasaur.callPokemon();
squirtle.attack(1)

// console.log(bulbasaur.name());
// console.log(charmander.name());