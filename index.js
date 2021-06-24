let name= 'Satvik';
const InteresetRate=0.4;
// InteresetRate=1; Error

let age= 24;

let isAdult= true;

let isNull= null;

let person={
    name: 'Satvik',
    age:21
};

// Dot notation
person.age=24;
person.name='Jhon';

// Bracket Notation
person['name']='Mary';

function great(name){
    person.name=name;
    console.log(person)
}
great('Merry');

function great(no){
    return no*no;
}
console.log(great(2));