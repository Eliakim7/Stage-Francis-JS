const divRoot = document.querySelector("#root")

/* let text = "<p>Bonjour</p>";
let count = 1
divRoot.innerHTML = text;

divRoot.addEventListener('click', () => {
  if (count === 4) {
    text += "<p style='color: red;'>Bonjour</p>";
  } else if (count < 10) {
    text += "<p>Bonjour</p>";
  }
  count++;
  divRoot.innerHTML = text
}
) */

let text = '';

for(let i = 0; i < 10; i ++){
    if (i===4){
      text += "<p style='color: red;'>Bonjour</p>"
    }else if (i<11){
      text += '<p>Bonjour</p>'
    }
}

divRoot.innerHTML = text;


 


