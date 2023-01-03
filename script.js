let count=0;
let step=1;
let timeout;
const valu=document.getElementById("count");
const btn1=document.getElementById('btn1');
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn=document.getElementById("btn");
const inp1=document.getElementById("input1")
const inp2=document.getElementById("input2")
let btn4=document.getElementById("btn4")
let pp=1;
increase();

function increase(){
    valu.innerHTML=step+count;
    count=count+step;
    valu.style.color = "#6200ea";
    timeout=setTimeout(increase,1000)
}


function reset(){
    valu.innerHTML=0;
    count=Number(inp1.value)
  
}
function increament(){
    valu.innerHTML=count+step;
    count=count +step;
    valu.style.color = "green";
    
}
function decreament(){
    valu.innerHTML=count-step;
    count=count-step;
    valu.style.color = "red";
}
function start(){
    count= Number(inp1.value)
    step= Number(inp2.value)
}
function playpause(){
    if(pp===1){
        clearTimeout(timeout);
        pp=0;
        btn4.innerHTML=`Play ${"<i class=\"fa-solid fa-play\"></i>"}`;
        
    }
    else{
      
     pp=1;
     btn4.innerHTML=`Pause ${"<i class=\"fa-solid fa-pause\"></i>"}`;
     btn4.stp;
     increase()
    }
}
btn1.addEventListener("click",decreament);
btn2.addEventListener("click",reset);
btn3.addEventListener("click",increament);
btn.addEventListener("click",start);
btn4.addEventListener("click",playpause)





