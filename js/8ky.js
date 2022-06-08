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

// const arrayOfPhrases = ["I love you","a little","a lot", "passionately", "madly", "not at all"];

// ----------- 1 variant 
// function howMuchILoveYou(nbPetals) {
//   return arrayOfPhrases[(nbPetals - 1) % arrayOfPhrases.length]
// }

// ---------- 2 variant 
// function howMuchILoveYou(nbPetals) {
//   if(nbPetals > 0 && nbPetals <= 6) {
//     const phrase = arrayOfPhrases[nbPetals - 1]
//    return phrase
//   } else if(nbPetals >= 7){
//     const newPhrase = arrayOfPhrases[nbPetals - 7]
//     return newPhrase
//   }
// }

// howMuchILoveYou(7) // 0
// howMuchILoveYou(3) // 2
// howMuchILoveYou(6) // 5



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


/*
 * Freudian translator
 */

// const string = "This is a test"
// const longerString = "This is a longer test"
// const empty = "  "



// function toFreud(string) {
//   const arrayOfWords = string.split(' ')
//   const stringOfWords = string.split(' ').join('')
//   const numberOfWords = stringOfWords.length
//   if(numberOfWords === 0) {
//     return ''
//   } else {
//     const result = arrayOfWords.map(el => el = 'sex')
//     return result;
//   }
   
// }
  
// console.log(toFreud(string))
// console.log(toFreud(longerString))
// console.log(toFreud(empty))


/*
 * What is between?
 */
 
// a = 1
// b = 4
// --> [1, 2, 3, 4]

 

// function between(a, b) {
//   let array = []
//   for (let i = a; i <= b; i += 1) {
//     array.push(i)
//   }
//  return array
// }

// console.log(between(1,4))



/*
 * Check same case
 */


// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


// function sameCase(a, b){
//   if (typeof a !== 'string' || typeof b !== 'string'){
//     return -1;
//   } else if(a.toLowerCase() === a &&  b.toLowerCase()  === b) {
//     return 1
//   }
//   else if(a.toUpperCase() === a &&  b.toUpperCase()  === b) {
//     return 1
//   } else {
//     return 0
//   }
// }

// console.log(sameCase('A', '0'))
// console.log(sameCase(1, 'S'))
// console.log(sameCase('A', 'b'))


// function checkForString(a,b) {
//   if (typeof a !== 'string' || typeof b !== 'string'){
//         return '-1';
//       } else if(typeof a === 'string' && typeof b === 'string') {
//         return 'Both strings'
//       }
// }

// console.log(checkForString(1, 'd'))
// console.log(checkForString(1, 2))
// console.log(checkForString('1', 'd'))



// function sameCase (a,b) {
//   if (!(/[a-zA-Z]/).test(a) || !(/[a-zA-Z]/).test(b)){
//     return -1;
//   } else if((/[A-Z]/).test(a) && (/[A-Z]/).test(b)){
//     return 1
//   } else if((/[a-z]/).test(a)  && (/[a-z]/).test(b)) {
//     return 1
//   } else {
//     return 0
//   }
// }

// console.log(sameCase('a', 'b')) // 1
// console.log(sameCase('A', 'C')) // 1
// console.log(sameCase('b', 'G')) // 0
// console.log(sameCase('B', 'B')) // 1
// console.log(sameCase(0, '?')) // -1
 

// console.log((/[a-zA-Z]/).test('A'))
// console.log((/[a-zA-Z]/).test('b'))
// console.log((/[a-zA-Z]/).test(1))


/*
 *  How much water do I need?
 */

// My washing machine is an old model that can only handle double the amount of load (or max_load). 
// If the amount of clothes is more than 2 times the standard amount of load (max_load),
//  return 'Too much clothes'. 
// The washing machine also cannot handle any amount of clothes less than load (max_load). 
// If that is the case, return 'Not enough clothes'.

// function howMuchWater(water, load, clothes){
//    if(clothes > load * 2){
//      return 'Too much clothes'
//    } else if(clothes < load) {
//      return 'Not enough clothes'
//    } else {
//      const result =   water * Math.pow(1.1, clothes - load) 
//      const resultToFixed = result.toFixed(2) // add + before
//      return resultToFixed
//    }
   
// } 




// console.log(howMuchWater(10,10,21))
// console.log(howMuchWater(10,10,2))
// console.log(howMuchWater(10,11,20))
// console.log(typeof (howMuchWater(50,15,29))) // string

 

