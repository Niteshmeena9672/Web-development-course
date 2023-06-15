// var generateName = require("sillyname");
import generateName from "sillyname";
import superheroes from "superheroes";
var sillyname = generateName();
console.log(`My name is ${sillyname}`);

var superherosname = superheroes.random();
console.log(`My name is ${superherosname}`);
console.log(superheroes.all);
