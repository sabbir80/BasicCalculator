console.log("hi this calculator")

function dis(val)
{
	console.log(val);
document.getElementById("edu").value+=val
console.log(document.getElementById('edu').value)

 };
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value
console.log(x)
let y = eval(x)
console.log(y)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{		
document.getElementById("edu").value = ""
}