
function func(){
let number = document.getElementById('number').value;
let number2 = document.getElementById('number2').value;
number2 = Math.pow(number, 2).value;
}


//Калькулятор

function calc(){
    let a = document.getElementById('num1').value;
    a = Number(a);
    let b = document.getElementById('num2').value;
    b = Number(b);
    let operator = document.getElementById('operation').value;
    switch(operator){
case '+': 
result = a + b;
break;
case "-": 
result = a - b;
break;
case "*": 
result = a * b;
break;
case "/": 
result = a / b;
break;
    }
    document.getElementById("result").value = result;
}