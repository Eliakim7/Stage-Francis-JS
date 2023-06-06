//Pour sélectionner/cibler la div sur laquelle je veux ajouter un évènement
const divRoot = document.querySelector("#root");

//Pour donner du style css à ma div ciblée
divRoot.style.background = 'red';
divRoot.style.width = '150px';
divRoot.style.height = '150px';

//Pour ajouter un évènement à ma div ciblée
divRoot.addEventListener("click", ()=> {
  //Pour cibler l'élèment de la div à modifier
  const curColour = divRoot.style.background;

  /* if (curColour === 'red') {
      divRoot.style.background = "yellow";
  }
  else {
      divRoot.style.background = "red";
  } */

  divRoot.style.background = curColour === 'red' ? 'yellow' : 'red';
});
