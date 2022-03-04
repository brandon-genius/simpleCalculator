function calculation(){
    console.log("Calc");
//get values from prompt and store in variables
let number1=Number(prompt("Enter the number 1:"));

//do operations and store results in variables
let sum=number1+10;



//display in html
    document.getElementById("results").innerHTML=`<p>The sum is: ${sum} </P>`;
}