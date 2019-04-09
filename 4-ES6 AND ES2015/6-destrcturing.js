
//how to destructing works in ES5
var john=['john',26];
var name=john[0];
var age=john[1];

//how to destructing works in ES6
const [name1,age1]=['john',26];
console.log(name1)
console.log(age1)

const obj={
    firstName:'john',
    lastName:'smith'
};

const {firstName,lastName}=obj;
console.log(firstName)
console.log(lastName)

const {firstName:a, lastName:b}=obj;
console.log(a);
console.log(b);


//how to destructe a returned values from a function
function calcAgeRetire(year) {
    const age2=new Date().getFullYear()-year;
    return [age2,65-age2]
}

const [age2,retire]=calcAgeRetire(1996);
console.log(age2)
console.log(retire)



