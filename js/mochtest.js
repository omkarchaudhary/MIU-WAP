function sum(array){
    let totalSum = 0;
    totalSum = array.reduce((a,b) =>{
        return a+b;
    })
    return totalSum;
}
function multiply(array){
    let totalSum = 0;
    totalSum = array.reduce((a,b) =>{
        return a*b;
    })
    return totalSum;
}
function reverse(string){
 let reverseString="";
 let stringArray = string.split('');
 stringArray.map((str) =>{
    reverseString = str+ reverseString;
 })
 return reverseString;
 
}

function filterLongestWord(arrayOfWord,len){
    return arrayOfWord.filter((x) =>x.length > len);
}
let str = ["javascript","java","script"];
let result = filterLongestWord(str,8);
console.log(result);

describe("Functional Programming", function(){
    it("should return sum of an array", function(){
        let arr = [1,2,3,4,5];
        assert.equal(sum(arr),15);
    });

    it("should return product of an array", function(){
        let arr = [1,2,3,4];
        assert.equal(multiply(arr),24);
    })
    it("should return reverse of a string", function(){
        let str = "javascript";
        assert.equal(reverse(str),"tpircsavaj");
    })
    it("should return longest word of a string array", function(){
        let str = ["javascript","java","script"];
        assert.equal(filterLongestWord(str,8),"javascript");
    })
})