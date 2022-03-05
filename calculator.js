function calculation(){
    console.log("Calc");
//get values from prompt and store in variables
let number1=Number(prompt("Enter the first number:"));
let number2=Number(prompt("Enter the second number"));

//do operations and store results in variables
let sum=number1+number2;
let subtract1From2=number2-number1;
let subtract2From1=number1-number2;
let multiply=number1*number2;
let divide1Over2=number1/number2;
let divide2Over1=number2/number1;



//display in html
    document.getElementById("addition").innerHTML=`<p>The sum is: ${sum} </P>`;
    document.getElementById("subtraction").innerHTML=`<p>Number 2 (-) Number 1 is: ${subtract1From2}</p>`;
    document.getElementById("subtraction2").innerHTML=`<p>Number 1 (-) Number 2 is: ${subtract2From1}</p>`;
    document.getElementById("multiplication").innerHTML=`<p>Number 1 (x) Number 2 is: ${multiply}</p>`;
    document.getElementById("division").innerHTML=`<p>Number 1 (/) Number 2 is: ${divide1Over2}</p>`;
    document.getElementById("division2").innerHTML=`<p>Number 2 (/) Number 1 is: ${divide2Over1}</p>`;
}