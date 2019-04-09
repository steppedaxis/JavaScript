//ES5

function isFullAge5() {
    //console.log(arguments)
    var argsArr=Array.prototype.slice.call(arguments);//arguments means that we can input to accept an arbitery(a few) number vairables

    argsArr.forEach(function(current) {
        console.log((2016-current)  >=18)
    });
}

isFullAge5(1998,1999,1965)
isFullAge5(1990,1999,2000,2001)


//ES6

function isFullAge6(...years) {//this is how rest works in ES6
    years.forEach(current =>console.log((2019-current) >=18))
}

isFullAge6(1998,1999,1965);




