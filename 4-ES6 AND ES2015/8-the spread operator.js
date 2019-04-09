function addFourAges(a,b,c,d) {
    return a+b+c+d
}

var sum1=addFourAges(18,30,12,21);
console.log(sum1);


//ES5
var ages=[18,30,12,21];
var sum2=addFourAges.apply(null,ages)//i put null becuase that it expects a this keyword,and since we dont really need it now ,we put null in it
console.log(sum2)

//ES6
const sum3=addFourAges(...ages);
console.log(sum3);



//combining two arrays using ... in ES6
const smithFamily=['john','jane','mark'];
const millerFamily=['mary','bob','ann'];
const bothFamilys=[...smithFamily, 'lily' , ...millerFamily];
console.log(bothFamilys);


const heading=document.querySelector('h1');
const boxes=document.querySelectorAll('.box');
const all=[heading, ...boxes];

Array.from(all).forEach(current => current.style.color='purple');
