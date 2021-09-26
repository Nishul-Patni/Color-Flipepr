let btn = document.getElementById("change");
let container = document.getElementById("container"); 
let code = document.getElementById("code");
let r,g,b;
let randomColor;
let hexCode;

let codeType = "rgb";

let setCode = function(code){
    codeType = code;
    append(codeType);
}

let change = function () {
    r = Math.floor((Math.random()*255));
    g = Math.floor((Math.random()*255));
    b = Math.floor((Math.random()*255));
    randomColor = "rgb("+r+", "+g+", "+b+")";
    container.style.backgroundColor = randomColor;
    toHex();
    append(codeType);
}

let toHex = function(){
    hexCode = '#'+r.toString(16)+g.toString(16)+b.toString(16); 
}

let append = function(codeType){
    if(codeType=="rgb"){
        code.innerHTML = randomColor;
    }
    else{
        code.innerHTML = hexCode;
    }
}

change();