//console.log("hello");


//--------To know by class name---------
// const var1= document.getElementsByClassName("DIV");
// console.log(var1);
//in this its only show this is a html collection and we try to check its children then its become undefined

//--------To know by id---------
// const var3= document.getElementById("DIV");
// console.log(var3); // in this its show it is a div element
// console.log(var3.children); // when we try to check its children its show its a HTMl Collection and how many children are there
// console.log(var3.children[2].innerHTML); // from this we know the exact element by index 

//--------Query Selector--------------
// const var2= document.querySelector("#DIV");
// console.log(var2);
// console.log(var2.children);
// console.log(var2.children[2].innerHTML);





//-----------------innerHTML-----------

//console.log(document.getElementById("pid").innerHTML) //this will run only on browser
// in this we get result as it is we have written in a html file including tags for example. Lorem ipsum dolor sit amet.<span> Hello I am also exist</span>

// when we do console,log(window or document) its throw an error window or document i snot defined because its a object of browser not on vs code

//--------------OuterHTML-------------

// OuterHTML shows full line of code

//--------------Innertext------

//console.log(document.getElementById("pid").innerText); // in this its show only text which is visible i will not show the hidden file for an ex. if use display none then its will not show the text 

//-------------textContent------------
//console.log(document.getElementById("pid").textContent);
// in this this will show the complete text including hidden text which is written in HTML

//---------------- Get attribute-------------

// const pass=document.getElementById("Password");
// console.log(pass);
        //output:- <input id="Password" type="password" value="***">
// console.log(pass.getAttribute("value"));
        //output:- ***(Value)

  // By using it at we get name of the class, ID, its type, and value 
  // For using this we have to create a constant or a variable and this will only work in browser not in VS code     

//---------- Set Attribute -------------
    // Set attribute overwrite the value

//const pass=document.getElementById("Password");  
//console.log(pass.setAttribute("class", "passClass"));  

// In this we change the attribute or value but we have to take care about when we are writing syntax under the bracket firstly we have write what we have to change and then after we will write the value ("class", "passClass") For separating we will use comma

// we can use for loop in HTML Collection but for each will not be used

// const parent= document.querySelector(div);
// console.log(parent.)


//-------------Html Collection----------------

// when we do getelemntbyclassname,  getelemntbyid, getelemntbytagname we get Html COlleticion will update live, we get length, value under the bracket, access element.

//--------------Node list---------------------------

// we get node list when we do queryselector and use multiple functions of array its static will not update live