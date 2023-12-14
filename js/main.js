
const sum = (a = 10 , b = 10) => {
    const addition = a + b ;
    return addition;
}

const sub = (a = 10 , b = 10) => {
    const subtraction = a - b ;
    return subtraction;
}
const multi = (a = 10 , b = 10) => {
    const multiplication = a * b ;
    return multiplication;
}
const div = (a = 10 , b = 10) => {
    const division = a / b ;
    return division;
}
const modlas = (a = 10 , b = 10) => {
    const modules = a % b ;
    return modules;
}
const expo = (a = 10 , b = 10) => {
    const expronantional = a ** b ;
    return expronantional;
}


const allFunctionArray = [sum,sub,multi,div,modlas,expo];

const inputFirstValue = document.getElementById("value1");
const inputSecondValue = document.getElementById("value2");
const btn = document.getElementById("btn");
const display = document.getElementById("display");


btn.addEventListener("click" , () => {
    const firstValue = parseInt(inputFirstValue.value);
    const secondValue = parseInt(inputSecondValue.value);

    for(let i = 0; i < allFunctionArray.length; i++ ){
      const allFinalResult = allFunctionArray[i](firstValue , secondValue);
      display.innerHTML += `${allFinalResult} </br>`;
     console.log( allFinalResult);

    }


}) 
