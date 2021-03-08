class sortNumber {
    constructor(){
         this.numList = [];
    }
    addNum(num) {
        if(isPrime(num) === 'true' ){
        this.numList.push(num);
        return true;
        }
        else return false;
    }
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return true;
}


let num1 = new sortNumber;
num1.addNum(25);
console.log(this.numList);