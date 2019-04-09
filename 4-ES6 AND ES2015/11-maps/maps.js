//MAPS ARE OBJECT WHICH CONTAINES LITTLE OBJECTS OF A SINGLE KEY AND VALUE EACH
const question=new Map();
//.set() will add new key and value pair to the map
question.set('question','what is the offical name of this course?');
question.set(1,'javascript');
question.set(2,'c#');
question.set(3,'node js');
question.set(4,'python');
question.set('correct',1);
question.set('true','correct answer!');
question.set('false','wrong answer!');

//.get() will get the key provided to it in the ()
console.log(question.get('question'));
//.size() will print the number of key value pairs in the map
console.log(question.size)

//.has() will check if a certin key is present in the map
if (question.has(4)) {
    //.delete() will delete a key and value pair from the map
    question.delete(4);
    console.log('question 4 deleted')
}
//.clear() will delete all key value pairs from the map 
//question.clear();

//iterate threw each key value pair(notice that we write in the () value and then key)
question.forEach((value,key)=>
console.log(`this is a key:${key} and this is the value:${value}`))


for (let [key,value] of question.entries()){
    if (typeof(key)==='number') {
        console.log(`answer: ${key} --> ${value}`)
    }
}

const answ=prompt('write the correct answer');
if (answ==question.get('correct')) {
    console.log(question.get('true'));
}
else{
    console.log(question.get('false'));
}