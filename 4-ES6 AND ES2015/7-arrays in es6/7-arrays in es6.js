
const boxes=document.querySelectorAll('.box')//make a const variable as the selector of all the '.box' class elements in the html page

//ES5
var boxesArrES5=Array.prototype.slice.call(boxes)//put into an array all the '.box' class elements in the html page,the es5 way

boxesArrES5.forEach(function(cur) {//the foreach loop would activate a function for each element it iterates with
    cur.style.backgroundColor='green'
});


//ES6
const boxesArrES6=Array.from(boxes);//put into an array all the '.box' class elements in the html page,the es6 way
boxesArrES6.forEach(cur=>cur.style.backgroundColor='dodgerblue');


//ES5
for(var i=0;i<boxesArrES5.length;i++){
    if (boxesArrES5[i].className==='box blue') {
        continue;
    }
    boxesArrES5[i].textContent='i changed to blue!';
}

//ES6
//in es6 we have a for loop called for of
for(const element of boxesArrES6){
    if (element.className.includes('blue')) {
        continue;
    }
    element.textContent='i changed to blue!';
}



//ES5
var ages=[12,17,8,21,14,11];

var fullAge=ages.map(function (current) {
    return current>=18;
})
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);


//ES6
console.log(ages.findIndex(current => current>=18))
console.log(ages.find(current => current>=18))

