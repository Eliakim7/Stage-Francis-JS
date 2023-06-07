let container = document.getElementsByClassName("block-container");
let move = document.querySelector("#btn-move");
let bloc1 = document.getElementsByClassName("first-block");

move.addEventListener('click', ()=>{
  for (let i = 0; i < bloc1.length; i++){
    
  let currPosition = bloc1[i].style.transform;
  
  if(currPosition){
    console.log(i)
    bloc1[i].style.transform = 'translate(0,40px)';
    console.log(bloc1[i].style.transform)
  }else{
    bloc1[i].style.transform = 'translate(0,0)';
  }
}
/* 
  bloc1.style.transform = currPosition === "translateX(0)" ? "translateX(40px)" : "translateX(0)";
 */
});





