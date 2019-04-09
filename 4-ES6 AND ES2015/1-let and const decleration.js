//DECLARING IN ES5
var nameES5='jane smith'
var ageES5=23
nameES5='jane muller'
console.log(nameES5);
// as we already know, var will let us mutate and change the value


//DECLARING IN ES6
//const will leave the value in the varibable as is, and will never change
const nameES6='jane smith'
//let gives us the option of changing the value
let ageES6=23
//nameES6='jane miller' //this will give an error,since a const variable is immutable

//const and let are block scoped
//var is function scoped

//WRITING A FUMCTION ES5
function DriversLicense(passedTest) {
    if (passedTest===true) {
        var firstName='john'
        var yearBirth=1998

    }
    console.log(firstName+" "+yearBirth+" now has a licenes")
    // this will work, because that var works in a function scope, and will not work if called outside the function scope

}
console.log(firstName+" "+yearBirth+" now has a licenes")
//this will not

DriversLicense(true)


//WRITING A FUMCTION ES6
function DriversLicense(passedTest) {
    let firstName
    if (passedTest===true) {
        firstName='john'
        const yearBirth=1998

    }
    console.log(firstName+" "+yearBirth+" now has a licenes")
    //because that let and const are only valid and accessable in the same block they are created at, we would get an error
}

DriversLicense(true)

