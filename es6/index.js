// * Default Params

// ! before
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

// * es6
function newFunction2(name = 'oscar', age = 23, country = 'MX') {
    console.log(name, age, country);
}

newFunction();
newFunction2();

// --------------------------------------------------------------

// * Concatenacion de Strings con ✨Template Literals✨

let hello = 'Hello';
let world = 'World';

// ! before
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// * es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// --------------------------------------------------------------

// * Multilinea

// ! before
let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
    'Quisquam, quidem. Nam, quisquam.';
console.log(lorem);

// * es6
let lorem2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quisquam, quidem. Nam, quisquam.`;
console.log(lorem2);

// --------------------------------------------------------------

// * Desestructuracion de Objetos

// ! before
let person = {
    'name': 'Leonel',
    'age': 21,
    'country': 'AR'
}
console.log(person.name, person.age, person.country);

// * es6
let { name, age, country } = person;
console.log(name, age, country);

// --------------------------------------------------------------

// * Operadores de propagacion de errores (spread operator)

// ! before
let team1 = ['Julian', 'Ramiro', 'Leonel'];
let team2 = ['Juan', 'Maria', 'Pedro'];

// * es6
let education = ['David', ...team1, ...team2];

{
    var globalVar = 'Global Var';
}