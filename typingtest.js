let seconds=document.getElementById("seconds");
let spinnerOne=document.getElementById("spinnerOne");
let spinnerTwo=document.getElementById("spinnerTwo");

let result=document.getElementById("result");


let quoteDisplay=document.getElementById("quoteDisplay");
let quoteuserInput=document.getElementById("quoteInput");

let submitBtn=document.getElementById("submitBtn");
let resetBtn=document.getElementById("resetBtn");

let secondsid;
function timer(){
    let count=0;
    secondsid=setInterval(function(){
        count=count+1;
        seconds.textContent=count;
    },1000);
}



function displayquestion(){
    spinnerOne.classList.toggle("d-none");
    let object={
        method:"GET"
    };
    let url="https://apis.ccbp.in/random-quote";

    fetch(url,object)
    .then(function(response){
        return response.json();
    })
    .then(function(jsondata){
        spinnerOne.classList.toggle("d-none")
        quoteDisplay.textContent=jsondata.content;
    })
}


submitBtn.onclick=function(){
    spinnerTwo.classList.toggle("d-none");
    if(quoteuserInput.value===quoteDisplay.textContent){
        clearInterval(secondsid);
        let time=seconds.textContent;
        spinnerTwo.classList.toggle("d-none");
        result.textContent="You typed in seconds "+time+" seconds";
    }else{
        spinnerTwo.classList.toggle("d-none");
        result.textContent="You are written wrong sentence";
    }
}

resetBtn.onclick=function(){
    result.textContent="";
    quoteInput.value="";
    displayquestion();
    clearInterval(secondsid);
    timer();
}

displayquestion();
timer();