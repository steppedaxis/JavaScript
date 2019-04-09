
//IN ES5
var box5={
    color:'green',
    postion:1,
    ClickMe:function () {//this function points to the box5 object 
        var self=this //to allow the event handler to access the varaibles in the box5 object,we need to hack the access method by declaring a variable(in this case the 'self' variable)and inserting into him the 'this' keyword 
        document.querySelector('.green').addEventListener('click',function() { //this function points and is part of the window object(because that it is an event handler)
            var str='this is box number '+self.postion+' and it is '+self.color
            //using 'this' keyword in this function call will not work since it points to the window object,and not the box5 object
            alert(str)
        })
    }
}

//box5.ClickMe();


//IN ES6
const box6={
    color:'green',
    postion:1,
    ClickMe:function () {//this function points to the box6 object 
        document.querySelector('.green').addEventListener('click',() => { //by using arrow function () => we can make the this keyword as a part of the box6 object
            var str='this is box number '+this.postion+' and it is '+this.color
            alert(str)
        })
    }
}

box6.ClickMe();

//ES5
function Person(name) {
    this.name=name
}
Person.prototype.myFriendsES5=function (friendsArr) {
    var arr=friendsArr.map(function (element) {
        return this.name+' is friedns with '+element
    }.bind(this))
    console.log(arr)
}

var friends=['bob','jane','mark']


//ES6

Person.prototype.myFriendsES6=function (friendsArr) {
    var arr=friendsArr.map( (element) => {
        return `${this.name} is friends with ${element}`
    })
    console.log(arr)
}

var friends=['bob','jane','mark']
john=new Person('john').myFriendsES5(friends)
mark=new Person('mark').myFriendsES6(friends)