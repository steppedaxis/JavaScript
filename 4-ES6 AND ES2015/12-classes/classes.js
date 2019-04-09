
//ES5 - FUNCTION CONSTRUCTORS
var PersonES5=function (name,yearbirth,job) {
    this.name=name;
    this.yearbirth=yearbirth
    this.job=job
}

PersonES5.prototype.calcAge=function() {
    var age=new Date().getFullYear()-this.yearbirth
    console.log(age);
}

johnES5=new PersonES5('john',1996,'teacher');
johnES5.calcAge();


//ES6-CLASSES
class PersonES6{
    //in classes,we write constructor like this
    constructor(name,yearbirth,job){
        this.name=name
        this.yearbirth=yearbirth
        this.job=job
    }
    //in ES6 classes, we do not need to write function() before a method
    //and there is no need 
    calcAge(){
        let age=new Date().getFullYear()-this.yearbirth
        console.log(age);
    }
}

johnES6=new PersonES6('john',1998,'teacger');
johnES6.calcAge();
