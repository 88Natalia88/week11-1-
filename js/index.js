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
    document.getElementById("result").innerHTML = result;
}