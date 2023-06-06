/**
 * app.js
 * Bonjour 😬
 * 04-bonjour
 * utiliser la boucle for dans le javascript pour inserer 10 fois bonjour dans votre div html et le 5eme doit être en rouge.
 */

let element = document.getElementById('app');

/* 
  Version avec ternaire.
*/
for(i = 1; i <= 10; i++){
  i === 5 ? element.innerHTML += "<p style=color:red;>Bonjour</p>" : element.innerHTML += "<p>Bonjour</p>";
}

/* 
  Version avec IF.
*/
for(i = 1; i <= 10; i++){
  if(i === 5){
    element.innerHTML += "<p style=color:red;>Bonjour</p>" 
  }else{
    element.innerHTML += "<p>Bonjour</p>";
  }
}