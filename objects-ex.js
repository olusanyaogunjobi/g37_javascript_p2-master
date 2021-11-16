// JS object is an entity with state and behavior
// Anonymous object
const calcultor = {}; // has no refrence

// An Object is a collection of properties
const myCalculator = {
 num1: 10,
 num2: 20,
 sum: function(){
     let num1= 100;
     return this.num1 + this.num2;
 }
};

console.log(myCalculator);
const addition = myCalculator.sum();
console.log(addition);


const volvoCar = { name: 'Volvo', model: 'V60' , year: 2020 };
const bmwCar = { name: 'BMW', model: 'X6' , year: 2020 };

console.log(volvoCar.name);
console.log(volvoCar["name"]);

// delete property
delete volvoCar.model;
//delete volvoCar["model"];

console.log(volvoCar);

// mini project
// CRUD DEMO FOR PERSON OBJECT
const personList = [];

function createPerson(){
    const id = Math.floor(Math.random()* 1000000);
    const name = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;
    const newPerson = {id, name, birthday};
    personList.push(newPerson);

    

};

const printPersons = () => {
    console.log(personList);
};

const findPersonByName = (name) => {
    const result = personList.filter( personObj => personObj.name === name ); 
    // === will compare the value and value type
    // == will compare only the value
    return result;
};


const updatePerson = (person) => {
    // find person index
    const foundIndex = personList.findIndex( p => p.firstName === person.firstName);
    // replace with existing obj
    console.log(foundIndex);
    personList[foundIndex] = person;
};



const newUpdatePerson = (person) => {
    // find person index
    const foundIndex = personList.findIndex( p => p.firstName === person.firstName);
    if(foundIndex === -1){
        throw "Person Name dose not exist from the list";
    }
    // replace with existing obj
    personList[foundIndex] = person;
};



const person1 = {
    id: 1, 
    firstName: 'Mehrdad',
    lastName: 'Javan', 
    email: 'mehrdad.javan@lexicon.se',
    title: 'Teacher' 
};
console.log("CreatePerson");
console.log(createPerson(person1));
console.log("----------------");
printPersons();

const person2 = {
    firstName: 'Simon',
    lastName: 'Elbrink', 
    email: 'simon.elbrink@lexicon.se',
    title: 'Teacher' 
};
console.log("CreatePerson");
console.log(createPerson(person2));
console.log("----------------");
printPersons();


const person3 = {
    firstName: 'ABC',
    lastName: 'Elbrink2', 
    email: 'simon2.elbrink@lexicon.se',
    title: 'Teacher2',
    id: 123456 
};

//updatePerson(person3);
try{
    newUpdatePerson(person3);
}catch(error){
    console.log(error);
}

printPersons();
