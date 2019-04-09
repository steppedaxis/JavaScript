
calcAge(1999);// will work as well,since the function is saved in the VO(function delcleration will work like this only) 
function calcAge(year) {
    console.log(2018-year)
}
calcAge(1999);




//retire(1999)//this will not work, as function expressions are not stored in the VO(function expressions will not work like this)
var retire=function(year){
    console.log(65-(2018-year))

}
retire(1999)//function expressions call will need to be only after the function itself


// variabels
console.log(age)//of course will not work(exactly like function expressions) this will return undefined
var age=23

console.log(age)//will print 23
function foo(age) {
    console.log(age)//will print undefined
    var age=65
    console.log(age)//will print 65    
}
foo()
console.log(age)//will print 23
