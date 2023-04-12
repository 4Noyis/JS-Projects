

// let playerScore=0;
// let computerScore=0;
// let totalRound=0;


// let playerSelection = ()=>{
//   let playerInput=prompt("rock paper scissors ?");

//   if (playerInput==="rock"||playerInput==="Rock"||playerInput==="ROCK") {
//     return "rock"
//   }if (playerInput==="paper"||playerInput==="Paper"||playerInput==="PAPER") {
//     return "paper"
//   }if (playerInput==="scissors"||playerInput==="Scissors"||playerInput==="SCISSORS") {
//     return "scissors"
//   }else{
    
//   }
// }

// let computerSelection =()=>{
//   let random= Math.floor(Math.random() * 3);

//   if (random===0) {
//     return "rock"
//   }if(random===1){
//     return "paper"
//   }if(random===2){
//     return "scissors"
//   }
// }


// function playRound(player,computer){
//   totalRound+=1;
//   console.log("------------------------------------------");  
//   console.log("Player: "+player);
//   console.log("Computer: "+computer);

//   if((player==="rock"&&computer==="rock")||
//      (player==="paper"&&computer==="paper")||
//      (player==="scissors"&&computer==="scissors")){
//         console.log("DRAW");
//         playerScore+=1;
//         computerScore+=1;
//   }if((player==="rock"&&computer==="scissors")||
//       (player==="paper"&&computer==="rock")||
//       (player==="scissors"&&computer==="paper")){
//         console.log("PLAYER WIN THIS ROUND");
//         playerScore+=1
//   }if((player==="rock"&&computer==="paper")||
//       (player==="paper"&&computer==="scissors")||
//       (player==="scissors"&&computer==="rock")){
//         console.log("COMPUTER WIN THIS ROUND");
//         computerScore+=1
//       }
   
  
  
//   console.log("playerScore: "+playerScore);
//   console.log("computerScore: "+computerScore);
//   console.log(totalRound);
//   console.log("------------------------------------------");
  
  
// }

// while (totalRound<5) {
  
//   playRound(playerSelection(),computerSelection());
  
// }


const container=document.querySelector("#container")

const red_p=document.createElement("p");
red_p.setAttribute("id","red-p");
red_p.textContent="Hey I am red!"
red_p.style.color="red";

const blue_h=document.createElement("h3");
blue_h.textContent="I’m a blue h3!"
blue_h.style.color="blue";

const content=document.createElement("div")
content.style.cssText="border: 10px; border-color: black; background-color: pink;";

const content_h=document.createElement("h1");
content_h.innerText="I’m in a div"
const content_p=document.createElement("p");
content_p.innerText="ME TOO";

content.appendChild(content_h);
content.appendChild(content_p);


container.appendChild(blue_h);
container.appendChild(red_p);
container.appendChild(content)
console.log(container);
