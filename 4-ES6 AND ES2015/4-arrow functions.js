const years=[1990,1965,1982,1937]//an immutable array

//ES5
var agesES5=years.map(function (element) { //map will activate a certin function upon an array, and map(store) the results the function gives into the declared varaible
    return 2019-element
})
console.log(agesES5)



//ES6
let agesES6=years.map(element=>2019-element)
console.log(agesES6)


// if we put 1 line of code in an arrow function, there is no need to use a return statment
agesES6=years.map((element,index)=>`age element ${index+1} : ${2019-element}`)
console.log(agesES6)
console.log('===============')

//// if we put more then 1 line of code in an arrow function, we need to use the return statement
agesES6=years.map((element,index)=>{
    const now=new Date().getFullYear()
    const age=now-element
    return `age element ${index+1} : ${age}`
})
console.log(agesES6)
