

let myArray=[1,2,3,4];
let sum= myArray.reduce((a,b) => a+b);
console.log(sum); //10

let multiply= myArray.reduce((a,b) => a*b);
console.log(multiply); //10


let mystr="hello";
let reversed= [...mystr].reverse().join("");
console.log(reversed); //"olleh"



function filterLongWords(arr, n){
    let newArr = [];
    arr.forEach(value => {

    if(value.length > n){
    newArr.push(value);
    }
    });
    return newArr;
}
console.log(filterLongWords(["hi", "hello","hola"],2)); 

// let myArr=["hi", "hello","hola"];
// let n=2;
// let newArr=[];
// let filterLongWords2= (myArr,n) => 




