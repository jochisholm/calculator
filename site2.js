//add
function add(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var add = parseFloat(num1) + parseFloat(num2),
      stringAdd = num1 + '+' + num2 + '=' + add;
      onclick=function(){
        document.getElementById('result').innerHTML=stringAdd
      }
}
function subtract(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var sub = parseFloat(num1) - parseFloat(num2),
      stringSub = num1 + '-' + num2 + '=' + sub;
      onclick=function(){
        document.getElementById('result').innerHTML=stringSub
      }
}// substract

function multiply(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var multi = parseFloat(num1) * parseFloat(num2),
      stringMulti = num1 + '*' + num2 + '=' + multi;
      onclick=function(){
        document.getElementById('result').innerHTML=stringMulti
      }
}// multiply

function divide(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var div = parseFloat(num1) / parseFloat(num2),
      stringDiv = num1 + '/' + num2 + '=' + div;
      onclick=function(){
        document.getElementById('result').innerHTML=stringDiv
      }
}// divide

// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
  var input1 = document.getElementById('first').value;
  var input2 = document.getElementById('second').value;
  var output = operation(input1, input2);
  document.getElementById('result').innerText =+ output;
  // hint: define three variables: input1, input2, and output
  // use output.innerText to set the text within it
if (input1 == "" || input2 == "") {
  document.getElementById('result').innerText = "Input numbers"}
  else {}
}
  // if input1 or input2 is an empty string, output.innerText will be
  // set to a message that tells user they need to put in the numbers

  // remember the parameter operation is a function,
  // it needs its own arguments

// grab a button element
// to each button, attach a click event to which the appropriate operation is assigned
document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('subtract').onclick = function(){populatehtml(subtract)};
document.getElementById('divide').onclick = function(){populatehtml(divide)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
