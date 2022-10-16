// x=1;
// var a = 5;
// var b = 10;
// var c = function(a,b,c){
//     console.log("1. "+x);
//     console.log("2. "+a);
//     var f = function(a,b,c){
//         b=a;
//         console.log("3. "+b);
//         b =c;
//         varx = 5;
//     }
//     f(a,b,c);
//     console.log("4. "+b);
//     var x =10;
// }
// c(8,9,10);
// console.log("5. "+b);
// console.log("6. "+x);

// var x = 9;
// function myFunction(){
//     return x*x;
// }
// console.log(myFunction());
// x =5;
// console.log(myFunction());

// var foo =1;
// function bar(){
//     if(!foo){
//         var foo =10;
//     }
//     //alert(foo);
// }
// bar();

// let emp = function(){
//     let ab = {
//         name :"justice",
//         getName : function(){
//             console.log(this.name);
//          function a(){
//             console.log(this.name)
//             function b(){
//                 console.log("b func "+this.name)
            
//                 }
//                 return b();
//             }

//             return a;
            
//         }
//     }
//      return ab;
// }
//  console.log(emp().getName()());

// function maxString(arr){
//    let max = 0;
//    arr.filter(x => x.indexOf(' ')< 0)
//    .map( y =>{
//     if(y.length > max){
//         max = y.length;
//     }
//    });
//    return max;
// }
// const arr = ["this is","Omkar","Eman","programming", "Software Engineer"];
// console.log(maxString(arr));

// const mapArr = arr.map(x => x.length);
// console.log(mapArr);
// const filterArr = arr.filter(x => x.charAt(0) == x.charAt(0).toUpperCase());
// console.log(filterArr);
// const reduceArr = arr.reduce((x,y) => x+y,"");
// console.log(reduceArr);

// function sumNumbersArray(...x){
//      return x.reduce((x,y)=>x+y,0);
// }
// console.log(sumNumbersArray(1,2,3,4));

// function combineArrays(x,y){
//     return [...x,...y];
// }
// console.log(combineArrays([1,2,3],[4,5,6]));

// function addNumber(x){
//     let sum = 0;
//      return function add(){
//          return sum += x;
//     }
// }
// var result = addNumber(5);
// result();
// console.log("Closure "+ result());

// let myObject = {
//     x: 5,
//     y: 10
// };
// console.log(myObject);
// function currying(x, z){
//     return x + this.y + z;
// }
// let resultb = currying.bind(myObject,1,2);
// console.log(resultb());
// let resultc = currying.call(myObject,6,7);
// console.log(resultc);
// let resulta = currying.apply(myObject,[5,45]);
// console.log(resulta);
// //IIFE
// let iife = (function(){
//         function add(x,y){
//             return x+y;
//         }
//         return{
//             add : add
//         }
// })();
// console.log(iife.add(7,6));
// let iife2 = (function(x,y){   
//         return x+y;
// })(7,6);

// console.log(iife2);

// //Revealing Method pattern
// let revealed = (function(){
//     let x  = 5;
//     let y = 8;
//     function doMath(){
//       return x+y;
//     }
//     return {
//        doMath: doMath
//     }
//  })();
//  console.log(revealed.doMath());

//  // inheritance

// let person = {
//     name: "john",
//     speak: function(){
//         return this.name;
//     }
//    };
//    let dave = {
//    };
//    dave.__proto__ = person;
//    dave.__proto__.name = "dave smith";

//    let charlie ={
//     // name:"Charlie",
//     eat: function(){
//         return "eating....";
//     }
//    }
//    charlie.__proto__ = person;
//    charlie.__proto__.name = "Charlez Brown";
//    console.log(charlie.name);

//    function Animal(){
//      this.name ="Animal";
//    }
//    Animal.prototype.speak = function(){
//     return "blah blah";
//     }
//    function Rabbit(){
//      this.name = "Rabbit";
//    }
//    function Animals(){
//     this.walk =true;
//    }

//    Rabbit.prototype = Animal;
//    let rabbit = new Rabbit();
//    console.log(rabbit.prototype.speak());

//    class Person{
//     // constructor are property of the class in javascript
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     set name(name){
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
//     printName(){
//         console.log("This is "+this.name);
//     }
//    }
//    let p = new Person("Javascript");
//    p.printName();

$(document).ready(function(){
    $('#welcome').click(() => {
        console.log($('#welcome'));
        $('#welcome').innerHTML='Welcome to JQuery';
        console.log($('#welcome'));
    })
});