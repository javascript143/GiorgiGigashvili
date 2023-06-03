function one(){
    let number1 = document.getElementById("1").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number1;
}


function two(){
    let number2 = document.getElementById("2").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number2;
}

function three(){
    let number3 = document.getElementById("3").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number3;
}

function four(){
    let number4 = document.getElementById("4").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number4;
}

function five(){
    let number5 = document.getElementById("5").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number5;
}

function six(){
    let number6 = document.getElementById("6").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number6;
}

function seven(){
    let number7 = document.getElementById("7").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number7;
}

function eight(){
    let number8 = document.getElementById("8").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number8;
}

function nine(){
    let number9 = document.getElementById("9").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number9;
}

function zero(){
    let numberzero = document.getElementById("zero").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + numberzero;
}
function ac(){
    let numberzero = document.getElementById("c").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = "";
}

function plus(){
    let plus = document.getElementById("plus").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    if (oldDisplayValue == ""){
                    
        return;
    }

    count = 0
        for ( let char of oldDisplayValue){
            if(char == "+"){
                count++; 
            }
        }if(count>0) {
            return;
        }

document.getElementById("calcDisplay").value = oldDisplayValue + plus;
}

function minus(){
    let minus = document.getElementById("minus").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    if (oldDisplayValue == ""){
                    
        return;
    }

    count = 0
        for ( let char of oldDisplayValue){
            if(char == "-"){
                count++; 
            }
        }if(count>0) {
            return;
        }

    document.getElementById("calcDisplay").value = oldDisplayValue + minus;
}

function multiply(){
    let multiply = document.getElementById("multiply").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    if (oldDisplayValue == ""){
                    
        return;
    }

    count = 0
        for ( let char of oldDisplayValue){
            if(char == "x"){
                count++; 
            }
        }if(count>0) {
            return;
        }

document.getElementById("calcDisplay").value = oldDisplayValue + multiply;
}

function divide(){
    let divide = document.getElementById("divide").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    if (oldDisplayValue == ""){
                    
        return;
    }

    count = 0
        for ( let char of oldDisplayValue){
            if(char == "÷"){
                count++; 
            }
        }if(count>0) {
            return;
        }

document.getElementById("calcDisplay").value = oldDisplayValue + divide;
}


function equal(){
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    
    if (oldDisplayValue.includes("+")){
        let numbers = oldDisplayValue.split("+");
        
        let sum = 0;

        for (let number of numbers){
            sum = sum + parseInt(number);
    }
        document.getElementById("calcDisplay").value = sum;
    }else if (oldDisplayValue.includes("-")) {
        let numbers = oldDisplayValue.split("-");
        let difference = parseInt(numbers[0]);
    
        for (let i = 1; i < numbers.length; i++) {
          difference = difference - parseInt(numbers[i]);
        }
    
        document.getElementById("calcDisplay").value = difference;

    }else if(oldDisplayValue.includes("x")){
        let numbers = oldDisplayValue.split("x");

        let product = 1;

        for (let number of numbers){
            product = product * parseInt(number);
        }
        document.getElementById("calcDisplay").value = product;
    }else if (oldDisplayValue.includes("÷")) {
        let numbers = oldDisplayValue.split("÷");
        let quotient = parseFloat(numbers[0]);
    
        for (let i = 1; i < numbers.length; i++) {
          let number = parseFloat(numbers[i]);
          if (number !== 0) {
            quotient = quotient / number;
          } else {
            document.getElementById("calcDisplay").value = "Error";
            return;
          }
        }
    
        document.getElementById("calcDisplay").value = quotient;
      }
}

