let firstName='john'
let lastName='smith'
const yearBirth=1990

function calacAge(year) {
    return 2019-year
}

//how to print a string in ES5
console.log('this is '+firstName+" "+lastName+" and he was born at"+yearBirth+" "+"today he is "+calacAge(yearBirth))



//how to print a string in ES6(we can use backtick(` `) and then ${varName})
console.log(`this is ${firstName} and he was born in ${yearBirth} and today he is ${calacAge(yearBirth)} years old`)

const n=`${firstName} ${lastName}`
console.log(n.startsWith('j'))//startsWith() checks if a string starts with the given letter given, and returns true and false
console.log(n.endsWith('th'))//endsWith() checks if a string ends with the given letter given, and returns true and false
console.log(n.includes('oh'))//includes() checks if a given letter or sentence is in the string