    
    //1 Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

    function max(a,b){
        if(a>b)
        return a;
        else
        return b;
    }

    console.log(max(2,3));
    //2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

    function largest(a,b,c){
    if (a>b && a>c) 
        return a;
    else if (b>a && b>c)
        return b;
    else
    return c;
    }
    console.log(largest(1,4,9));

    //3 Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

    function isVowel(ch){
        if(ch=='a'|| ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'){
        return true;
        }
        else
        return false;
    }
    console.log(isVowel('u'));

    //4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // function sum(arr=[]){
    // return arr.reduce((a,b)=>a+b,0);
    // }
    // console.log(sum([1,2,3,4]));

    //sum
    function sum(array){
        let result=0;
        for(let i=0; i<array.length; i++){
    result+=array[i];
        }
        return result;
    }
    console.log(sum([1,2,3,4]));

    //multiply
    function mul(array){
        let prod=1;
        for(let i=0; i<array.length; i++){
    prod*=array[i];
        }
        return prod;
    }
    console.log(mul([1,2,3,4]));

    //5 Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

    function reverse(arr){
        let s='';
    for(let i=arr.length-1; i>=0; i--)
    s+=arr[i];
    return s;
    }
    console.log(reverse("mahi"));

    //6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

    function findLongestWord(arr=[]){
        let max=arr[0].length;
        let count=0;
    for(let i=1; i<arr.length; i++){
            if(arr[i].length>max){
                count=i;
                max=arr[i].length;
            }
    }
    return max; 
        }

    console.log(findLongestWord(["hi","hola","hello","bonjour"]));

    //7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.


    function filterLongWords(arr, n){
        let newArr = [];
        arr.forEach(value => {
    
        if(value.length > n){
        newArr.push(value);
        }
        });
        return newArr;
    }

    console.log(filterLongWords(["hi","hola","hello","bonjour"],4));

//     Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

// a) multiply each element by 10; 

// b) return array with all elements equal to 3; 

// c) return the product of all elements;

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem !== 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);



//anonymos
(function(){
    console.log("this is anonymos function")
})


 //shortest,
function shortest(arr=[]){
        let min=arr[0];
        let count=0;
    for(let i=1; i<arr.length; i++){
            if(arr[i].length<min.length){
                count=i;
                min=arr[i];
            }
    } 
    return min; 
        }
    console.log(shortest(["hello","z","bye"]));

    



