let boxes=document.querySelectorAll(".box");
let resetgame=document.querySelector(".reset");
let newgame=document.querySelector(".newbutton");
let result=document.querySelector(".result");
let winner=document.querySelector("#winner")
let turnalt=true;
const pattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];
let count=0;
const resetGames=()=>{
    turnalt=true;
    count=0;
    enableBoxes();
    result.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turnalt){
        box.innerText="O";
        turnalt=false;
    }
    else{
        box.innerText="X";
        turnalt=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkWinner();
    if(count === 9 && !isWinner){
        gameDraw();
    }
});
});
const disableBoxes=()=>{
    for( let box of boxes){
       box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
};
const realWinner=(val)=>{
    winner.innerText=`Cogratulations,Winner is ${val}`;
    result.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let winningpattern of pattern ){
    let val0pos=boxes[winningpattern[0]].innerText;
    let val1pos=boxes[winningpattern[1]].innerText;
    let val2pos=boxes[winningpattern[2]].innerText;
    if(val0pos!="" && val1pos!="" && val2pos!="" ){
        if(val0pos===val1pos && val1pos===val2pos){
            realWinner(val0pos);
        }
    }
    }
};
const gameDraw=()=>{
    winner.innerText=`Game was draw`;
    result.classList.remove("hide");
    disableBoxes();
};
newgame.addEventListener("click",resetGames);
resetgame.addEventListener("click",resetGames);