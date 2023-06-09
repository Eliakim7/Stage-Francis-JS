let final = document.getElementById("final");

/* 01 - Écrire une fonction qui calcule la somme de deux nombres. */
const add = (a, b) => {
  return a + b;
};
console.log(add(1000, 39992));

/* 02 - Écrire une fonction qui détermine si un nombre est pair.
 */
const pair = (a) => {
  if (a % 2 === 0) {
    return `${a} est un nombre pair`;
  } else {
    return `${a} n'est pas un nombre pair`;
  }
};
console.log(pair(3));

/* 03 - Écrire une fonction qui renvoie la longueur d'une chaîne de caractères. */
const stringLength = (a) => {
  if (a !== "") {
    return a.length;
  }
};
console.log(stringLength("sangoku"));

/* 04 - Écrire une fonction qui vérifie si un nombre est positif.
 */
const plus = (a) => {
  if (a >= 0) {
    return `${a} est positif`;
  } else {
    return `${a} n'est pas positif`;
  }
};
console.log(plus(-3));

/* 05 - Écrire une fonction qui renverse un tableau donné.
 */
let brand = ["Adidas", "New Balance", "Nike", "Puma"];
const reverseArray = (a) => {
  return a.reverse();
};
console.log(reverseArray(brand));

/* 06 - Écrire une fonction qui vérifie si une chaîne de caractères est vide. */
const emptyString = (a) => {
  if (a === "") {
    return `la chaîne de caractères est vide`;
  } else {
    return a;
  }
};
console.log(emptyString(""));

/* 07 - Écrire une fonction qui concatène deux tableaux en un seul tableau. */
let fruits = ["ananas", "banane", "fruits de la passion", "mangue"];
let couleurs = ["vert", "jaune", "rouge", "orange"];

const concatArrays = (a,b) => {
  return a.concat(b);
};
console.log(concatArrays(fruits,couleurs))

/* 08 - Écrire une fonction qui inverse une chaîne de caractères. */
const reverseStr = (a) => {
  return a.split("").reverse().join("");
};
console.log(reverseStr("abracadabra"));

/* 09 - Écrire une fonction qui renverse l'ordre des mots dans une phrase.
 */

const reversePhrase = (a) => {
  
  return a.split(" ").reverse().join(" ");
};
console.log(reversePhrase('thierry henry gunner'))


/* 10 - Écrire une fonction qui affiche les lettres de l'alphabet de A à Z. */

const alphabet = () => {
  let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for(let i=0; i< alph.length; i++){
    return 
  }
};
console.log(alphabet());
