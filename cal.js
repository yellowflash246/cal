//DOCUMENTOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""; // you put a space
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "error";
    }
}