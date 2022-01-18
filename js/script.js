function operationProcessing(operat){
    operator=operat;
    lastNumber=firstNumber;
    userDisplay.innerHTML=lastNumber+operat;
    userInput.innerHTML="";
    firstNumber="";
}


/*select the display in which the first number to operate on is shown
 in the calculator are*/
let userDisplay= document.getElementById("input_display");

/*select the h2 tag in which the input of the user is supposed to be displayed*/
let userInput= document.getElementById("user_input");

/*select the area in which the buttons of the calculator are*/
let calculatorButtons = document.querySelector(".calculator_buttons");

let firstNumber="";
let lastNumber="";
let operator="";

/*get the input on button click*/
calculatorButtons.addEventListener("click",
    function(event){

    console.log(event.target.innerHTML);
    console.log(parseInt(event.target.innerHTML));


    if(!isNaN(parseInt(event.target.innerHTML))){
    /*if the result from the parseInt(event.target.innerHTML) is a number*/

        firstNumber+=event.target.innerHTML;
        userInput.innerHTML=firstNumber;


    }else if(isNaN(parseInt(event.target.innerHTML))){
    /*if the result from the parseInt(event.target.innerHTML) is not
    a number*/

        if(event.target.innerHTML=="AC"){
            firstNumber="";
            lastNumber="";
            operator="";
            userInput.innerHTML="";
            userDisplay.innerHTML="";

        }else if(event.target.innerHTML=="DEL" && firstNumber!=""){

            firstNumber=firstNumber.slice(0,firstNumber.length-1);
            userInput.innerHTML=firstNumber;

        }else if(event.target.innerHTML=="." && firstNumber!="" && !firstNumber.includes(".")){

            firstNumber=firstNumber+event.target.innerHTML;
            userInput.innerHTML=firstNumber;

        }else if(event.target.innerHTML=="=" && firstNumber!="" && lastNumber!="" && operator!=""){
            if(operator=="/" && (firstNumber=="0" || lastNumber=="0")){
                lastNumber="";
                firstNumber="";
                operator="";
                userInput.innerHTML="";
                userDisplay.innerHTML="Non puoi dividere per 0";
            }else{
                userInput.innerHTML=eval(firstNumber+operator+lastNumber);
                userDisplay.innerHTML="";
                firstNumber=eval(firstNumber+operator+lastNumber);
                lastNumber="";
                operator="";
            }


         }else if(operator=="" && firstNumber!=0){
            operationProcessing(event.target.innerHTML);
         }

    }
});