/*
 *  Convert a Boolean to a String
 */


// function booleanToString(b){
//   return b.toString()
// }

// console.log(booleanToString(true))


/*
 *  Define a card suit
 */

// function defineSuit(card) {
//   if(card.endsWith('♣')) {
//     return 'clubs'
//   } else if(card.endsWith('♦')) {
//     return 'diamonds'
//   }else if(card.endsWith('♥')) {
//     return 'hearts'
//   }else if(card.endsWith('♠')) {
//     return 'spades'
//   } else if(card === '') {
//     return 'Empty'
//   }
// }

// const clubs = '3♣'
// const diamonds = '3♦'
// const hearts = '3♥'
// const spades = '3♠'

// console.log(defineSuit(clubs)); 
// console.log(defineSuit(diamonds)); 
// console.log(defineSuit(hearts)); 
// console.log(defineSuit(spades)); 
// console.log(defineSuit('')); 


/*
 *  Fundamentals: Return
 */
 

// function add(a,b){
//   return  a + b
// }

// function divide(a,b){
//   return a/b
// }

// function multiply(a,b){
//   return a*b
// }

// function mod(a,b){
//   return a % b
// }
 
// function exponent(a,b){
//   return a ** b
// }
  
// function subt(a,b){
//   return a - b
// }



/*
 * Enumerable Magic #20 - Cascading Subsets
 */



// const lst = [3, 5, 8, 13];

// -------- 1-st varian 'for' -------- // 

// function eachCons(array, n) {
//   let numbers = []
  
//   for (let i = 0; i < array.length; i += 1) {
//       if(i + n > array.length) {
//         continue
//       } else {
//         numbers.push(array.slice(i, i + n))
//       }
      
//   }
//   return numbers
// }

 
//  console.log(eachCons(lst,1))
//  console.log(eachCons(lst,2))
//  console.log(eachCons(lst,3))
 


 // -------- 2-nd varian 'reduce' -------- // 

// function eachCons(array, n) {
//   return array.reduce(
//     (acc, elem, i) =>  (i + n <= array.length)
//   ? [...acc, array.slice(i, i + n)]
//   : [...acc],
//  [],
//  );
// }
// console.log(eachCons(lst,3))



/*
 * Even or Odd
 */


// function even_or_odd(number) {
//   if(number % 2 === 0){
//     return 'Even';
//   } else {
//     return 'Odd';
//   }
// }


// even_or_odd(2)
// even_or_odd(3)



/*
 * Holiday VI - Shark Pontoon
 */

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
// sharkSpeed = how fast it can move in metres/second.
// pontoonDistance = how far you need to swim to safety in metres.
// youSpeed = how fast you can swim in metres/second.
// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
// The pontoon, you, and the shark are all aligned in one dimension.
// If you make it, return "Alive!", if not, return "Shark Bait!".

// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//         let myTime = 0;
//         let sharkTime = 0;
//         myTime = pontoonDistance/youSpeed
//         sharkTime = sharkDistance/sharkSpeed
//          if(myTime < sharkTime) {
//            return "Alive!"
//          } else if(dolphin && myTime/2 < sharkTime) {
//           return "Alive!"
//          } else {
//          return "Shark Bait!"
//          }
// }


// console.log(shark(12, 50, 4, 8, true))
// console.log(shark(7, 55, 4, 16, true))
// console.log(shark(24, 0, 4, 8, true))
 

/*
 * Convert number to reversed array of digits
 */

// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// const numbers = 348597
 
// function digitize(n) {
//   const array = n.toString().split('').map(el => parseInt(el)).reverse()
//   return array
// }

// console.log(digitize(numbers))



/*
 * Name on billboard
 */

// You can print your name on a billboard ad. 
// Find out how much it will cost you. 
// Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 
// (Space counts as a letter).


// const nameToCalculate = 'Jeong-Ho Aristotelis'


// ------------- 1-st varian "for" ------------ //

// function billboard(name, price = 30){
//   let finalPrice = 0
//   const array = name.split('')
//   const arrayLength = array.length
//   for(let i = 0; i < arrayLength; i += 1){
//     finalPrice += price
//   }
//   return  finalPrice
// } 
 

// console.log(billboard(nameToCalculate))

 
// ------------- 2-st varian "reduce" ------------ //

