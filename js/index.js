let number = document.getElementById('number');
let number2 = document.getElementById('number2');

function func(){
    if(number**2){
        number2.removeAttribute('disabled');
        
    } else{
        number2.getAttribute('disabled')
    }
}
number2 = result;



//Калькулятор
let a = document.getElementById('firstNumber');
a = Number(a);

let b = document.getElementById('secondNumber');
b = Number(b);

let operation = document.getElementById('operation').value;
function calc(){
    switch(operation){
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
    document.getElementById("result").innerHTML = result;
}