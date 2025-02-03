const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = '';

}

function deleteLast(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);

}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }

}
function appendToDisplay(input) {
    if (input === '%') {
        display.value += '/100';
    } else {
        display.value += input;
    }
}