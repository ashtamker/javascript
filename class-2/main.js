class Car  {
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;

    }
    getBrand() {
        return this.brand;
    }
    getSpeed() {
        return this.speed;
    }

    print () {
        console.log(`Car name: ${this.brand} has Max speed of ${this.speed}k/h` );
    }

    setSpeed(speed) {
        this.speed = speed;

    }

}
let carArr = [];

let car1 =  new Car ('BMW', 220);
let car2 =  new Car ('Batmoblie', 350);
let car3 =  new Car ('Tesla', 260);
let car4 =  new Car ('Susita', 28);

carArr.push(car1,car2,car3,car4);

let max = carArr.reduce((max,car) => {
    return max.speed > car.speed ? max : car;
})

carArr.sort((c1, c2) => c1.getSpeed() - c2.getSpeed());
console.log(max);
console.log(carArr);
car2.print();
car2.setSpeed(280);
car2.print();
