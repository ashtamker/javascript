class Person{
    constructor(){
        this.name = '';
        this.age = 0;
    }
    setName(name){
        this.name = name;
    }
    setAge(age){
        this.age = age;
    }


    *updateAge(x) {
        this.age = x;
        return age;
    }
}

let x = new Person('or',28);
console.log(x);
console.log(x.setAge(29));
console.log(x);
