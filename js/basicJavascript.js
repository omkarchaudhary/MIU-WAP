// Function Declaration, It support hoisted
function max(x, y){
    if(x>y) return x;
    return y;
}
//Function Expression
let maxFunction = function(x, y){
    if(x>y) return x;
    return y;
}
//Anonymous function/Lambda function
let maxAnonymousFunction = (x,y) =>{
    if(x>y) return x;
    return y;
}

function maxOfThree(x,y,z){
    var maxValue;
    if(x>y && x>z){
        maxValue = x;
    } else if(y>x && y>z){
        maxValue = y;
    }
    else{
        maxValue= z;
    }
    return maxValue;
}

function isVowel(letter){
    let vowel = ['a','e','i','o','u'];
    // if(vowel.includes(letter.toLowerCase())){
    //     return true;
    // }
    // return false;
    return vowel.includes(letter.toLowerCase());
}

function sum(array){
    let totalSum = 0;
    for(let x of array){
        totalSum += x;
    }
    return totalSum;
    // totalSum = array.reduce((a,b) =>{
    //     return a+b;
    // })
    // return totalSum;
}
function multiply(array){
    let totalSum = 0;
    // for(let x of array){
    //     totalSum += x;
    // }
    // return totalSum;
    totalSum = array.reduce((a,b) =>{
        return a*b;
    })
    return totalSum;
}
function reverse(string){
 var reverseString="";
 for(let i =string.length-1; i >= 0;i--){
    reverseString += string.charAt(i);
 }
 return reverseString;
}

function findLongestWord(arrayOfWord){
    let maxLength = 0;
    let longestWord;
    for(let word of arrayOfWord){
        if(word.length > maxLength){
            maxLength = word.length;
            longestWord = word;
        }
    }
    return longestWord;
}
function filterLongestWord(arrayOfWord,len){
    return arrayOfWord.filter((x) =>x.length > len);
}

//from fiddle
console.log("Fiddle solution for input a = [1,3,5,3,3]");
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem *10;
})
console.log(b.toString());
const c = a.filter(function(elem, i, array){
  return elem == 3;});
  console.log(c.toString());
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(d.toString());

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    const successMsg = "TEST SUCCEEDED";
    const failedMsg =  "TEST FAILED.  Expected " + expected + " found " + found;
    if (expected === found || expected== found) {
      return successMsg;
    } else {
      return failedMsg;
    }
    console.assert((expected===found || expected===found),{failedMsg});
  }

  
console.log("Expected output of max(10,20) is 20  " + myFunctionTest(20, max(10,20)));
console.log("Expected output of maxOfThree(30,20,10) is 30  " + myFunctionTest(30, maxOfThree(30,20,10)));
console.log("Expected output of isVowel('B') is false  " + myFunctionTest(false, isVowel('B')));
console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24,multiply([1,2,3,4])));
console.log("Expected output of reverse(jag testar) is 20  " + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of findLongestWord([tester,test,testing]) is testing  " + myFunctionTest("testing", findLongestWord(["tester","test","testing"])));
console.log("Expected output of filterLongestWord([tester,test,testing],4) is tester,testing  " + myFunctionTest("tester,testing", filterLongestWord(["tester","test","testing"],4)));