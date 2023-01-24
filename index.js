const box = document.querySelectorAll('.box');
// console.log(box);
let prev = true;
let count = 0;
let gridMap = [...Array(3)].map(_=>Array(3).fill(0));
box.forEach((element,key)=>{
    element.addEventListener('click',()=>{
        count++;
        if(element.innerHTML != ""){
            return;
        }
        let i = Math.floor(key/3), j = key%3;
        if(prev){
            gridMap[i][j] = 2;
            element.innerHTML = "O";
            element.style.backgroundColor = "hsl(135, 48%, 58%)";
            prev = false;
            checkIt(i, j, 2);
        }else{
            gridMap[i][j] = 1;
            element.innerHTML = "X";
            element.style.backgroundColor = "hsl(258, 48%, 58%)";
            prev = true;
            checkIt(i, j, 1)
        }
        if(count===9){
            // count = 0;
            setTimeout(()=>{
                alert("Game is a Draw!!");
                reset();
            }
                ,100);
        }
        // gridMap.forEach((e)=>console.log(e)) 
    });
});

document.querySelector(".restart").addEventListener('click',reset);
function reset(){
    count = 0;
    box.forEach((element)=>{
        element.innerHTML="";
        element.style.backgroundColor="aqua";
    });
    gridMap = gridMap.map((e)=>e.fill(0));
    // console.log(gridMap);
}

function checkIt(i, j, key){
    // let item = gridMap[0][0];
    // column constant
    let player = (key === 1)?"X":"O";
    for(let row = 0;row<3;row++){
        if(key != gridMap[row][j]){
            break;
        }
        if(row === 2 && key === gridMap[row][j]){
            setTimeout(()=>{
                alert("Player "+ player+" Won");
                reset();
            }
                ,100);
            }
        }

    for(let col = 0;col<3;col++){
        if(key != gridMap[i][col]){
            break;
        }
        if(col === 2 && key === gridMap[i][col]){
            setTimeout(()=>{
                alert("Player "+ player+" Won");
                reset();
            }
                ,100);
            }
    }
    if(i === j){
        for(let col = 0;col<3;col++){
            if(key != gridMap[col][col]){
                break;
            }
            if(col === 2 && key === gridMap[col][col]){
                setTimeout(()=>{
                    alert("Player "+ player+" Won");
                    reset();
                }
                    ,100);
                }
        }
    }
    if(i === 2 && j === 0 || i === 0 && j === 2){
        i = (j>i)?j:i;
        for(let col = 0;col<3;col++){
            if(key != gridMap[i][j]){
                break;
            }
            if(col === 2 && key === gridMap[i][j]){
                setTimeout(()=>{
                    alert("Player "+ player+" Won");
                    reset();
                }
                    ,100);
                }
            i--;j++;
        }
    }
}