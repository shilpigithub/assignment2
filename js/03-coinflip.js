let randomNum = Math.round(Math.random())
let choice = prompt("Please enter Heads  or Tails").toLowerCase();
let coinFlip = randomNum;

if (coinFlip === 1 ){
    document.write(`The coin flip is head`);
}else{
    document.write(`The coin flip is tail`);
}

if(coinFlip === 1){
    if(choice === "head" || choice === "heads"){
        alert('The flip was heads and you chose heads...you win!');
    }
    else if(choice === "tail" || choice === "tails"){
        alert('The flip was heads but you chose tails...you lose!');
    }else{
        alert('Please enter head or tail')
    }

}else{
    if(choice === "head" || choice === "heads"){
        alert('The flip was tails but you chose heads...you lose!');
    }
    else if(choice === "tail" || choice === "tails"){
        alert('The flip was tails and you chose tails...you win!');
    }else{
        alert('Please enter head or tail')
    }

}

