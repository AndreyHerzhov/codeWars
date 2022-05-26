/*
 * Sum of differences in array
 */

// сортировка массива чисел от большего к меньшему

// const array = [10,3,2,1]
// const newArry = array.sort((a, b) => b - a); // descending = [...args].sort((a, b) => b - a);
// console.log(newArry)
 

// функция для сортировки массива чисел от большего к меньшему

//  const sortedArray = (arr) => {
//      const newArray = [...arr].sort((a, b) => b - a);
//     return newArray
//  }

// console.log(sortedArray(array))

// функция для добавления разницы через обычнй **for**

// const sumOfDifferences = (arr) => {
//     const newArray = [...arr].sort((a, b) => b - a); 
//     let sum = 0;
//    for (let i = 0; i < newArray.length - 1; i++){
//     sum +=  newArray[i] - newArray[i + 1]  
//    }
//    return sum
//  }


// функция для добавления разницы через обычнй **reduce**

// const sumOfDifferences = (arr) => {
//     const newArray = [...arr].sort((a, b) => b - a); 
//     const total = newArray.reduce((acc, curr, index, array) => {
//     const nextNumber = array[index + 1] // следующее число
//     if(!isNaN(curr - nextNumber)){ // проверка на число, так как в конце index + 1 будет не сушествующее число
//         acc += curr - nextNumber
//     }
//        return acc  ;
//       }, 0);
//       return total
//  }
  

 
/*
 * Sum Array with different bases
 */

// const firstArray = [["101",2], ["10",8]] // 13
// const secondArray = [["ABC",16], ["11",2]] // 2751

// const number = 12
// const str =  number.toString();

// console.log(typeof(str))
// console.log(typeof(number))



/*
 * Volume of a Cuboid
 */

//  const getVolumeOfCuboid =  (length, width, height) => length * width * height
   
  
// console.log(getVolumeOfCuboid(2,2,2)) // 8
// console.log(getVolumeOfCuboid(3,2,2)) // 12 


/*
 * Convert a String to a Number!
 */


// const stringToNumber = function(str){
//     if(str){
//         return parseInt(str) 
//     }
//     return null;
//   }
  
  
// console.log(stringToNumber("1234")) // 1234
// console.log(stringToNumber("605")) // 605
// console.log(stringToNumber("1405")) // 1405
// console.log(stringToNumber("-7")) // -7
 


/*
 * Count of positives / sum of negatives
 */

//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

// function countPositivesSumNegatives(input) {
//     const newArray = []
//     if(input === null) {
//         return newArray;
//       } else if(input === []){
//         return newArray
//       } else if(input.length === 0) {
//         return newArray
//         } else {
//       const positiveNumbers = input.filter(el => el > 0)
//       const negativeNumbers = input.filter(el => el < 0)
//       const numberOfPositiveNumbers = positiveNumbers.length
//       const sumOfNegativs = negativeNumbers.reduce( (previousValue, currentValue) => 
//       previousValue + currentValue, 0);
//       newArray.splice(0,2)
//       newArray.push(numberOfPositiveNumbers,sumOfNegativs)
//       return newArray
//       }
//   }

  // console.log(countPositivesSumNegatives(arrayOfNumbers)) // [10, -65]



/*
 * Return Negative
 */


// function makeNegative(num) {
//   if(num < 0) {
//     return num
//   } else {
//     return num = -num
//   }
// }

// console.log(makeNegative(2))
  



/*
 * To square(root) or not to square(root)
 */

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

// const array = [4,3,9,7,2,1]

// function squareOrSquareRoot(array) {
//   const newArray = []
//   array.map(el =>  {
//     if(Number.isInteger(Math.sqrt(el))) {
//       return newArray.push(Math.sqrt(el))
//     }else {
//       return newArray.push(Math.pow(el, 2))
//     }
//   })
//   return newArray
// }   

// console.log(squareOrSquareRoot(array)) // [2, 9, 3, 49, 4, 1]



/*
 * Convert a string to an array
 */

// const string = "Robin Singh";

// function stringToArray(string){
//   return string.split(' ')

// }
// console.log(stringToArray(string))



/*
 * I love you, a little , a lot, passionately ... not at all
 */

const arrayOfPhrases = ["I love you","a little","a lot", "passionately", "madly", "not at all"];

// ----------- 1 variant 
function howMuchILoveYou(nbPetals) {
  return arrayOfPhrases[(nbPetals - 1) % arrayOfPhrases.length]
}

// ---------- 2 variant 
function howMuchILoveYou(nbPetals) {
  if(nbPetals > 0 && nbPetals <= 6) {
    const phrase = arrayOfPhrases[nbPetals - 1]
   return phrase
  } else if(nbPetals >= 7){
    const newPhrase = arrayOfPhrases[nbPetals - 7]
    return newPhrase
  }
}

howMuchILoveYou(7) // 0
howMuchILoveYou(3) // 2
howMuchILoveYou(6) // 5



// console.log(arrayOfPhrases.length) // 6
// console.log( 10 % 1) // 0
// console.log( 10 % 2) // 0
// console.log( 10 % 3) // 1
// console.log( 10 % 4) // 2
// console.log( 10 % 5) // 0
// console.log( 10 % 6) // 4
// console.log( 10 % 7) // 3
// console.log( 10 % 8) // 2
// console.log( 10 % 9) // 1 
// console.log( 10 % 10) // 0

// console.log('0 % 6-',  0 % 6) // 1
// console.log('1 % 6-',  1 % 6) // 1
// console.log('2 % 6-',  2 % 6) // 2
// console.log('3 % 6-',  3 % 6) // 3
// console.log('4 % 6-',  4 % 6) // 4
// console.log('5 % 6-',  5 % 6) // 5
// console.log('6 % 6-',  6 % 6) // 0
// console.log('7 % 6-',  7 % 6) // 1
// console.log('8 % 6-',  8 % 6) // 2
// console.log('9 % 6-',  9 % 6) // 3
// console.log('10 % 6-', 10 % 6) // 4



 


 
