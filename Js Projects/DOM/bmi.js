const form= document.querySelector(".form");
console.log(form);// to involve the form 

form.addEventListener("submit", function(e){
    e.preventDefault();// this is used for blocking the page default function in this senario form is submitted automatically while page is loading so for stopping this we use preventDefault
    const height=parseInt(document.querySelector("#height").value);//parseInt is used for changing any datatype to integer
    const weight=parseInt(document.querySelector("#weight").value);
    //console.log(height);
    //console.log(weight);
    const resultE= document.querySelector("#result");//Selects the element where the result will be displayed (maybe a <div> or <p>) Stores it in resultE.
    if(height==="" || height<0 || isNaN(height)){
        resultE.innerHTML =`Please Enter valid Number`;}
    else if(weight==="" || weight<0 || isNaN(weight)){
        resultE.innerHTML =`Please Enter valid Number`;}
    else{ const result = (weight / ((height * height) / 10000)).toFixed(2);//.toFixed(2) makes the result show only 2 decimal places.   
        resultE.innerHTML=`Your Body Mass index is ${result} kg/m sq`
    }
    })

    




    