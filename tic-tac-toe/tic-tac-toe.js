let boxes = document.querySelectorAll(".game")
let xWin = document.getElementById("Xwinner")
let yWin = document.getElementById("Ywinner")
let abc = document.getElementById("abc")
let reset =document.getElementById("reset")
let turn = true
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let count=0;
let x=0
let o=0
boxes.forEach((game)=>{
    game.addEventListener("click",()=>{
        if(turn){
            game.innerText="O"
            turn=false
        }
        else{
            game.innerText="X"
            turn=true
        }
            count++
        game.disabled=true
        if(count>4){
        checkWinner()
        }
        // console.log(count)
        if(count===9){
            resetGame()
        }
    })
})
const winnerIs=(p1)=>{
    for(let box of boxes){
        box.disabled=true
    }
    if(p1==='X'){
        x++
    }
    else if(p1==='O'){
        o++
    }
    // console.log(x)
    // console.log(o)
    printWinner(p1,x,o)
}
const printWinner= (p1,x,o)=>{
    
    abc.innerText+= " " + p1 + ","
    xWin.innerText=x
    yWin.innerText=o
}
const checkWinner =()=>{
    for(let pattern of winPattern){
       let p1=boxes[pattern[0]].innerText
       let p2=boxes[pattern[1]].innerText
       let p3=boxes[pattern[2]].innerText
       if(p1!="" || p2!="" || p3!=""){
        if(p1=== p2 && p2=== p3){
            winnerIs(p1)
            

        }
       }
    }
}
const resetGame = ()=>{
    turn = true
    enableBoxes()
    count=0
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
reset.addEventListener("click",resetGame)
