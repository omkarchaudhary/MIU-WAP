//Question 1
var count = (function(){
    var counter = 0;
    let add = function(){
        return counter += 1;
    }
    let reset = function(){
        return counter =0;
    }
    return{
        add: add,
        reset : reset
    };
})();

console.log(count.add());
console.log(count.reset());

//Question 2
//  Free Variables = A variable referred to by a function that is not one of its
//  parameters or local variables.
//  The Free variable in the first question for add function is counter.

//Question 3
function make_adder(inc){
    var value = 0;
    return function(){
        return value += inc;
    }
}
var add5 = make_adder(5);
add5();
console.log(add5());

//Question 4
// What simple modification to the JavaScript file can remove all the names from the 
// Global namespace?
//Ans. By Revealing Module Pattern;

// Question 5
let employee = (function(){
    let name;
    let age;
    let salary;
    const getName = function(){
        return name
    }
    const getAge = function(){
        return age;
    }
    const getSalary = function(){
        return salary;
    }
    const setName = function(name){
        name = name;
    } 
    const setAge = function(age){
        age = age;
    }
    const setSalary = function(salary){
        salary = salary
    }
    const increaseSalary = function(percentage){
        return percentage*getSalary/100;
    }
    const incrementAge = function(age){
        return age+getAge;
    }
    return{
        setName : setName,
        setAge : setAge,
        setSalary : setSalary,
        increaseSalary : increaseSalary,
        increaseAge :incrementAge
    }
})();


// Question 6
employee.extension = function(){
    let address;
    function setAddress(address){
        this.address = address;
    }
    function getAddress(){
        return this.address;
    }
}


