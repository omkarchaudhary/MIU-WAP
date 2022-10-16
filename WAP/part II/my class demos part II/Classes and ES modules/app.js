
//Obina

// const log = console.log;
// class User{
//     constructor(name){
//     this.name=name;
// }
// sayHello(){
//     log(`Hello, ${this.name}`)
// }

// }
// let user= new User("John");
// user.sayHello();
// log(user instanceof User);



class Car{
    //let _speed is the variable name
    //constructor
    constructor(speed=50){
        this.speed=speed;
    }
    //getter
    getSpeed(){
    return this.speed;
    }
    //setter
    setSpeed(speed) {
        this.speed=speed;
    }
    //function
    printName(){
        console.log(c1.speed);
    }
    setName(){
        this._speed="something";
    }
    static fuelType(){
        return "Gas";
    }
}

//inheritance
class bmw extends Car{
    constructor(speed,model){
        super(speed=350);
        this.model=model;
    }
    set model(model){
        this._model=model;
    }
    get model(){
       return this._model;
    }

    fuelType(){
        return super.fuelType() + " & " + "Hybrid";
    }
}


let c1= new Car(500);
let b1= new bmw(150, "1234");
console.log(c1.speed); //500
c1.speed=40;
console.log(c1.speed);
console.log(b1.speed+ ", " + b1.model);

// c1.printName();
// b1.fuelType();
// console.log(typeof Car);
// console.log(c1 instanceof Car)
// console.log(c1);

