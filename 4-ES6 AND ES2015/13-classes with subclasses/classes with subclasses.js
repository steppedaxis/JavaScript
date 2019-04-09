//ES5 INHERITANCE - FUNCTION CONSTRUCTORS
var PersonES5=function (name,yearbirth,job) {
    this.name=name;
    this.yearbirth=yearbirth
    this.job=job
}

PersonES5.prototype.calcAge=function() {
    var age=new Date().getFullYear()-this.yearbirth
    console.log(age);
}

//creating a new function costructor(class)
var AthleteES5=function (name,yearbirth,job,olympycgAMES,medals) {
    PersonES5.call(this,name,yearbirth,job)//calling the super class(PersonES5) and its variabels
    
    //defining the classes own-defined variables
    this.olympycgAMES=olympycgAMES
    this.medals=medals
}

AthleteES5.prototype=Object.create(PersonES5.prototype)//after it all, we need to connect both classes prototypes toghter
AthleteES5.prototype.wonMedal=function () {
    this.medals++;
    console.log(this.medals);
}

johnAthleateES5=new AthleteES5('john',1998,'swimmer',3,10)
johnAthleateES5.calcAge();
johnAthleateES5.wonMedal();














//ES6-CLASSES INHERITANCE
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



class AthleteES6 extends PersonES6{ // the 'extends' keyword means that it will inherit from a super class(in that case PersonES6)
    constructor(name,yearbirth,job,olympicGames,Medals) {// in the constructor, we need to repeat the variabels form the super class,and we need to write them exactly the same way, and only then add whatever variabels that we want to add
        super(name,yearbirth,job)// now actually the super() keyword calls the variabels from the super class
        this.olympicGames=olympicGames
        this.Medals=Medals
    }

    Wonmedal(){
        this.Medals++;
        console.log(this.Medals)
    }
}

johnAthleateES6=new AthleteES6('john',1994,'swimmer',3,10)
johnAthleateES6.calcAge();