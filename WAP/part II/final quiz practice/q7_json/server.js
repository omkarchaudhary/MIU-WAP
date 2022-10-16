let obj= '{"cpu": "intel","Ram": "16Gb"}'

// let str= '["here", "we", "are"]';
let myObj= JSON.parse(obj);
console.log(myObj.cpu)

let obj2= [{"cpu": "intel","Ram": "16Gb"}]

// let str= '["here", "we", "are"]';
let myObj2= JSON.stringify(obj);
console.log(myObj2)
