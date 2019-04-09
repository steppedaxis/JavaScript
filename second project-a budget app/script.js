//this IIFE function will control all things realating to the budget calculations
var BudgetController=(function() {
       
       
       //this function costrutor will make expense objects
       var Expense=function (id,description,value) {
              this.id=id
              this.description=description
              this.value=value
       };
       
       //this function costrutor will make income objects
       var Income=function (id,description,value) {
              this.id=id
              this.description=description
              this.value=value
       };
       
       //this is our data structure, which containes the arrays who will contain the Expenese objects and the Income objects that we will create
       var data={
              allItems:{
                     exp:[],
                     inc:[]
              },
              // the totals object will contain the number of each income and expenses objects
              totals:{
                     exp:0,
                     inc:0
              }
       }
       
       
       return{
              //the addItem function here is public, and its role is to create a new Expense or Income object, according to the type the user selects in the UI(+ or -)
          addItem:function (type,desc,val) {
              var newItem,ID
              //the ID variable is a unique number that we want to assign to each new object that is being sent to the income or expenses arrays
              if (data.allItems[type].length>0) {
                     ID=data.allItems[type][data.allItems[type].length-1].id+1;
              }
              else{
                     // since that the first time we run the app, there is no object at any array yet,we need to zero the ID, if we wont then we will recieve an error stating that ID is not defined
                     ID=0
              }
              
              //create a new object based on the type of 'inc' or 'exp' type
              if (type==='exp') {
                     newItem = new Expense(ID,desc,val)
              }
              else if (type==='inc'){
                     newItem = new Income(ID,desc,val)
              }

              // this line of code will add the item that was created to the matching array at allItems, 
              //the [type] refers to the array that the user selectes(meaning whether he selected the +(inc) or -(exp))
              data.allItems[type].push(newItem);
              //return the item that was created so that other modules and functions may access it if needed
              return newItem;
          }
           
          

       }
    
   
})()









//this will controll the app's ui
var UIcontroller=(function() {
      
       // to overcome the need to change the query selector strings(to accesses the DOM elements in html) if need or want to, 
       //we can make an object that will store these strings, and change them when neccesry,
       //instead of going over every querySelector and changing its value over and over agian
       var DOMstrings={
              inputType:'.add__type',//each object contains the defined class name for each button or field
              inputDescription:'.add__description',
              inputValue:'.add__value',
              inputButton:'.add__btn'
       }

     
              
       
               
              
       
    
    
    
     return{
        //creating a function that will return the input that the user enters as an object and making it public
         getInput:function() {
              return{
                     type:document.querySelector(DOMstrings.inputType).value, // will be either inc(+) or expense(-)
                     description:document.querySelector(DOMstrings.inputDescription).value,
                     value:document.querySelector(DOMstrings.inputValue).value  
              }
         },
       //creating a function that will return th DOMstrings object and making it public,so that other modules may use it
         getDOMstrings:function() {
              return DOMstrings
        },
        
         // this function will add the object to the list in the UI, it gets the object itself and then its type,so that it will know on which column to add it to in the UI
         addListItem:function (obj,type) {
                
         }

     }




})()










//this conrolles what happens upon each event,and links between the UIcontroller module and the Budgetcontroller module,that is why it gets to access both modules
var AppController=(function(BUDGET,UI) { // the two parameters i gave in the function here represent var's that can make the app module accesses the budget controller and ui modules
       //this function will hold all event listeners
       var SetupEventListners= function() {
              var DOM=UIcontroller.getDOMstrings();

              //this function will add item description,whether the user want to increase to decrease the budget and the value when the user presses the button next to the value field
              document.querySelector(DOM.inputButton).addEventListener('click',CtrlAddItem);

    
              //we want a function with an event listner that will add an item to the ui when enter is pressed, we do it with the 'keypress' event 
              document.addEventListener('keypress',function (event) {
                     if (event.keyCode===13) {
                            AddItem()
                      }
              })
       }
    
       //we have this function to do a bunch of stuff toghter
       var CtrlAddItem=function(){
       //1.get the field input data and insert the object that returned from the getInput function from the UIcontroller module into the input variable
       var input=UIcontroller.getInput()
       //2.add the item created at the BudgetController module to the matching array,using the AddItem function from the BudgetController module,and store that same item in the newItem variable
       var newItem=BudgetController.addItem(input.type,input.description,input.value);
       //3.add the item to the ui
       
       //4.calculate the budget
       
       //5.display the budget

    }

    
    
    

     return{
            init:function () {
                   console.log('application has started');
                   SetupEventListners();
            }
           
     }




})(BudgetController,UIcontroller) // this is how modules inherit and can accesses other modules


AppController.init();
