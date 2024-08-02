//q1. Write a function that takes an object and returns an array of the object's keys and values.
function getEntries(obj){ // creating a function that takes an object
    var entries =[];// an empty array is being declared
    for (var key in obj){ // using for loop to iterate
        entries.push([key, obj[key]]);//appending a new element at end of array
    }
    return entries; //returning th values
}
var exampleObject ={ name:'Shivangi', age:18};//writing an object wtih key and value
console.log(getEntries(exampleObject));// printing the output
  



//q2.Create a function to convert a string to title case.
function toTitleCase(String) { //creating a function
    const Words = String.split(' ')// splits the input string into an array of based on spaces
    const TitleWord = Words.map(Words => Words[0].toUpperCase()+Words.slice(1))     //map(): used to iterate each word over and over, slice(): used to remove the selected index character
    return (TitleWord.join(' '))            // returns the array we declared earlier
}
const inputString = 'shivangi upadhyay';// declairing a variable 
console.log(`"${inputString}" becomes "${toTitleCase(inputString)}"`)// printing the output 




//q3. Implement a function that checks if an object is empty.
function isObjectEmpty(obj){ //writing a function
    return Object.keys(obj).length ===0;// if the length of the object is = 0 then it will return true

}
const emptyObject ={};// creating an empty object
const nonEmptyObject = {key : 'value'};// creating an object with key and value pair
console.log(isObjectEmpty(emptyObject));//calling the  function and printing the output 
console.log(isObjectEmpty(nonEmptyObject));//calling the function and printing the output



//q4.Write a function to count the number of occurrences of each character in a string.
function countOccurances(str){// creating a function
    const charCount={};// keeping the object zero
    for(const char of str){// using for loop to iterate
        charCount[char] = (charCount[char]|| 0) + 1; //keeping a count of string
       }
       return charCount;
}
const input ='hello welcome everybody'; //declaring a variable
const result = countOccurances(input);// storing the variable in another variable

for(const char in result){ // using for loop to iterate
    console.log(`${char} = ${result[char]}`);// printing the output
}
