
//ES5
function SmithPerson(firstName,yearOfBirth,lastName,nationality) {
    //declaring a default varaible in case that we dont define a value when creating an instance of the class
    if (lastName===undefined) {
       lastName='smith'
   }
   if (nationality===undefined) {
       nationality='american'
   }
    
    this.firstName=firstName
    this.yearOfBirth=yearOfBirth
    this.lastName=lastName
    this.nationality=nationality
}
var john=new SmithPerson('john',1998);
var emily=new SmithPerson('emily',1983,'Diaz','spanish')



//ES6
function SmithPerson(firstName,yearOfBirth,lastName='smith',nationality='american') {
    this.firstName=firstName
    this.yearOfBirth=yearOfBirth
    this.lastName=lastName
    this.nationality=nationality
}

var john=new SmithPerson('john',1998);
var emily=new SmithPerson('emily',1983,'Diaz','spanish')