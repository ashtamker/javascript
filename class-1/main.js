class Animal {
    constructor(name,sound) {
        this.name = name;
        this.sound = sound;
    }
    getName() {
        return this.name;
    }

    getSound() {
        return this.sound;
    }

    print() {
        console.log(`The ${this.name} make this ${this.sound}` );
    }
}

let animal1 = new Animal('Wolf','growling');
let animal2 = new Animal('Dolphin','squeaks');
let animal3 = new Animal('Lion','roar');

animal1.print();
animal2.print();
animal3.print();