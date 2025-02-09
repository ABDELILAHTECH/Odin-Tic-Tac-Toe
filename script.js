let squares = document.querySelectorAll(".square");
let squaresArr = [];
let square = document.querySelector("#scure1");

let player1Name = document.querySelector("#name1");
let player1Symbol = document.querySelector('#symbol1');
let player1ConfirmationBtn = document.querySelector('#confirm1');

let player2Name = document.querySelector("#name2");
let player2Symbol = document.querySelector('#symbol2');
let player2ConfirmationBtn = document.querySelector('#confirm2');

let player1,player2,curentPlayer;
function Player(name,symbol){
     this.name = name;
     this.symbol = symbol;
}




let mainGame = document.querySelector(".mainGame");
let start = document.querySelector("#start");
let restart = document.querySelector("#restart");

start.addEventListener("click",()=>{
   mainGame.style.display = "flex";
   restart.style.display = "flex";
   player1 = new Player(player1Name.value,player1Symbol.value);
   player2 = new Player(player2Name.value,player2Symbol.value);
   curentPlayer = player1;

})


const playerSwitch = () =>{
     if (curentPlayer === player1) {
          curentPlayer = player2;
     }
     else{
          curentPlayer = player1;
     }
}
squares.forEach((sq,key)=>{
    sq.addEventListener("click",()=>{
          sq.innerHTML = curentPlayer.symbol;
          squaresArr[key] = curentPlayer.symbol;
          winner();           
          playerSwitch();
    })
})

const winner = () => {
     const winCases = [[0,1,2],[3,4,5],[6,7,8],
                 [0,3,6],[1,4,7],[2,5,8],
                 [0,4,8],[2,4,6]
                ]

     for (const winCase of winCases) {
       let  [a,b,c] = winCase;
       if (squaresArr[a] != undefined && squaresArr[b] != undefined && squaresArr[c] != undefined &&
           squaresArr[a] == squaresArr[b] && squaresArr[b] == squaresArr[c]) {
          alert(`${curentPlayer.name} is the winner`);
       }
       
     }
} 
const valuesInitilisation = () =>{
     player1Name.value = "";
     player2Name.value = "";
     player1Symbol.value = "";
     player2Symbol.value = "";
}

window.location.reload = valuesInitilisation();
restart.addEventListener("click",()=>{
     valuesInitilisation();
     location.reload
})