class Computer{
    constructor(ram, cpu, storage){
        this.ram=ram;
        this.cpu=cpu;
        this.storage=storage;
    }
    runProgram(program){
        console.log('running: ' + program);
    }
    getRam(){
        return this.ram;
    }
    getCpu(){
        return this.cpu;
    }
    getStorage(){
        return this.storage;
    }
    setRam(ram){
        this.ram=ram;
    }
    setCpu(cpu){
        this.cpu=cpu;
    }
    setStorage(storage){
        this.storage=storage;
    }
}
class Laptop extends Computer{
    constructor(ram, cpu, storage, battery){
        super(ram, cpu, storage);
        this.battery=battery;
    }
    carryAround(){
        console.log('carrying laptop: cpu '+ this.cpu+ ' ram: '
        + this.ram + ' storage: '+ this.storage 
        + ' battery: ' + this.battery )
    }
}
let c1= new Computer('10','11','12');
let l1= new Laptop('1','2','3','4');

console.log(c1.ram); //10
c1.runProgram('vs'); //vs
l1.runProgram('js'); //js
console.log(l1.storage); //3
l1.carryAround(); //carrying laptop cpu 2 ram 1 storage 3 battery 4
