//Write a function that takes an array of numbers as input and returns the sum of all the elements in the array.
function addition(numbers){
    return numbers.reduce((acc,curr)=>acc + curr,0)
}
const numbers = [2,5,9,12,40]
console.log(addition(numbers));



//Write a function that takes a string as input and returns the string reversed.

function reverseString(sentence) {
    return sentence.split('').reverse().join('');
}
let sentence = "my name is morin"
console.log(reverseString(sentence))

//Write a function that takes an array of numbers as input and returns the smallest number in the array.
function findShortestNumber(number){
    return Math.min(...numbers);
}
let number = [2,5,9,7,3,2,1];
console.log(findShortestNumber(number))

//Write a function that takes an array of numbers as input and returns a new array with all duplicate values removed.
function removeDuplicates(num){
    let b = [...new set(num)];
    return b
}
let num = [1,3,7,9,2,8,9,65,4,3]
console.log(removeDuplicates(num))