// function billboard(name, price = 30){
  
//   return  name.split('').reduce((acc) => acc + price,0)
// } 


// console.log(billboard(nameToCalculate))




/*
 * Cat years, Dog years
 */


// let humanYearsCatYearsDogYears = function(humanYears) {
//   if(humanYears === 1){
//   const humanYearsConverted =  humanYears
//   const catYears = humanYears * 15
//   const dogYears = humanYears * 15
//   return [humanYearsConverted,catYears,dogYears];
//   } else if(humanYears === 2){
//     const humanYearsConverted =  humanYears
//     const catYears = 24
//     const dogYears = 24
//     return [humanYearsConverted,catYears,dogYears];
//   } else if(humanYears > 2) {
//     const humanYearsConverted =  humanYears
//     const catYears = 24 + (humanYears - 2) * 4
//     const dogYears = 24 + (humanYears - 2) * 5
//     return [humanYearsConverted,catYears,dogYears];
//   }
  
// }

//  console.log(humanYearsCatYearsDogYears(1))
//  console.log(humanYearsCatYearsDogYears(2))
//  console.log(humanYearsCatYearsDogYears(10))

 


// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


/*
 * Plural
 */


// function plural(n) {
//   if(n >= 0 && n < 1){
//     return true
//   } else if(n === 1) {
//     return false
//   } else if(n > 1) {
//     return true
//   }else if(n === Infinity) {
//     return true
//   }
  
// }

// console.log(plural(0))
// console.log(plural(0.5))
// console.log(plural(1))
// console.log(plural(100))
// console.log(plural(Infinity))

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(plural(0), true, "Plural for 0");
// Test.assertEquals(plural(0.5), true, "Plural for 0.5");
// Test.assertEquals(plural(1), false, "Plural for 1");
// Test.assertEquals(plural(100), true, "Plural for 100");
// Test.assertEquals(plural(Infinity), true, "Plural for Infinity");

//   });
// });


/*
 * CSV representation of array
 */

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

//     const array = [[ 0, 1, 2, 3, 4 ],
//         [ 10,11,12,13,14 ],
//         [ 20,21,22,23,24 ],
//         [ 30,31,32,33,34 ]] 

// function toCsvText(array) {
   
//   return array.join('\n')  
// }


// console.log(toCsvText(array))



/*
 * FIXME: Replace all dots
 */

// const replaceDots = function(str) {
//   if(str === undefined || str === null) {
//     return 'Sorry, try again :-(")'
//   } else {
//     return str.replace(/[.]/g, '-')
//   }
  
// }

// console.log(replaceDots("one.one.one"))


/*
 *  Name Shuffler
 */

// const nameToChange1 = "Miguel O'Reily"
// const nameToChange2 = "Vernon O'Reily"
// const nameToChange3 = "Ryan O'Reily"

   

// function nameShuffler(str){
//   const re = /(\w+)\s(\w+)/;
  
//  return  str.replace(/^([^\s]+)(\s+)([^\s]+)/, '$3$2$1')
   
  
// }

// console.log(nameShuffler(nameToChange1))
// console.log(nameShuffler(nameToChange2))
// console.log(nameShuffler(nameToChange3))
 

 /*
 *  Double Char
 */


//  const string = "String"
//  const phrase = "Hello World"
//  const numbers = "1234!_ " 
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// function doubleChar(str) {
//    const array = str.split('')
//    const newArray = array.map(el => el + el)
//     return newArray.join('')
// }


// console.log(doubleChar(string))



 /*
  * Grasshopper - Debug sayHello
  */


//  function sayHello(name) {
//   return `Hello, ${name}`
// }

// console.log(sayHello('Mr. Spock'))



 /*
  * Square(n) Sum
  */

//  function squareSum(numbers){
//   return numbers.reduce((acc, currVal, i, arr) => acc + Math.pow(currVal, 2), 0)
// }

// console.log(squareSum([0, 3, 4, 5]))

 /*
  * Fake Binary
  */

 const numbers = '45385593107843568'

 function fakeBin(x){
    const newArray = x.split('')
    for(let i = 0; i < newArray.length; i += 1){
      if(newArray[i] < 5) {
        newArray[i] = 0
      } else {
        newArray[i] = 1
      }
    }
    return newArray.join('')
}

console.log(fakeBin(numbers))


// const arr = numbers.split('')
// console.log(arr.filter(el => el < 5))


